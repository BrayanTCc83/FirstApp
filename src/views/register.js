//React import
import React from 'react'

//Components import
import ViewContainer from "../components/viewContainer"
import TextView from '../components/text'
import Input from '../components/input'
import Button from '../components/button'
import SwitchButton from '../components/switchButton'

const Register = () =>{
    return (
        <ViewContainer scroll >
          <TextView>Registro</TextView>
          <Input>Ingresa tu nick</Input>
          <Input>Año de nacimiento</Input>
          <Input>Correo</Input>
          <Input>Contraseña</Input>
          <Input>Repetir contraseña</Input>
          <SwitchButton val1='Mujer' val2='Hombre' >Sexo</SwitchButton>
          <Button>Crear cuenta</Button>
        </ViewContainer>
    )
};
export default Register