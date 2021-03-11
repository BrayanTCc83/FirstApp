//React import
import React from 'react'

//React native imports
import { View, Text, StyleSheet } from 'react-native'

//Global View
import ViewContainer from "../components/viewContainer"

//Components import
import TextView from '../components/text'
import Button from "../components/button"

//Provider
import { useAplicationContext } from "../provider"
import Icon from '../components/icon'

const Landing = () =>{
  const style = useAplicationContext().appTheme.style
  const width = useAplicationContext().width
  const height = useAplicationContext().height
  const fontColor = useAplicationContext().fontColor
  const loadPageStyle = StyleSheet.create({
    textContainer:{
      top: width/3
    }
  })
  return (
      <ViewContainer>
        <Icon />
        <View style={loadPageStyle.textContainer} >
          <TextView type={2} margin={50} vmargin={10} >
            Comunicate con tus amigos y ublica cosas importantes para ti
          </TextView>
          <Button  >Iniciar sesión</Button>
          <Button type={2} >Crear cuenta</Button>
        </View>
      </ViewContainer>
  )
};
export default Landing