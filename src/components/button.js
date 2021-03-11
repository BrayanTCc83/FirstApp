//React import
import React, { Fragment } from 'react'

//React native imports
import { TouchableHighlight, StyleSheet } from 'react-native'

//Provider
import { useAplicationContext } from "../provider"

//Components import
import TextView from './text'

const Button = (props) => {
    const style = useAplicationContext().appTheme.style
    const width = useAplicationContext().width
    const height = useAplicationContext().height
    const fontColor = useAplicationContext().fontColor
    const buttonStyle = StyleSheet.create({
        buttonType1 : {
            backgroundColor : style.main,
            maxWidth: width - width/5 ,
            borderRadius : width/5,
            padding: 12,
            left: width/10,
            marginVertical: 10,
            borderColor: style.main,
            borderWidth: 1
        },
        buttonType2 : {
            backgroundColor : fontColor.white,
            maxWidth: width - width/5 ,
            borderRadius : width/5,
            padding: 12,
            left: width/10,
            marginVertical: 10,
            borderColor: style.main,
            borderWidth: 1
        }
    })
    return (
        <Fragment>
            <TouchableHighlight onPress={props.onPress?props.onPress:null} style={
                    props.type===2?
                        buttonStyle.buttonType2:
                    buttonStyle.buttonType1
                } >
                <TextView type={4} color={
                    props.type===2?
                        "":
                        fontColor.white} 
                    >
                    {props.children?props.children:'Button'}
                </TextView>
            </TouchableHighlight>
        </Fragment>
    )
}

export default Button