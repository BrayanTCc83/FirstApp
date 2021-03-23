//React import
import React from 'react'

//Components import
import ViewContainer from "../components/viewContainer"
import TextView from '../components/textView'
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
          <SwitchButton values={["f","m"]} labels={["Mujer","Hombre"]} >Sexo</SwitchButton>
          <Button>Crear cuenta</Button>
        </ViewContainer>
    )
};
export default Register