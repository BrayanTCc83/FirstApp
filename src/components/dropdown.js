//React import 
import React from 'react'
import { useState } from 'react'

//React native import 
import { StyleSheet, TouchableWithoutFeedback, ScrollView, View } from 'react-native'

import { useAplicationContext } from "../provider/index"

import TextView from '../components/text'
import Icon from '../components/icon'

const Dropdown = (props) =>{
    const {secondaryColor, theme, strTheme, mainColor, width } = useAplicationContext()
    const [ expanded, setExpanded ] = useState(false)
    //Style definition
    const dropdownStyle = StyleSheet.create({
        container : {   
            width : width,
            minHeight : 84,
            borderBottomWidth:1,
            borderTopWidth:1,
            borderColor: mainColor,
            display : 'flex',
            flexDirection:'column'
        },
        icon : {
            top: 8,
            left : 10
        },
        head : {
            display : 'flex',
            flexDirection:'row',
            height: 85,
            borderBottomColor: mainColor,
            borderBottomWidth: 1
        },
        dropdown: {
            transform: [{
                rotate: expanded? '0deg' : '180deg'
            }]
        },
        headText : {
            flex:1,
            padding : 24,
            textAlign:'left'
        },
        contentHidden:{
            height:0
        },
        content : {
            minHeight: 0,
            padding: props.children?10:0,
            overflow:'hidden'
        }
    })
    return (
        <View style={dropdownStyle.container} >
            <TouchableWithoutFeedback onPress={()=>setExpanded(!expanded)}  >
                <View style={dropdownStyle.head}>
                    <Icon icon={props.icon} style={dropdownStyle.icon} />
                    <TextView type={4} style={dropdownStyle.headText} >
                        {props.text}
                    </TextView>
                    <Icon icon='dropdown' style={dropdownStyle.dropdown} void/>
                </View>
            </TouchableWithoutFeedback>
            <ScrollView style={ expanded? dropdownStyle.content :dropdownStyle.contentHidden } >
                {props.children}
            </ScrollView>
        </View>
    )
}
export default Dropdown