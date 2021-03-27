//React import
import React, { Fragment, useEffect, useState } from 'react'
import { swi } from 'react-native'

//React native import
import { TouchableHighlight, StyleSheet, View } from 'react-native'
import { TEXT_DEFINITIONS } from '../../global/definitions'

//Provider
import { useDesignContext } from "../provider/designProvider"

//Components import
import TextView from './textView'

//Component definition
const SwitchButton = (props) => {
    //Read data from context provider
    const { width, theme, strTheme, mainColor, secondaryColor } = useDesignContext()
    //State
    const [currentValue, setCurrentValue] = useState(false)
    //Modify value
    const toggleCurrentValue = () => {
        const newCurrentValue=!currentValue 
        setCurrentValue(newCurrentValue)
        props.onPress?props.onPress(newCurrentValue?props.value[1]:props.value[0]):()=>null
    }
    //Styles definition
    const globalSwitch = StyleSheet.create({
        global : {
            width : 100,
            height : 50,
            borderRadius : 50,
            borderColor : mainColor,
            borderWidth : 1,
            backgroundColor : strTheme==='light'?secondaryColor:theme
        },
        circle : {
            backgroundColor : mainColor,
            width: 40,
            height: 40,
            borderRadius:20
        }
    })
    const switchStyles = StyleSheet.create({
        container :{
            width: width - width/5,
            height : 50,
            marginHorizontal : width/10,
            marginVertical : 10
        },
        text: {
            width: width/2,
            top: -40,
            left : 105,
            textAlign:'left'
        },
        forVal1 : {
            ...globalSwitch.global,
        },
        val1 : {
            ...globalSwitch.circle,
            top : 4,
            left: 5
        },
        val2 : {
            ...globalSwitch.circle,
            top : 4,
            left: 55
        }
    })
    //Return component view
    return (
        <Fragment>
            <View style={switchStyles.container} >
                <TouchableHighlight onPress={toggleCurrentValue} style={switchStyles.forVal1} >
                    <View style={
                            currentValue?switchStyles.val2:switchStyles.val1
                        } 
                    />
                </TouchableHighlight>
                <TextView style={switchStyles.text}  textSize={TEXT_DEFINITIONS.TEXT_SIZE_5}>
                    {props.children?props.children+":":null}
                    {
                        props.labels?
                            currentValue?
                                props.labels[1]:
                                props.labels[0]
                        :
                            props.values?
                                currentValue?
                                    props.values[1]:
                                    props.values[0]
                            :
                                currentValue?
                                    "Default value 2":
                                    "Default value 1"

                    }
                </TextView>
            </View>
        </Fragment>
    )
}

//Export component view
export default SwitchButton