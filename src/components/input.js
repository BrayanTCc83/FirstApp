//React import
import React, { Fragment } from 'react'
import { useState } from 'react'

//React native import
import { TextInput, StyleSheet } from 'react-native'

//Provider
import { useAplicationContext } from "../provider"

//Components import
import TextView from './text'

//Component definition
const Input = (props) => {
    //State
    const [inputValue,setValue]=useState('')
    //Read data from Context Provider
    const style = useAplicationContext().appTheme.style
    const width = useAplicationContext().width
    const fonts = useAplicationContext().fontSizes
    const fontColor = useAplicationContext().fontColor
    //Style definition
    const inputStyle = StyleSheet.create({
        input : {
            backgroundColor: 'transparent',
            borderColor : style.main,
            borderWidth : 1,
            borderRadius: 15,
            maxWidth: width - width/5 ,
            left: width/10,
            zIndex : 2,
            fontSize : fonts.info,
            fontWeight : 'bold',
            paddingHorizontal: 15,
            marginVertical : 10
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