//React import
import React from 'react'

//React native imports
import { View, StyleSheet } from 'react-native'

//Provider
import { useDesignContext } from "../provider/designProvider"

//Components import
import ViewContainer from "../components/viewContainer"
import TextView from '../components/text'
import Input from '../components/input'
import Button from '../components/button'
import Icon from '../components/icon'
const Login = () =>{
  const { height } = useDesignContext()
  const loginStyles = StyleSheet.create({
    container : {
      height: height/1.5,
      top: height/15
    }, 
    icon : {
      top: height/12
    }
  })
  return (
    <ViewContainer >
      <Icon style={loginStyles.icon} />
      <View style={loginStyles.container} >
        <TextView>Inicio de sesión</TextView>
        <Input>Ingresa tu nick</Input>
        <Input>Contraseña</Input>
        <Button>Ingresar</Button>
      </View>
    </ViewContainer>
  )
};
export default Login