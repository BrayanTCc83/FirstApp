import React from 'react'
import ViewContent from "../components/viewContainer"
import Icon from "../components/icon"
import TextView from "../components/textView"
import { StyleSheet, View } from 'react-native'
import { ICONS_DEFINITIONS } from "../../global/definitions"
import { useDesignContext } from '../provider/designProvider'
const Home = () =>{
  const { width } = useDesignContext()
  const EstiloE = StyleSheet.create({
    header : {
      display:'flex',
      flexDirection:'row',
      height:80,
      width:width,
      backgroundColor:'red'
    },
    headerIcons : {
      top: 5,
      left: 5
    },
    headerText : {
      flex:1,
      padding : 24,
      textAlign:'left'
    },
    btnPost:{
        position:"absolute"
    },
    post:{
        position:"relative"
    }
  })

    return (
    <ViewContent>
      <View style = {EstiloE.header} >
          <Icon style={EstiloE.headerIcons} icon={ICONS_DEFINITIONS.CONFIGURATION_ICON} onPress = {()=>alert('Estamos trabajando')}></Icon>
          <TextView type={3} style={EstiloE.headertext} >D!Gato</TextView>
          <Icon style={EstiloE.headerIcons} icon={ICONS_DEFINITIONS.CHAT_MESSAGE_ICON} ></Icon>
      </View>
      <ViewContent scroll style = {EstiloE.post}>
          <Icon icon={ICONS_DEFINITIONS.USER_ICON} ></Icon>
          <TextView></TextView>
          <TextView></TextView>
          <ViewContent></ViewContent>
      </ViewContent>
      <Icon icon={ICONS_DEFINITIONS.NEW_POST_ICON} ></Icon>
    </ViewContent>
    )
};
export default Home