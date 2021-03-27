import React from 'react'
import { View, StyleSheet } from 'react-native'
import { ICONS_DEFINITIONS, TEXT_DEFINITIONS, SCREEN_VIEWS } from '../../global/definitions';
import Icon from '../components/icon';
import Input from '../components/input';
import Message from '../components/message';
import TextView from '../components/textView';
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
      height : height - 176
    },
    writeMessage:{
      height: 70,
      borderTopColor : mainColor,
      borderTopWidth : 2,
      display : 'flex',
      flexDirection : 'row'
    },
    iconFeather : {
      top : -5
    },
    input : {
      marginRight : 50,
      flex : 0.95
    }
  })
  return (
      <ViewContainer scroll>
        <View style={ChatStyles.header} >
          <Icon 
            icon={ICONS_DEFINITIONS.GO_BACK_ICON} 
            void 
            style={ChatStyles.icon} 
            onPress = {
              () => props.navigation.navigate(SCREEN_VIEWS.CHAT_LIST_VIEW, { name: 'Jane' })
            }
          />
          <TextView 
            style={ChatStyles.text} 
            textSize={TEXT_DEFINITIONS.TEXT_SIZE_5} 
          >
            {props.user?props.user:"Chat N"}
          </TextView>
          <Icon 
            icon={ICONS_DEFINITIONS.USER_ICON} 
            style={ChatStyles.icon}
            onPress = {
              () => props.navigation.navigate(SCREEN_VIEWS.USER_PROFILE_VIEW, { name: 'Jane' })
            }
          />
        </View>
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