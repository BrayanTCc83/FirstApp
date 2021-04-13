//React
import React from 'react'
import { Text, StyleSheet } from 'react-native'
//Provider
import { useDesignContext } from "../../provider/designProvider"
import { TEXT_DEFINITIONS, STYLE_DEFINITIONS } from '../../../global/definitions'
const TextView = (props) => {
    const thin = props.thin? 'normal': 'bold'
    const align = props.align?props.align:'center'
    const { fontSizes, fontColor, strTheme, whiteColor } = useDesignContext()
    //Styles definition
    const globalTextStyles = StyleSheet.create({
      text : {
        fontWeight : thin,
        textAlign : align,
        color: props.color?props.color:strTheme === STYLE_DEFINITIONS.DARK_MODE ? whiteColor : fontColor ,
        marginHorizontal: props.margin?props.margin:0,
      }
    })
    const textStyles= StyleSheet.create({
        mainText : {
          marginVertical:20,
          fontSize : fontSizes.first,
          ...globalTextStyles.text,
          ...props.style
        },
        secondText : {
          fontSize : fontSizes.second,
          ...globalTextStyles.text,
          ...props.style
        },
        commonText : {
          fontSize : fontSizes.common,
          ...globalTextStyles.text,
          ...props.style
        },
        infoText : {
          fontSize : fontSizes.info,
          ...globalTextStyles.text,
          ...props.style
        },
        detailText : {
          fontSize : fontSizes.detail,
          ...globalTextStyles.text,
          ...props.style
        },
    })
    return(
        <Text style={
            props.textSize||props.textSize === TEXT_DEFINITIONS.TEXT_SIZE_1 ? 
                props.textSize === TEXT_DEFINITIONS.TEXT_SIZE_2 ? textStyles.secondText:
                props.textSize === TEXT_DEFINITIONS.TEXT_SIZE_3 ? textStyles.commonText:
                props.textSize === TEXT_DEFINITIONS.TEXT_SIZE_4 ? textStyles.infoText:
                props.textSize === TEXT_DEFINITIONS.TEXT_SIZE_5 ? textStyles.detailText:
                textStyles.mainText
            :textStyles.commonText
        } >
          {
            props.children?props.children:"Text"
          }
        </Text>
    )
}
export default TextView