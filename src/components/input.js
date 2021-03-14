//React import
import React, { Fragment } from 'react'
import { useState } from 'react'

//React native import
import { TextInput, StyleSheet } from 'react-native'

//Provider
import { useDesignContext } from "../provider/designProvider"

//Components import
import TextView from './text'

//Component definition
const Input = (props) => {
    //State
    const [inputValue,setValue]=useState('')
    //Read data from Context Provider
    const { mainColor, secondaryColkor, width, fontSizes } = useDesignContext()
    //Style definition
    const inputStyle = StyleSheet.create({
        input : {
            backgroundColor: 'transparent',
            borderColor : mainColor,
            borderWidth : 1,
            borderRadius: 15,
            maxWidth: width - width/5 ,
            left: width/10,
            zIndex : 2,
            fontSize : fontSizes.info,
            fontWeight : 'bold',
            paddingHorizontal: 15,
            marginVertical : 10,
            ...props.style
        }
    })
    return (
        <Fragment>
            <TextInput 
                style={inputStyle.input} 
                placeholder={props.children?props.children:"Input"}
                onChange={setValue}
                />
        </Fragment>
    )
}
//Export component view
export default Input