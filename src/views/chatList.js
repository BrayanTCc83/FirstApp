//React import
import React from 'react'

//React native import
import { View, StyleSheet } from 'react-native'

//Provider
import { useDesignContext } from "../provider/designProvider"

//Components
import ViewContainer from "../components/viewContainer"
import Icon from "../components/icon"
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
      header : {
        display :'flex',
        flexDirection : 'row',
        borderBottomColor : mainColor,
        borderBottomWidth : 1,
        height : 75
      },
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
          <View style={chatsSelectorViewStyles.header} >
            <Icon 
              icon = { ICONS_DEFINITIONS.GO_BACK_ICON }
              onPress = {
                () => props.navigation.navigate(SCREEN_VIEWS.HOME_VIEW, { name: 'Jane' })
              }
              void  
            />
            <Input style={chatsSelectorViewStyles.searchInput} >Buscar</Input>
          </View>
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