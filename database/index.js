import React, { useState } from 'react'
import DatabaseStructure from "./database-structure.json"
import Database from '@react-native-firebase/database'
export default function DatabaseFunctions(ref){
    const refs = DatabaseStructure.refs
    let isRef = false
    for(const refValue of refs ){
        isRef = ref === refValue 
        if( isRef ) break
    } 
    if (!isRef) throw new Error ("The value of ref is invalid, try use 'posts', 'chats' or 'users'") 

    const [ reference, setReference ] = useState( Database().ref(ref) )

    const getKeys = () => {
        return Object.keys(DatabaseStructure[ref])
    }

    const getTypes = () => {
        return Object.values(DatabaseStructure[ref])
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
    
    return {
        getKeys,
        getTypes,
        getValues
    }
}