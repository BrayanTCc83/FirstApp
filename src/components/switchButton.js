//React import
import React, { Fragment } from 'react'
import { useState } from 'react'

//React native import
import { TouchableHighlight, StyleSheet, View } from 'react-native'

//Provider
import { useAplicationContext } from "../provider"

//Components import
import TextView from './text'

//Component definition
const SwitchButton = (props) => {
    //State
    const [currentValue, setCurrentValue] = useState(props.val1)
    //Read data from context provider
    const style = useAplicationContext().appTheme.style
    const width = useAplicationContext().width
    //Modify value
    const modifyCurrentValue=()=>{
        setCurrentValue(currentValue === props.val1 ? props.val2 : props.val1)
    }
    //Styles definition
    const globalSwitch = StyleSheet.create({
        global : {
            width : 100,
            height : 50,
            borderRadius : 50,
            borderColor : style.main,
            borderWidth : 1
        },
        circle : {
            backgroundColor : style.main,
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
            backgroundColor : style.secondary
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
                <TouchableHighlight onPress={modifyCurrentValue} style={switchStyles.forVal1} >
                    <View style={
                            currentValue===props.val1?switchStyles.val1:switchStyles.val2
                        } 
                    />
                </TouchableHighlight>
                <TextView style={switchStyles.text}  type={4}>{props.children} : {currentValue}</TextView>
            </View>
        </Fragment>
    )
}

//Export component view
export default SwitchButton