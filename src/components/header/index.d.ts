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
    notBack : boolean
} ) : JSX.Element
export default Header