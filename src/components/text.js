//React
import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
//Provider
import { useAplicationContext } from "../provider"
const TextView = (props) => {
    const [align,setAlign]=useState(props.align?props.align:'center')
    const fonts = useAplicationContext().fontSizes
    const fontColor = useAplicationContext().fontColor
    let defaultColor = props.color?props.color:fontColor.black
    const textStyles= StyleSheet.create({
        mainText : {
          marginVertical:50,
          fontSize : fonts.first,
          fontWeight : 'bold',
          textAlign : align,
          color: defaultColor,
          marginHorizontal: props.margin?props.margin:0,
          ...props.style
        },
        secondText : {
          fontSize : fonts.second,
          fontWeight : 'bold',
          textAlign : align,
          color: defaultColor,
          marginVertical: props.vmargin?props.vmargin:0,
          marginHorizontal: props.margin?props.margin:0,
          ...props.style
        },
        commonText : {
          fontSize : fonts.common,
          fontWeight : 'bold',
          textAlign : align,
          color: defaultColor,
          marginVertical: props.vmargin?props.vmargin:0,
          marginHorizontal: props.margin?props.margin:0,
          ...props.style
        },
        infoText : {
          fontSize : fonts.info,
          fontWeight : 'bold',
          textAlign : align,
          color: defaultColor,
          marginVertical: props.vmargin?props.vmargin:0,
          marginHorizontal: props.margin?props.margin:0,
          ...props.style
        },
        detailText : {
          fontSize : fonts.detail,
          fontWeight : 'bold',
          textAlign : align,
          color: defaultColor,
          marginVertical: props.vmargin?props.vmargin:0,
          marginHorizontal: props.margin?props.margin:0,
          ...props.style
        },
    })
    return(
        <Text style={
            props.type||props.type===0?
                props.type===1?textStyles.secondText:
                props.type===2?textStyles.commonText:
                props.type===3?textStyles.secondText:
                props.type===4?textStyles.infoText:
                textStyles.detailText
            :textStyles.mainText
        } >{props.children}</Text>
    )
}
export default TextView