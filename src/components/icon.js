//Import React
import React, { Fragment } from 'react'

//Import react native
import { View, TouchableOpacity, StyleSheet } from 'react-native'

//Provider
import { useAplicationContext } from "../provider"

//SVG icons
import BellIcon from "../../assets/icons/bell-regular.svg"
import GoBackIcon from "../../assets/icons/angle-left-solid.svg"
import MessageIcon from "../../assets/icons/envelope-regular.svg"
import DropDownIcon from "../../assets/icons/caret-up-solid.svg"
import FeatherIcon from "../../assets/icons/feather-alt-solid.svg"
import ImageIcon from "../../assets/icons/image-regular.svg"
import UserCircleIcon from "../../assets/icons/user-circle-solid.svg"
import UserLockIcon from "../../assets/icons/user-lock-solid.svg"
import ToolsIcon from "../../assets/icons/wrench-solid.svg"
import ConfigIcon from "../../assets/icons/cog-solid.svg"

//Component definition
const Icon = (props) => {
    //Read data from provider
    const { mainColor, secondaryColor, width, height } = useAplicationContext()
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
        return props.icon==='bell'?
                    <BellIcon style={iconStyles.middle}/>:
                props.icon==='goback'?
                    <GoBackIcon style={iconStyles.middle}/>:
                props.icon==='message'?
                    <MessageIcon style={iconStyles.middle}/>:
                props.icon==='feather'?
                    <FeatherIcon style={iconStyles.middle}/>:
                props.icon==='image'?
                    <ImageIcon style={iconStyles.middle}/>:
                props.icon==='user'?
                    <UserCircleIcon style={iconStyles.full}/>:
                props.icon==='lock'?
                    <UserLockIcon style={iconStyles.middle}/>:
                props.icon==='tools'?
                    <ToolsIcon style={iconStyles.middle}/>:
                props.icon==='config'?
                    <ConfigIcon style={iconStyles.middle}/>:
                props.icon==='dropdown'?
                    <DropDownIcon style={iconStyles.middle}/>:
                    <View style={iconStyles.iconInside} />
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