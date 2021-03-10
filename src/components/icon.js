//Import React
import React, { Fragment } from 'react'

//Import react native
import { View, Image, StyleSheet } from 'react-native'

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
    const style = useAplicationContext().appTheme.style
    const width = useAplicationContext().width
    const height = useAplicationContext().height
    const fontColor = useAplicationContext().fontColor
    //Styles
    const iconStyles = StyleSheet.create({
        middle : {
            width : 50,
            height : 50,
            color:'blue'
        }
    })
    //Return component view
    return(
        <Fragment>
            <BellIcon style={iconStyles.middle}/>
            <GoBackIcon style={iconStyles.middle}/>
            <MessageIcon style={iconStyles.middle}/>
            <FeatherIcon style={iconStyles.middle}/>
            <ImageIcon style={iconStyles.middle}/>
            <UserCircleIcon style={iconStyles.middle}/>
            <UserLockIcon style={iconStyles.middle}/>
            <ToolsIcon style={iconStyles.middle}/>
            <ConfigIcon style={iconStyles.middle}/>
            <DropDownIcon style={iconStyles.middle}/>
        </Fragment>
    )
}

//Export component view
export default Icon