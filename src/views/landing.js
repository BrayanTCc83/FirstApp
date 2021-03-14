//React import
import React from 'react'

//React native imports
import { View, Text, StyleSheet } from 'react-native'

//Global View
import ViewContainer from "../components/viewContainer"

//Components import
import TextView from '../components/text'
import Button from "../components/button"
import Icon from '../components/icon'

//Provider
import { useDesignContext } from "../provider/designProvider"

const Landing = () =>{
  const { height } = useDesignContext()
  const loadPageStyle = StyleSheet.create({
    textContainer:{
      top: height/5,
      height : height/1.5
    }
  })
  return (
      <ViewContainer >
        <Icon />
        <View style={loadPageStyle.textContainer} >
          <TextView type={2} margin={50} vmargin={10} >
            Comunicate con tus amigos y publica cosas importantes para ti
          </TextView>
        <Button  >Iniciar sesión</Button>
        <Button type={2} >Crear cuenta</Button>
        </View>
      </ViewContainer>
  )
};
export default Landing