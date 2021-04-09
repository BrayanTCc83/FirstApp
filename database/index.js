import React, { useState } from 'react'
import DatabaseStructure from "./database-structure.json"
import Database from '@react-native-firebase/database'
import { ErrorHandler, SecurityHandler } from "../functions"
export default function DatabaseFunctions(ref, key){
    const refs = DatabaseStructure.refs
    let isRef = false
    const validate = (ref) =>{
        for(const refValue of refs ){
            isRef = ref === refValue 
            if( isRef ) break
        } 
        if (!isRef) throw new Error ("The value of ref is invalid, try use 'posts', 'chats' or 'users'") 
    }
    validate(ref)

    const [ reference, setReference ] = useState( Database().ref(ref) )
    const [ accessKey, setKey ] = useState( key ? key : "" )

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

    const [ values , setValues ] = useState( {} )
    const getValues = () => {
        reference.once('value').then(
            (snap) => { 
                setValues( snap.toJSON() )
            } 
        )
        return values
    }
    const [ getValue, setValue ] = useState("")
    const getOneValue = ( value ) => {
        reference.once('value').then(
            (snap) => {
                setValue( value !== 'key' ? snap.child(value) : snap.key ) 
            }
        )
        return getValue
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

    const pushElement = ( data ) => {
        extractData( data )
        return reference.push( data ).key
    }
    return {
        getKeys,
        getTypes,
        getValues,
        getOneValue,
        changeReference,
        updateData,
        pushElement,
        reference
    }
}