//React import
import React, { useState } from 'react'

//Components import
import ViewContainer from "../components/viewContainer"
import TextView from '../components/textView'
import Input from '../components/input'
import Button from '../components/button'
import SwitchButton from '../components/switchButton'
import { useUserContext } from '../provider/userProvider'
import Database from "../../database"
import { useHandlerData, useHandlerPassword } from '../hooks/handlers'
import { ObjectEvaluate } from "../../functions"
import { useNavigation } from '@react-navigation/core'
import { SCREEN_VIEWS } from '../../global/definitions'

const Register = (props) =>{
  const { register } = useUserContext()

  const navigation = useNavigation()

  const keys = Database('users').getKeys()

  const [ data, setData ] = useHandlerData()
  const setPassword = useHandlerPassword( setData, keys[8])
  
  const registerUser = () => {
    if( ObjectEvaluate( data, (value) => value !== '' ) ){
      register( data )
    }else{
      alert("You need to complete the form before continue")   
    }
  }

  return (
      <ViewContainer scroll >
        <TextView>Registro</TextView>
        <Input name={keys[1]} onChange = { setData } >Ingresa tu nick</Input>
        <Input name={keys[3]} onChange = { setData } >Año de nacimiento</Input> 
        <Input name={keys[7]} onChange = { setData } >Correo</Input>
        <Input name={keys[9]} password onChange = { setPassword } >Contraseña</Input>
        <Input name={'retry'} password onChange = { setPassword } >Repetir contraseña</Input>
        <SwitchButton name={keys[4]} onPress = { setData } value={["f","m"]} labels={["Mujer","Hombre"]} >Sexo</SwitchButton>
        <Button type={2} onPress = {
          ()=> navigation.navigate( SCREEN_VIEWS.LOGIN_VIEW )
        } >Ya tengo cuenta</Button>
        <Button onPress = { registerUser } >Crear cuenta</Button>
      </ViewContainer>
  )
};
export default Register