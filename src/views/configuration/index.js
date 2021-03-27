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

//Definitions
import { STYLE_DEFINITIONS, ICONS_DEFINITIONS, SCREEN_VIEWS } from "../../../global/definitions"

const Configuration = (props) =>{
    const { changeSchemaColor, changeTheme, width } = useDesignContext();
    console.log(props);
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
            <Icon 
                icon= { ICONS_DEFINITIONS.GO_BACK_ICON } 
                onPress = {
                    () => props.navigation.navigate(SCREEN_VIEWS.HOME_VIEW, { name: 'Jane' })
                }
                void
            />
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
                    onPress={changeSchemaColor} 
                    labels={["Verde (Aguacate)","Rojo (Jitomate)"]} 
                    value={[
                        STYLE_DEFINITIONS.GREEN_THEME,
                        STYLE_DEFINITIONS.RED_THEME
                    ]} 
                />
                <SwitchButton 
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
            <Button type={2} >Cerrar sesión</Button>
        </ViewContainer>
    )
};
export default Configuration