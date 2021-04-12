//React import
import React, { useState } from 'react'

//React native imports
import { View, StyleSheet } from 'react-native'

//Provider
import { useDesignContext } from "../provider/designProvider"
import { useUserContext } from "../provider/userProvider"

//Components import
import ViewContainer from "../components/viewContainer"
import TextView from '../components/textView'
import Input from '../components/input'
import Button from '../components/button'
import Icon from '../components/icon'

import Database from "../../database"
import { useHandlerData } from "../hooks/handlers"
import { SecurityHandler } from '../../functions'
import { SCREEN_VIEWS } from '../../global/definitions'
import { useNavigation } from '@react-navigation/native'
const Login = (props) =>{
  const { height } = useDesignContext()
  const { login } = useUserContext()
  const [ data, setData ] = useHandlerData()

  const navigation =useNavigation()
  const UserRef = Database('users')

  const keys = UserRef.getKeys()

  const tryLogin = () => {
    UserRef.findCoincidence( keys[7], data[keys[7]], (accessKey) => {
      UserRef.getOneValue( accessKey, keys[8], (hash)=>{
        UserRef.getOneValue( accessKey, keys[9], (password)=>{
          if( password === SecurityHandler.encryptPassword(data[keys[9]],hash) ){
            data[keys[0]] = accessKey
            data[keys[8]] = hash
            delete data[keys[9]]
            login( data )
          }else{
            alert("The password is wrong")
          }
        } )
      } )
    } )
  }

  const loginProcess = () => {
    tryLogin()
    navigation.navigate( SCREEN_VIEWS.HOME_VIEW )
  }

  const loginStyles = StyleSheet.create({
    container : {
      height: height/1.5,
      top: height/80
    }, 
    icon : {
      top: height/20
    }
  })
  return (
    <ViewContainer scroll >
      <Icon style={loginStyles.icon} />
      <View style={loginStyles.container} > 
        <TextView>Inicio de sesión</TextView>
        <Input name={keys[7]} onChange = { setData } >Ingresa tu email</Input>
        <Input name={keys[9]} onChange = { setData } password >Contraseña</Input>
        <Button type={2} onPress = { 
          ()=>navigation.navigate( SCREEN_VIEWS.REGISTER_VIEW ) 
        } >No tengo una cuenta</Button>
        <Button onPress = { loginProcess } >Ingresar</Button>
      </View>
    </ViewContainer>
  )
};
export default Login