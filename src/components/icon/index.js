//Import React
import React, { Fragment } from 'react'

//Import react native
import { View, TouchableOpacity, StyleSheet } from 'react-native'

//Provider
import { useDesignContext } from "../../provider/designProvider"

//SVG icons
import BellIcon from "../../../assets/icons/bell-regular.svg"
import GoBackIcon from "../../../assets/icons/angle-left-solid.svg"
import MessageIcon from "../../../assets/icons/envelope-regular.svg"
import DropDownIcon from "../../../assets/icons/caret-up-solid.svg"
import FeatherIcon from "../../../assets/icons/feather-alt-solid.svg"
import ImageIcon from "../../../assets/icons/image-regular.svg"
import UserCircleIcon from "../../../assets/icons/user-circle-solid.svg"
import UserLockIcon from "../../../assets/icons/user-lock-solid.svg"
import ToolsIcon from "../../../assets/icons/wrench-solid.svg"
import ConfigIcon from "../../../assets/icons/cog-solid.svg"
import MessageSendICon from "../../../assets/icons/paper-plane-solid.svg"

//Definitions
import { ICONS_DEFINITIONS } from "../../../global/definitions"

//Component definition
const Icon = (props) => {
    //Read data from provider
    const { mainColor, secondaryColor, width, height } = useDesignContext()
    //Styles
    const iconStyles = StyleSheet.create({
        middleOutside : {
            width : 70,
            height : 70,
            backgroundColor:secondaryColor,
            borderRadius : 35,
            borderColor: mainColor,
            borderWidth : 1,
            ...props.style
        },
        middle : {
            width : 50,
            height : 50,
            color:mainColor,
            top: 8,
            left: 8
        },
        send : {
            width : 40,
            height : 40,
            color:mainColor,
            top: 15,
            left: 20
        },
        full : {
            width : 70,
            height : 70,
            color:mainColor,
            top: -1,
            left: -1,
            ...props.styleInside
        },
        iconOutside : {
          top : height/6,
          left : width/4,
          backgroundColor : mainColor,
          width : width/2,
          height : width/2,
          borderRadius : width/4,
          ...props.style    
        },
        void : {
            width : 70,
            height : 70,
            backgroundColor : 'transparent',
            ...props.style
        },
        iconInside : {
          backgroundColor : secondaryColor,
          width : width/2.5,
          height : width/2.5,
          borderRadius : width/4,
          top: width/20,
          left: width/20
        },
    })
    const ChooseIcon = () =>{
        let CHOOSED_ICON = <View style={ iconStyles.iconInside } /> ;
        switch(props.icon){ 
            case ICONS_DEFINITIONS.BELL_ICON :
                CHOOSED_ICON = <BellIcon style={ iconStyles.middle } /> 
                break;
            case ICONS_DEFINITIONS.GO_BACK_ICON :
                CHOOSED_ICON = <GoBackIcon style={ iconStyles.middle } />
                break; 
            case ICONS_DEFINITIONS.CHAT_MESSAGE_ICON :
                CHOOSED_ICON = <MessageIcon style={ iconStyles.middle } />
                break; 
            case ICONS_DEFINITIONS.NEW_POST_ICON :
                CHOOSED_ICON = <FeatherIcon style={ iconStyles.middle } />
                break; 
            case ICONS_DEFINITIONS.IMAGE_ICON :
                CHOOSED_ICON = <ImageIcon style={ iconStyles.middle } />
                break; 
            case ICONS_DEFINITIONS.USER_ICON :
                CHOOSED_ICON = <UserCircleIcon style={ iconStyles.full } />
                break; 
            case ICONS_DEFINITIONS.PRIVACITY_ICON :
                CHOOSED_ICON = <UserLockIcon style={ iconStyles.middle } />
                break; 
            case ICONS_DEFINITIONS.TOOLS_ICON :
                CHOOSED_ICON = <ToolsIcon style={ iconStyles.middle } />
                break; 
            case ICONS_DEFINITIONS.CONFIGURATION_ICON :
                CHOOSED_ICON = <ConfigIcon style={ iconStyles.middle } />
                break; 
            case ICONS_DEFINITIONS.DROPDOWN_ICON :
                CHOOSED_ICON = <DropDownIcon style={ iconStyles.middle } />
                break;
            case ICONS_DEFINITIONS.SEND_MESSAGE_ICON :
                CHOOSED_ICON = <MessageSendICon style={ iconStyles.send } />
                break;
        }
        return CHOOSED_ICON;
    }
    //Return component view
    return(
        <Fragment>
            <View style={
                props.icon?
                    props.void?
                        iconStyles.void
                        :iconStyles.middleOutside
                    :iconStyles.iconOutside
            } >
                {
                    props.onPress?
                        <TouchableOpacity onPress={props.onPress} >
                            <ChooseIcon/>
                        </TouchableOpacity>
                        :
                        <ChooseIcon/>
                }
            </View>
        </Fragment>
    )
}

//Export component view
export default Icon