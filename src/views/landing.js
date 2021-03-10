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

const Landing = () =>{
  const style = useAplicationContext().appTheme.style
  const width = useAplicationContext().width
  const height = useAplicationContext().height
  const fontColor = useAplicationContext().fontColor
  const loadPageStyle = StyleSheet.create({
    iconOutside : {
      top : height/6,
      left : width/4,
      backgroundColor : style.main,
      width : width/2,
      height : width/2,
      borderRadius : width/4
    },
    iconInside : {
      backgroundColor : style.secondary,
      width : width/2.5,
      height : width/2.5,
      borderRadius : width/4,
      top: width/20,
      left: width/20
    },
    textContainer:{
      top: width/3
    }
  })
  return (
      <ViewContainer>
        <View style={loadPageStyle.iconOutside} >
          <View style={loadPageStyle.iconInside} ></View>
        </View>
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