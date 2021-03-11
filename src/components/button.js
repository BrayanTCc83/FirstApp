//React import
import React, { Fragment } from 'react'

//React native imports
import { TouchableHighlight, StyleSheet } from 'react-native'

//Provider
import { useAplicationContext } from "../provider"

//Components import
import TextView from './text'

const Button = (props) => {
    const { mainColor, whiteColor, width } = useAplicationContext()
    const buttonStyle = StyleSheet.create({
        buttonType1 : {
            backgroundColor : mainColor,
            maxWidth: width - width/5 ,
            borderRadius : width/5,
            padding: 12,
            left: width/10,
            marginVertical: 10,
            borderColor: mainColor,
            borderWidth: 1
        },
        buttonType2 : {
            backgroundColor : whiteColor,
            maxWidth: width - width/5 ,
            borderRadius : width/5,
            padding: 12,
            left: width/10,
            marginVertical: 10,
            borderColor: mainColor,
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
                        whiteColor}
                    >
                    {props.children?props.children:'Button'}
                </TextView>
            </TouchableHighlight>
        </Fragment>
    )
}

export default Button