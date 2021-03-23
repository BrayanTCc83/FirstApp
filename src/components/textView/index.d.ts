import { StyleSheetProperties } from "react-native";
import TextView from "./index"
/**
 * This element contain a text view 
 * 
 * @param {string} thin Property indicates the weight for the text
 * @param {string} align Indicates de align (left, right, center) is defined default like center
 * @param {string} children This is the content for the text, must be a string
 * @param {number} textSize Indicates the size for the text use TEXT_DEFINITION sizes
 * @param {StyleSheetProperties} style  Style that can be modify style for the component
 * @returns {JSX.Element} This element return a text component
 */
export default function TextView (props:{
    thin?:string, 
    align?:string, 
    children?:string,
    textSize?:number,
    style?:StyleSheetProperties
}) : JSX.Element