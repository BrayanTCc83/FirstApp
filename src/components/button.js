//React import
import React, { Fragment } from 'react'

//React native imports
import { TouchableHighlight, StyleSheet } from 'react-native'
import { TEXT_DEFINITIONS } from '../../global/definitions'

//Provider
import { useDesignContext } from "../provider/designProvider"

//Components import
import TextView from './textView'

const Button = (props) => {
    const { mainColor, whiteColor, width } = useDesignContext()
    const buttonDefinition = StyleSheet.create({
        button : {
            maxWidth: width - width/5 ,
            borderRadius : width/5,
            padding: 12,
            left: width/10,
            marginVertical: 10,
            borderColor: mainColor,
            borderWidth: 1
        }
    })
    const buttonStyle = StyleSheet.create({
        buttonType1 : {
            backgroundColor : mainColor,
            ...buttonDefinition.button
        },
        buttonType2 : {
            backgroundColor : 'transparent',
            ...buttonDefinition.button
        }
    })
    return (
        <Fragment>
            <TouchableHighlight onPress={props.onPress?props.onPress:null} style={
                    props.type===2?
                        buttonStyle.buttonType2:
                    buttonStyle.buttonType1
                } >
                <TextView textSize={TEXT_DEFINITIONS.TEXT_SIZE_3} color={
                    props.type===2?
                        mainColor:
                        whiteColor}
                    >
                    {props.children?props.children:'Button'}
                </TextView>
            </TouchableHighlight>
        </Fragment>
    )
}

export default Button