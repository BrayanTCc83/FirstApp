import React from 'react'

import { View, TouchableWithoutFeedback, StyleSheet } from 'react-native'

//Provider
import { useDesignContext } from "../provider/designProvider"

//Components
import Icon from "./icon"
import TextView from './textView'

//Definitions
import { ICONS_DEFINITIONS, TEXT_DEFINITIONS } from "../../global/definitions"

const ChatSelector = (props) => {
    const { width, height, mainColor } = useDesignContext()
    const currentTime = new Date().getHours()+6 +' : '+ new Date().getMinutes()
    const chatSelector = StyleSheet.create({
      container : {
        height : 90,
        paddingVertical : 10,
        display : 'flex',
        alignContent: 'space-around',
        justifyContent: 'space-evenly',
        flexDirection:'row',
        borderBottomColor : mainColor,
        borderBottomWidth : 1
      },
      chatViewInfo : {
        top: -5,
        height : 80,
        width : width - 100,
        overflow : 'hidden'
      },
      chatInfo : {
        height : 30,
        borderBottomColor : mainColor,
        borderBottomWidth : 3
      },
      chatContentPreview : {
        height : 60
      }
    })
    return (
        <View style={chatSelector.container} >
          {
            props.userIcon ? 
              <Icon 
                icon = { ICONS_DEFINITIONS.BELL_ICON } 
                onPress = { ()=>alert('mostrando imagen') } 
              />
            :
              <Icon 
                icon = { ICONS_DEFINITIONS.USER_ICON }
                onPress={ ()=>alert('mostrando imagen') } 
              />
          }
          <TouchableWithoutFeedback onPress={()=>alert('abriendo chat')}  >
            <View style={chatSelector.chatViewInfo}>
                <View style={chatSelector.chatInfo} >
                <TextView textSize={TEXT_DEFINITIONS.TEXT_SIZE_5} align='left' >
                    { props.contact ? props.contact : 'Contact' } 
                    { ' - ' }
                    { props.time ? props.time:currentTime }
                </TextView>
                </View>
                <View style={ chatSelector.chatContentPreview } >
                <TextView textSize={TEXT_DEFINITIONS.TEXT_SIZE_5} align='left' thin >
                    { props.preview ? props.preview : 'Content preview' }
                </TextView>
                </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
    )
}
export default ChatSelector