import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { ICONS_DEFINITIONS, TEXT_DEFINITIONS, SCREEN_VIEWS } from '../../global/definitions';
import Icon from '../components/icon';
import Input from '../components/input';
import Message from '../components/message';
import Header from '../components/header'
import ViewContainer from '../components/viewContainer';
import { useDesignContext } from '../provider/designProvider';
import { useUserContext } from '../provider/userProvider';
import Database from '../../database'
import TextView from '../components/textView';
import { useHandlerData } from '../hooks/handlers';
const Chat = (props) =>{
  const { height, mainColor, secondaryColor } = useDesignContext()
  const { userData } = useUserContext()
  const [ messageList, setMessagesList ] = useState( [] )
  const [ isUpdate, setUpdate ] = useState( 0 )
  const [ myMessageData, setMyMessageData, clear ] = useHandlerData()
  const chatRef = Database( 'chats' )

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
  const loadChatMessages = () => {
    let prevChatList = new Array()
    chatRef.awaitForValues( props.route.params.key ? props.route.params.key+'/messages' : '', ( prop, val, i ) => {
      setUpdate( 0 )
      if( i === 0 ){
        prevChatList = new Array()
      }
      prevChatList.push( { [prop[0]] : val } )
      setMessagesList( prevChatList )
      setUpdate( i )
    } )
  }
  const sendMessage = () => {
    let date = new Date()
    let childKey = `${date.getDate()}-${date.getMonth()+1}-${date.getFullYear()}`
    setMyMessageData( `${date.getHours()}:${date.getMinutes()}`, "time" )
    setMyMessageData( userData.key,"userRef" )
    if( myMessageData.text !== null && myMessageData.text !== "" ){
      chatRef.pushOnArray( props.route.params.key+"/messages/"+childKey, myMessageData, () => {
        chatRef.setValue( props.route.params.key+"/lastMessage", myMessageData, () => {
          clear()
        } )
      } )
    }
  }
  useEffect( () => loadChatMessages(), [] )
  return (
      <ViewContainer scroll>
        <Header
          profilePhoto = { props.route.params.profilePhoto ? props.route.params.profilePhoto : null }
          textOptions = {
            {
              centering: true
            }
          }
          text={props.route.params.name?props.route.params.name:"Chat N"}
          icons = {
            [
              {
                src : ICONS_DEFINITIONS.USER_ICON
              }
            ]
          }
        />
        <ViewContainer style={ChatStyles.chatViewer} scroll >
          {
            isUpdate != 0 ? 
              messageList.map( (val, index) =>{
                let objKeys = Object.keys( val )
                console.log( objKeys )
                return <View>
                  <View>
                    <TextView>{objKeys[0]}</TextView>
                  </View>
                  {
                      val[ objKeys[0] ].map( ( message ) => {
                        return <Message mine = { message.userRef === userData.key } time={ message.time } >{message.text}</Message>
                      } )
                  }
                </View>
              })
            :null
          }
        </ViewContainer>
        <View style={ChatStyles.writeMessage} >
          <Input 
            style={ChatStyles.input} 
            name = 'text'
            onChange = { setMyMessageData }
          >
            Escribe un mensaje
          </Input>
          <Icon 
            style={ChatStyles.iconFeather} 
            icon={ICONS_DEFINITIONS.SEND_MESSAGE_ICON} void 
            onPress = { sendMessage }
          />
        </View>
      </ViewContainer>
  )
};
export default Chat