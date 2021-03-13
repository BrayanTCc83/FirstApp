//React import
import React from 'react'

//React native imports
import { StyleSheet } from 'react-native'

//Context provider
import { useAplicationContext } from "../provider"

//Component import
import SwitchButton from "../components/switchButton"
import ViewContainer from '../components/viewContainer'
import Icon from '../components/icon'
import Dropdown from '../components/dropdown'
import Button from '../components/button'

const Configuration = () =>{
    const { changeSchemaColor, changeTheme, width } = useAplicationContext()
    //Styles definition
    const configStyles = StyleSheet.create({
        user : {
            width: width/3,
            height: width/3,
            borderRadius: width/3,
            marginBottom : 40,
            marginHorizontal : width/3.05
        },
        userInside : {
            width: width/3,
            height: width/3,
            borderRadius: width/3
        }
    })
    return (
        <ViewContainer scroll >
            <Icon icon='goback' void onPress={()=>alert("Hola")} />
            <Icon icon='user' style={configStyles.user} styleInside={configStyles.userInside} />
            <Dropdown icon='lock' text='Privacidad' >
            </Dropdown>
            <Dropdown icon='tools' text='Configuración' >
                <SwitchButton 
                    onPress={changeSchemaColor} 
                    labels={["Verde (Aguacate)","Rojo (Jitomate)"]} 
                    value={["green","red"]} 
                />
                <SwitchButton 
                    onPress={changeTheme} 
                    labels={["Claro (Colores vivos)","Oscuro (Protege vista)"]} 
                    value={["light","dark"]} 
                />
            </Dropdown>
            <Dropdown icon='bell' text='Notificaciones' >
            </Dropdown>
            <Button type={2} >Cerrar sesión</Button>
        </ViewContainer>
    )
};
export default Configuration