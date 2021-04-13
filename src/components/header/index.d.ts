import { StyleSheetProperties } from "react-native"
import Header from "./index"
/**
 * 
 * @param {Object} props
 * @returns {JSX.Element}
 */
function Header ( props:{
    icons ?: Array<{
        src:string, 
        action?:function
    }>
    text ?: string,
    textOptions ?: {
        align : string,
        centering ?: boolean
    },
    style : StyleSheetProperties,
    iconsDesign : StyleSheetProperties,
    notBack : boolean
} ) : JSX.Element
export default Header