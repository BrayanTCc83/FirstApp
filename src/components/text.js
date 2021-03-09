//React
import React, { useState } from 'react'
import { Text, StyleSheet } from 'react-native'
//Provider
import { useAplicationContext } from "../provider"
const TextView = (props) => {
    const [align,setAlign]=useState(props.align?props.align:'center')
    const fonts = useAplicationContext().fontSizes
    const fontColor = useAplicationContext().fontColor
    const textStyles= StyleSheet.create({
        mainText : {
          marginVertical:50,
          fontSize : fonts.first,
          fontWeight : 'bold',
          textAlign : align,
          color: fontColor.black
        },
        secondText : {
          fontSize : fonts.second,
          fontWeight : 'bold',
          textAlign : align,
          color: fontColor.black
        },
        commonText : {
          fontSize : fonts.common,
          fontWeight : 'bold',
          textAlign : align,
          color: fontColor.black
        },
        infoText : {
          fontSize : fonts.info,
          fontWeight : 'bold',
          textAlign : align,
          color: fontColor.black
        },
        detailText : {
          fontSize : fonts.detail,
          fontWeight : 'bold',
          textAlign : align,
          color: fontColor.black
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