//React import
import React, { Fragment } from 'react'
import { useState } from 'react'

//React native import
import { TextInput, StyleSheet } from 'react-native'

//Provider
import { useDesignContext } from "../../provider/designProvider"

//Components import
import { STYLE_DEFINITIONS } from '../../../global/definitions'

//Component definition
const Input = (props) => {
    const name = props.name ? props.name : ""
    //Read data from Context Provider
    const { mainColor, fontColor, grayFontColor, secondaryColor, width, fontSizes } = useDesignContext()

    const updateValue = (value) => {
        props.onChange ? props.onChange(value, name) : ()=>{}
    }
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
                placeholderTextColor = {
                    grayFontColor
                }
                style={inputStyle.input} 
                placeholder={props.children?props.children:"Input"}
                onChangeText = { updateValue }
                onBlur = { props.onBlur ? props.onBlur() : ()=>{} }
                multiline= {props.multiline?props.multiline : false}
                maxLength = { props.maxLength? props.maxLength : 800 }
                secureTextEntry = { props.password ? props.password : false }
            />
        </Fragment>
    )
}
//Export component view
export default Input