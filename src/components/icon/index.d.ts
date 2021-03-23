import { StyleSheetProperties } from "react-native";
import Icon from "./index"
/**
 * @param {String} icon The icon notation for show
 * @param {StyleSheetProperties} style This property can change the style of component
 * @param {function} onPress A callback for give an action for the button icon
 * @param {boolean} void This action represent if the element have not background 
 * @returns {JSX.Element} The returned element is a showable icon from a list defined in ICON_DEFINITIONS
 */
export default function Icon (props:{icon?:string, style?:StyleSheetProperties, onPress?:()=>{}, void:boolean}) : JSX.Element