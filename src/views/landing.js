//React import
import React from 'react'

//React native imports
import { View, StyleSheet } from 'react-native'

//Global View
import ViewContainer from "../components/viewContainer"

//Components import
import TextView from '../components/textView'
import Button from "../components/button"
import Icon from '../components/icon'

//Provider
import { useDesignContext } from "../provider/designProvider"
import { TEXT_DEFINITIONS } from '../../global/definitions'

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
          <TextView textSize={TEXT_DEFINITIONS.TEXT_SIZE_4} margin={50} vmargin={10} >
            Comunicate con tus amigos y publica cosas importantes para ti
          </TextView>
        <Button  >Iniciar sesión</Button>
        <Button type={2} >Crear cuenta</Button>
        </View>
      </ViewContainer>
  )
};
export default Landing