import React, { useState } from 'react'
import "./index"
import { SecurityHandler } from "../../../functions"
const useHandlerData = ( initialValue ) => {
    const [ objectData, setObjectData ] = useState( () => 
        initialValue ? initialValue : {} 
    )
    const updateData = ( value, propName ) => {
        let saveData = objectData
        saveData[propName] = value
        setObjectData(saveData)
    }
    const cleanData = () => {
        setObjectData({})
    }
    return [ objectData, updateData, cleanData ]
}
const useHandlerPassword = ( updateData , hashKey ) => {
    const hash = SecurityHandler.generateHash()
    const [ passwords, setPasswords ] = useHandlerData()
    const checkPassword = ( value, key ) => {
        setPasswords( SecurityHandler.encryptPassword(value,hash), key )
        validatePassword()
        setHash()
    }
    const validatePassword = () => {
        const keys = Object.keys(passwords)
        if ( keys.length === 2 && passwords[keys[0]] !== '' ){
            updateData( passwords[keys[0]] === passwords[keys[1]] ? passwords[keys[1]] : "" , keys[0] )
        }else if( passwords[keys[0]] !== '' ) {
            updateData( passwords[keys[0]], keys[0] )
        }else{
            updateData( "", keys[0] )
        }
    }
    const setHash = () =>{
        if( typeof hashKey === 'string' ){
            updateData( hash, hashKey )
        }
    }
    return checkPassword
}
export {
    useHandlerData,
    useHandlerPassword
}