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
import MessageSendIcon from "../../../assets/icons/paper-plane-solid.svg"
import QuestionIcon from "../../../assets/icons/question-solid.svg"
import CameraIcon from "../../../assets/icons/camera-solid.svg"
import BoltIcon from "../../../assets/icons/bolt-solid.svg"
import SpinIcon from "../../../assets/icons/sync-alt-solid.svg"
import VideoIcon from "../../../assets/icons/video-solid.svg"
import AdjustIcon from "../../../assets/icons/adjust-solid.svg"

//Definitions
import { ICONS_DEFINITIONS, STYLE_DEFINITIONS } from "../../../global/definitions"

//Component definition
const ChooseIcon = (props) =>{
    let IconComponent = <View style={ props.style } />
    switch(props.icon){ 
        case ICONS_DEFINITIONS.GO_BACK_ICON :
            IconComponent = <GoBackIcon style={ props.style} /> 
            break;
        case ICONS_DEFINITIONS.BELL_ICON :
            IconComponent = <BellIcon style={ props.style} /> 
            break;
        case ICONS_DEFINITIONS.CHAT_MESSAGE_ICON :
            IconComponent = <MessageIcon style={ props.style} /> 
            break;
        case ICONS_DEFINITIONS.NEW_POST_ICON :
            IconComponent = <FeatherIcon style={ props.style} /> 
            break;
        case ICONS_DEFINITIONS.IMAGE_ICON :
            IconComponent = <ImageIcon style={ props.style} /> 
            break;
        case ICONS_DEFINITIONS.USER_ICON :
            IconComponent = <UserCircleIcon style={ props.style} /> 
            break;
        case ICONS_DEFINITIONS.PRIVACITY_ICON :
            IconComponent = <UserLockIcon style={ props.style} /> 
            break;
        case ICONS_DEFINITIONS.TOOLS_ICON :
            IconComponent = <ToolsIcon style={ props.style} /> 
            break;
        case ICONS_DEFINITIONS.CONFIGURATION_ICON :
            IconComponent = <ConfigIcon style={ props.style} /> 
            break;
        case ICONS_DEFINITIONS.DROPDOWN_ICON :
            IconComponent = <DropDownIcon style={ props.style } />
            break;
        case ICONS_DEFINITIONS.SEND_MESSAGE_ICON :
            IconComponent = <MessageSendIcon style={ props.style } />
            break;
        case ICONS_DEFINITIONS.UNDEFINED_ICON :
            IconComponent = <QuestionIcon style={ props.style } />
            break;
        case ICONS_DEFINITIONS.CAMERA :
            IconComponent = <CameraIcon style={ props.style } />
            break;
        case ICONS_DEFINITIONS.FLASH :
            IconComponent = <BoltIcon style={ props.style } />
            break;
        case ICONS_DEFINITIONS.SPIN :
            IconComponent = <SpinIcon style={ props.style } />
            break;
        case ICONS_DEFINITIONS.RECORD :
            IconComponent = <VideoIcon style={ props.style } />
            break;
        case ICONS_DEFINITIONS.WHITE_BALANCE :
            IconComponent = <AdjustIcon style={ props.style } />
            break;
    }
    return (
        <React.Fragment>
            {
                IconComponent
            }
        </React.Fragment>
    )
}
const Icon = (props) => {
    //Read data from provider
    const { mainColor, secondaryColor, width, height, strTheme } = useDesignContext()
    //Styles
    const iconStyles = StyleSheet.create({
        middleOutside : {
            width : 60,
            height : 60,
            backgroundColor: strTheme === STYLE_DEFINITIONS.LIGHT_MODE ||
                props.icon === ICONS_DEFINITIONS.NEW_POST_ICON ? secondaryColor : 'transparent' ,
            borderRadius : 35,
            borderColor: mainColor,
            borderWidth : 1,
            ...props.style
        },
        middle : {
            width : 40,
            height : 40,
            color:mainColor,
            top: 9,
            left: 9
        },
        send : {
            width : 40,
            height : 40,
            color:mainColor,
            top: 10,
            left: 10
        },
        full : {
            width : 60,
            height : 60,
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
            width : 60,
            height : 60,
            backgroundColor : 'transparent',
            ...props.style
        },
        iconInside : {
          backgroundColor : strTheme === STYLE_DEFINITIONS.LIGHT_MODE ? secondaryColor : 'transparent' ,
          width : width/2.5,
          height : width/2.5,
          borderRadius : width/4,
          top: width/20,
          left: width/20
        },
    })
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
                            <ChooseIcon icon={props.icon}
                            style={
                                props.icon===ICONS_DEFINITIONS.SEND_MESSAGE_ICON || props.icon===ICONS_DEFINITIONS.NEW_POST_ICON?
                                    iconStyles.send :
                                props.icon===ICONS_DEFINITIONS.USER_ICON?
                                    iconStyles.full :
                                props.icon!==ICONS_DEFINITIONS.SEND_MESSAGE_ICON && props.icon!==ICONS_DEFINITIONS.USER_ICON?
                                    iconStyles.middle:
                                iconStyles.iconInside
                            }
                        />
                        </TouchableOpacity>
                        :
                        <ChooseIcon icon={props.icon}
                            style={
                                props.icon===ICONS_DEFINITIONS.SEND_MESSAGE_ICON?
                                    iconStyles.send :
                                props.icon===ICONS_DEFINITIONS.USER_ICON?
                                    iconStyles.full :
                                props.icon!==ICONS_DEFINITIONS.SEND_MESSAGE_ICON && props.icon!==ICONS_DEFINITIONS.USER_ICON?
                                    iconStyles.middle:
                                iconStyles.iconInside
                            }
                        />
                }
            </View>
        </Fragment>
    )
}

//Export component view
export default Icon