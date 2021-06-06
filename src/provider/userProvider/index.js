import React, { useContext, useEffect, useMemo, useState } from 'react'
import Database from "../../../database"
import { SecurityHandler } from '../../../functions'
import useReactFile from "../../hooks/useReactFileFile"
import { FILES_NAMES } from "../../../global/definitions"
import { useHandlerData } from '../../hooks/handlers'
const UserContext = React.createContext()
var save = false
const UserProvider = ( props ) => {
    const [ isFileAuthRead, setFileRead ] = useState( save )
    const [ isUser, setUser ] = useState( false )
    const [ userData, setUserData, cleanData ] = useHandlerData()
    const UserDocument = Database( 'users' )
    const keys = UserDocument.getKeys()
    const ReactFile = useReactFile()

    const readUserFile = () => {
        ReactFile.fileExists( FILES_NAMES.AUTH ).catch((err)=>console.log(err))
            .then((value)=>{
                if( typeof value === 'object' ){
                    const token = value.token ? value.token : ""
                    if ( token !== "" ){
                        if( SecurityHandler.validateToken( token ) ){
                            const accessKey = SecurityHandler.getTokenData( token )[keys[0]]
                            setUserData( accessKey, "key" )
                            UserDocument.getOneValue( accessKey ,keys[8], (hash)=>{
                                setUser( SecurityHandler.getAccess( token, hash ) )
                                UserDocument.getValues( accessKey, ( key, value, index )=>{
                                    if( ! ( key === keys[8] || key === keys[9] ) ){
                                        setUserData( value, key )
                                    }
                                } )
                            })
                        }
                    }
                }
            })
            .then(()=>{
                save = true
                setFileRead(true)
            })
            .catch((err)=>{
                save = false
                setFileRead(true)
                console.log(err)
            })
    }

    const login = ( data ) => { 
        let forToken = {
            [keys[0]] : data[keys[0]],
            [keys[7]] : data[keys[7]]
        }
        const token = SecurityHandler.generateToken( forToken, data[keys[8]] )
        console.log( accessKey )
        const UserFile = {
            'token' : token
        }
        ReactFile.writeFile( FILES_NAMES.AUTH, UserFile )
    }
    const logout = () => {
        setUser(false)
        cleanData()
        ReactFile.writeFile( FILES_NAMES.AUTH, { token : '' } )
    }
    const register = ( newUser ) => {
        if( UserDocument.pushElement( newUser ) ) {
            login( newUser )
        }
    }

    const value = useMemo( () => {
        return ({
            isUser,
            userData,
            isFileAuthRead,
            register,
            login,
            logout,
            readUserFile
        })
    }, [ isUser, userData, isFileAuthRead ] )
    return (
        <UserContext.Provider value = {value} {...props} >
            {props.children}
        </UserContext.Provider>
    )
}
const useUserContext = () => {
    const context = useContext( UserContext )
    if( ! context ){
        throw new Error("The user context must be used on a provider, this context provide user information like token and user data")
    }
    return context
}
export {
    UserProvider,
    UserContext,
    useUserContext
}