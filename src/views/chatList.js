//React import
import React, { useEffect, useState } from 'react'

//React native import
import { View, StyleSheet } from 'react-native'

//Provider
import { useDesignContext } from "../provider/designProvider"

//Components
import ViewContainer from "../components/viewContainer"
import Header from "../components/header"
import Input from "../components/input"
import ChatSelector from '../components/chatSelector'

//Definitions
import { ICONS_DEFINITIONS, SCREEN_VIEWS } from '../../global/definitions'
import { useHandlerData } from '../hooks/handlers'
import Database from "../../database"
import { useUserContext } from '../provider/userProvider'

const ChatsSelectorView = (props) => {
    //Read data from provider
    const { width, height } = useDesignContext()
    const { userData } = useUserContext()
    const userReference = Database( 'users' )
    const chatReference = Database( 'chats' )
    const [ isUpdate, setUpdate ] = useState( false )
    const [ chatsList, setChatList ] = useState( [] )
    //Styles definition
    const chatsSelectorViewStyles = StyleSheet.create({
      searchInput : {
        textAlign: 'right',
        maxWidth : width - 140,
        flex : 1
      },
      chatsContainer : {
        height: height - 76
      }
    })

    const loadData = () => {
      console.log( userData.key )
      var prevChatList = new Array()
      userReference.getValues( "", ( prop, val, index ) => {
        if( prop[0] !== userData.key ){
          var preview = null
          var time = null
          prevChatList.push( {
            key : `${prop[0]}&&${userData.key}`,
            contact : val.name,
            profilePhoto : val.profilePhoto,
            preview : preview,
            time : time
          } )
          chatReference.getValues( `${prop[0]}&&${userData.key}`, ( prop, val ) => {
            if( prop[0] === "lastMessage" ){
              prevChatList[index].preview = val.text
              prevChatList[index].time = val.time
            }
          } )
        }
      } )
      setTimeout( () => {
        setChatList( prevChatList )
        setUpdate( true )
      }, 1000 )
    }

    useEffect( () => loadData(), [] )

    return (
        <ViewContainer>
          <Header>
            <Input style={chatsSelectorViewStyles.searchInput} >Buscar</Input>
          </Header>
          <ViewContainer scroll style={chatsSelectorViewStyles.chatsContainer} >
            {
              isUpdate === true ? 
                chatsList.map( ( item ) => 
                  <ChatSelector 
                    contact = { item.contact } 
                    time = { item.time } 
                    preview = { item.preview } 
                    profilePhoto = { item.profilePhoto } 
                    accessKey = { item.key }
                    navigation = {props.navigation }
                  />
                )
              :null
            }
          </ViewContainer>
        </ViewContainer>
    )
};
export default ChatsSelectorView