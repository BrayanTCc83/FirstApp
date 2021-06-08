import React from 'react'

import { View, TouchableWithoutFeedback, StyleSheet, Image } from 'react-native'

//Provider
import { useDesignContext } from "../provider/designProvider"

//Components
import Icon from "./icon"
import TextView from './textView'

//Definitions
import { ICONS_DEFINITIONS, TEXT_DEFINITIONS, SCREEN_VIEWS } from "../../global/definitions"

const ChatSelector = (props) => {
    const { width, mainColor } = useDesignContext()
    const currentTime = props.time !== null ? props.time : "----"
    const chatSelector = StyleSheet.create({
      profilePhoto : {
          borderRadius : 30,
          margin : 5,
          width : 60,
          height : 60,
          borderColor : mainColor,
          borderWidth: 2,
      },
      container : {
        height : 80,
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
        height : 70,
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
            props.profilePhoto !== null && props.profilePhoto !== undefined ? 
              <Image
                style = { chatSelector.profilePhoto }
                source={ { uri : props.profilePhoto } }
              />
            :
              <Icon 
                icon = { ICONS_DEFINITIONS.USER_ICON }
              />
          }
          <TouchableWithoutFeedback 
              onPress = {
                () => props.navigation.navigate(SCREEN_VIEWS.CHAT_VIEW, { 
                  name: props.contact ? props.contact : 'Jane' ,
                  profilePhoto : props.profilePhoto ? props.profilePhoto : null,
                  key : props.accessKey
                })
              }
          >
            <View style={chatSelector.chatViewInfo}>
                <View style={chatSelector.chatInfo} >
                <TextView textSize={TEXT_DEFINITIONS.TEXT_SIZE_3} align='left' >
                    { props.contact ? props.contact : 'Contact' } 
                    { ' - ' }
                    { currentTime }
                </TextView>
                </View>
                <View style={ chatSelector.chatContentPreview } >
                <TextView textSize={TEXT_DEFINITIONS.TEXT_SIZE_4} align='left' thin >
                    { props.preview !== null ? props.preview : 'Ningún mensaje existente' }
                </TextView>
                </View>
            </View>
          </TouchableWithoutFeedback>
        </View>
    )
}
export default ChatSelector