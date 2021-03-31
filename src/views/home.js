import React from 'react'
import ViewContent from "../components/viewContainer"
import Icon from "../components/icon"
import TextView from "../components/textView"
import { StyleSheet, View } from 'react-native'
import { ICONS_DEFINITIONS, SCREEN_VIEWS } from "../../global/definitions"
import Post from '../components/post'

import { useDesignContext } from '../provider/designProvider'

const Home = (props) =>{
  const { width, height, mainColor } = useDesignContext()
  console.log(props);
  const EstiloE = StyleSheet.create({
    header : {
      display:'flex',
      flexDirection:'row',
      height:80,
      width:width,
      justifyContent:'center',
      borderBottomColor : mainColor,
      borderBottomWidth: 2,
      zIndex : 1
    },
    headerIcons : {
      top: 5,
      marginHorizontal : 70
    },
    headerText : {
      padding : 22,
      textAlign:'left'
    },
    btnPost:{
      position:"absolute",
      left : width - 85,
      top: height - 115,
      zIndex : 1
    },
    postContainer:{
      height : height - 105,
      display : 'flex'
    }
  })
  return (
  <ViewContent>
    <View style = {EstiloE.header} >
        <Icon 
          style={EstiloE.headerIcons} icon={ICONS_DEFINITIONS.CONFIGURATION_ICON} 
          onPress = {
            () => props.navigation.navigate(SCREEN_VIEWS.CONFIGURATION_VIEW, { name: 'Jane' })
          }
          void
        />
        <TextView textSize={3} style={EstiloE.headerText} >Hola</TextView>
        <Icon 
          style={EstiloE.headerIcons} icon={ICONS_DEFINITIONS.CHAT_MESSAGE_ICON} 
          onPress = {
            () => props.navigation.navigate(SCREEN_VIEWS.CHAT_LIST_VIEW, { name: 'Jane' })
          }
          void
        />
    </View>
    <ViewContent scroll style = {EstiloE.postContainer}>
      <Post/>
      <Post/>
    </ViewContent>
    <Icon 
      icon={ICONS_DEFINITIONS.NEW_POST_ICON}
      style={ EstiloE.btnPost }
      onPress={
        () => alert('Hola')
      }
    />
  </ViewContent>
  )
};
export default Home