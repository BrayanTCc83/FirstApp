import React from 'react'
import { StyleSheetProperties } from 'react-native'
import ViewContainer from "."
/**
 * This container is used like a Screen in the app
 * 
 * @param {boolean} scroll This prop indicate if the view is or not scrollable
 * @param {StyleSheetProperties} style Change the style for the element, can be used to add or modify the default style
 * @returns Return a View Container for the elements in a view or screen app
 */
export default function ViewContainer (props:{scroll:boolean, style?:StyleSheetProperties}) : JSX.Element 