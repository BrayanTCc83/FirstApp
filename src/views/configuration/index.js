//React import
import React from 'react'

//React native imports
import { StyleSheet } from 'react-native'

//Context provider
import { useDesignContext } from "../../provider/designProvider"

//Component import
import SwitchButton from "../../components/switchButton"
import ViewContainer from '../../components/viewContainer'
import Icon from '../../components/icon'
import Dropdown from '../../components/dropdown'
import Button from '../../components/button'
import Header from '../../components/header'

//Definitions
import { STYLE_DEFINITIONS, ICONS_DEFINITIONS } from "../../../global/definitions"
import { useUserContext } from '../../provider/userProvider'

const Configuration = (props) =>{
    const { logout } = useUserContext()
    const { changeSchemaColor, changeTheme, width, strTheme, strSchema } = useDesignContext();
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
            <Header/>
            <Icon 
                icon = { ICONS_DEFINITIONS.USER_ICON }
                style = { configStyles.user } 
                styleInside = { configStyles.userInside } 
            />
            <Dropdown 
                icon= { ICONS_DEFINITIONS.PRIVACITY_ICON } 
                text='Privacidad' 
            >
            </Dropdown>
            <Dropdown 
                icon = { ICONS_DEFINITIONS.CONFIGURATION_ICON }
                text='Configuración' 
            >
                <SwitchButton 
                    status= { strSchema === STYLE_DEFINITIONS.RED_THEME }
                    onPress={changeSchemaColor} 
                    labels={["Verde (Aguacate)","Rojo (Jitomate)"]} 
                    value={[
                        STYLE_DEFINITIONS.GREEN_THEME,
                        STYLE_DEFINITIONS.RED_THEME
                    ]} 
                />
                <SwitchButton 
                    status= { strTheme === STYLE_DEFINITIONS.DARK_MODE }
                    onPress={changeTheme} 
                    labels={["Claro (Colores vivos)","Oscuro (Protege vista)"]} 
                    value={[
                        STYLE_DEFINITIONS.LIGHT_MODE,
                        STYLE_DEFINITIONS.DARK_MODE
                    ]} 
                />
            </Dropdown>
            <Dropdown 
                icon = { ICONS_DEFINITIONS.BELL_ICON } 
                text='Notificaciones' 
            >
            </Dropdown>
            <Button type={2} onPress={ logout } >Cerrar sesión</Button>
        </ViewContainer>
    )
};
export default Configuration