//React import
import React from 'react'

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

const ChatsSelectorView = (props) => {
    //Read data from provider
    const { width, height, mainColor } = useDesignContext()
    console.log(props);
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
    return (
        <ViewContainer>
          <Header>
            <Input style={chatsSelectorViewStyles.searchInput} >Buscar</Input>
          </Header>
          <ViewContainer scroll style={chatsSelectorViewStyles.chatsContainer} >
            <ChatSelector {...props} />
            <ChatSelector {...props} />
            <ChatSelector {...props} />
            <ChatSelector {...props} />
          </ViewContainer>
        </ViewContainer>
    )
};
export default ChatsSelectorView