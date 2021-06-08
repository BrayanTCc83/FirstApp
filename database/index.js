import React, { useState } from 'react'
import DatabaseStructure from "./database-structure.json"
import Database from '@react-native-firebase/database'
import FirebaseStorage from '@react-native-firebase/storage'
import { ErrorHandler, SecurityHandler } from "../functions"
import { FileSystem } from 'react-native-unimodules'
import * as ReactNativeFile from 'react-native-fs'
const refs = DatabaseStructure.refs
const validate = (ref) =>{
    let isRef = false
    for(const refValue of refs ){
        isRef = ref === refValue 
        if( isRef ) break
    } 
    if (!isRef) throw new Error ("The value of ref is invalid, try use 'posts', 'chats' or 'users'") 
}
export default function DatabaseFunctions(ref, key){
    validate(ref)

    const [ reference, setReference ] = useState( () => {
        return key ? Database().ref( ref ).child( key ) : Database().ref(ref)
    } )
            

    const changeReference = (ref) => {
        validate(ref)
        setReference( Database().ref(ref) )
    }

    const getKeys = () => {
        return Object.keys(DatabaseStructure[ref])
    }

    const getTypes = () => {  
        return Object.assign(DatabaseStructure[ref])
    }

    const getValues = ( key, callback ) => {
        return key ? 
        reference.child(key).once('value').then( (snap) => {
                let index = 0
                snap.forEach(( property )=>{
                    callback( [property.key], property.val() , index )
                    index++
                })
            }
        )
        :
        reference.once('value').then( (snap) => {
            let index = 0
            snap.forEach(( property )=>{
                callback( [property.key], property.val() , index )
                index++
            })
        }
    )
    }
    const getAllValues = ( key, callback ) => {
        return reference.child(key).on('child_added', (snap) => {
                let index = 0
                snap.forEach(( property )=>{
                    callback( [property.key], property.val() , index )
                    index++
                })
            }
        )
    }
    const awaitForValues = ( key, callback ) => {
        reference.child( key ).on( 'value', (snap) => {
            let index = 0
            console.log( snap )
            snap.forEach( ( property ) => {
                callback( [property.key], property.val(), index )
                index ++
            } )
        } )
    }
    const pushOnArray = ( key, data, callback ) => {
        reference.child( key ).once( 'value').then(( snap ) => {
            reference.child( key ).child( snap.numChildren() + "" ).set( data ).then( () =>{
                callback()
            } )
        } )
    }
    const setValue = ( key, data, callback ) => {
        reference.child( key ).set( data ).then( () => {
            callback()
        } )
    }

    const getOneValue = ( key , propName, callback ) => {
        return reference.child(key).child(propName).once('value').then(
            (snap) => {
                callback(snap.val())
            }
        )
    }

    const findCoincidence = ( propName, value, callback ) => {
        reference.on('value',  ( snap ) => {
            let index = snap.numChildren()
            if(snap.forEach( (child)=> {
                index--
                return child.val()[propName] === value
            } )){
                callback( Object.keys(snap.val())[index] )
            }
        } )
    }

    const extractData = ( data ) =>{
        let keys = Object.keys( data )
        for( let index = 0; index < keys.length ; index++ ){
            SecurityHandler.validateDataType( data[keys[index]], getTypes()[keys[index]] ) 
        }
        return true
    }

    const updateData = ( newData ) => {
        extractData( newData )
        reference.update( newData )
    }

    const pushElement = ( data, callback ) => {
        extractData( data )
        callback ? callback() : ()=>{}
        return reference.push( data ).key
    }

    const getReference = ( child ) => {
        let newRef = reference.child( child )
        return newRef
    }
    return {
        getKeys,
        getTypes,
        getValues,
        getOneValue,
        changeReference,
        updateData,
        pushElement,
        findCoincidence,
        getReference,
        getAllValues,
        pushOnArray,
        setValue,
        awaitForValues,
        reference
    }
}
export function Storage( ref, key ){
    validate(ref)
    const [ reference, setReference ] = useState( FirebaseStorage().ref( ref ) )
    const uploadOnceFile = ( fileUri, callback, i, mI ) => {
        var state = false
        let fileName = fileUri.split('/')[fileUri.split('/').length - 1]
        let index = i ? i : 0
        let maxIndex = mI ? mI : 0
        reference.child( key ).child( fileName )
            .putFile( fileUri ).then((snapshot)=>{
                reference.child( key ).child( fileName ).getDownloadURL().then( 
                    (val) => {
                        if( index === maxIndex ) state = true
                        callback( val, index, new Promise( function( resolve, reject ){
                            resolve(state)
                        } ) )
                    }
                )
        })
    }
    const uploadFiles = ( filesUris, callback ) => {
        var state = false
        if( filesUris.length > 0 ){
            for( i = 0; i < filesUris.length; i++ ){
                let index = i
                let fileUri = filesUris[i]
                let fileName = fileUri.split('/')[fileUri.split('/').length - 1]
                reference.child( key ).child( fileName )
                    .putFile( fileUri ).then((snapshot)=>{
                        reference.child( key ).child( fileName ).getDownloadURL().then( 
                            (val) => {
                                if( index === filesUris.length - 1 ) state = true
                                callback( val, index, new Promise( function( resolve, reject ){
                                    resolve(state)
                                } ) )
                            }
                        )
                })
            }
        }else{
            callback( null, 0, new Promise( function( resolve, reject ){
                resolve( true )
            } ) )
        }
    }
    const uploadVideos = ( videosFiles, callback ) =>{
        if( videosFiles.length > 0 ){
            var state = false
            for( i = 0; i < videosFiles.length; i++ ){
                let index = i
                let videoUri = videosFiles[i]
                let videoName = videoUri.split('/')[videoUri.split('/').length - 1]+'.mp4'
                let newFileUri = FileSystem.cacheDirectory + videoName
                FileSystem.copyAsync( {
                    from : videoUri,
                    to : newFileUri
                } ).then( ()=>{
                    reference.child( key ).child( videoName )
                        .putFile( newFileUri ).then((snapshot)=>{
                            reference.child( key ).child( videoName ).getDownloadURL().then( 
                                (val) => {
                                    if( index === videosFiles.length - 1 ) state = true
                                    callback( val, index, new Promise( function( resolve, reject ){
                                        resolve(state)
                                    } ) )
                                }
                            ).catch( e => console.log(e) )
                        } ).catch( e => console.log(e) )
                    }
                ).catch( e => console.log( e ) )
            }
        }else{
            callback( null, 0, new Promise( function( resolve, reject ){
                resolve( true )
            } ) )
        }
    }
    return{
        uploadFiles,
        uploadVideos,
        uploadOnceFile
    }
}