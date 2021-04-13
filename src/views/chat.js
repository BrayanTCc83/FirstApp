import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ICONS_DEFINITIONS, TEXT_DEFINITIONS, SCREEN_VIEWS } from '../../global/definitions';
import Icon from '../components/icon';
import Input from '../components/input';
import Message from '../components/message';
import Header from '../components/header'
import ViewContainer from '../components/viewContainer';
import { useDesignContext } from '../provider/designProvider';
const Chat = (props) =>{
  const { height, mainColor, secondaryColor } = useDesignContext()
  console.log(props);
  const ChatStyles = StyleSheet.create({
    header : {
      height : 80,
      borderBottomColor: mainColor,
      borderBottomWidth:2,
      display:'flex',
      flexDirection:'row'
    },
    text : {
      top: 25,
      flex : 0.95
    },
    icon : {
      top : 5
    },
    chatViewer : {
      height : height - 165
    },
    writeMessage:{
      height: 70,
      borderTopColor : mainColor,
      borderTopWidth : 2,
      display : 'flex',
      flexDirection : 'row'
    },
    iconFeather : {
      top : 5
    },
    input : {
      marginRight : 50,
      flex : 0.95
    }
  })
  return (
      <ViewContainer scroll>
        <Header
          textOptions = {
            {
              centering: true
            }
          }
          text={props.user?props.user:"Chat N"}
          icons = {
            [
              {
                src : ICONS_DEFINITIONS.USER_ICON,
                action : ()=> props.navigation.navigate(SCREEN_VIEWS.USER_PROFILE_VIEW)
              }
            ]
          }
        />
        <ViewContainer style={ChatStyles.chatViewer} scroll >
          <Message>Hola, como estás?</Message>
          <Message mine >Bien y tú?</Message>
        </ViewContainer>
        <View style={ChatStyles.writeMessage} >
          <Input style={ChatStyles.input} >Escribe un mensaje</Input>
          <Icon style={ChatStyles.iconFeather} icon={ICONS_DEFINITIONS.SEND_MESSAGE_ICON} void />
        </View>
      </ViewContainer>
  )
};
export default Chat