import React from 'react'

import { View, StyleSheet } from 'react-native'

import { ICONS_DEFINITIONS, TEXT_DEFINITIONS, } from "../../../global/definitions"

import { useNavigation } from '@react-navigation/native'
import { useDesignContext } from '../../provider/designProvider'

import Icon from "../icon"
import TextView from '../textView'

const Header = (props) => {
    const { mainColor } = useDesignContext()

    const navigation = useNavigation()

    const HeaderStyle = StyleSheet.create({
        header : {
          height : 80,
          borderBottomColor: mainColor,
          borderBottomWidth:2,
          display:'flex',
          flexDirection:'row'
        },
        icon : {
          top : 5
        },
        text : {
            flex : 1,
            marginVertical : 20
        }
    })

    let ElementsArray = props.icons? new Array(
    props.icons.map( (item, index) => 
        <Icon 
            icon = { item.src } 
            onPress={ item.action? item.action : ()=>null } 
            style = { HeaderStyle.icon } 
            void key={item + index} 
        /> 
    ))[0]:new Array()

    let TextElement = props.text?
        <TextView 
            textSize = { TEXT_DEFINITIONS.TEXT_SIZE_4 } 
            style = { HeaderStyle.text }
            align = { 
                props.textOptions && props.textOptions.align?
                    props.textOptions.align
                :'justify'
            }
        >
            { props.text }
        </TextView>:null

    let size = ElementsArray.length 
    if( props.textOptions && props.textOptions.centering ){
        if( size === 1 ){
            ElementsArray.unshift(
                TextElement
            )
        }else if ( size % 2 === 0 ){
            let first = new Array(ElementsArray.splice(0, size/2 ))
            let last = new Array(ElementsArray.splice(size/2-1))
            ElementsArray = new Array(first.concat(TextElement,last))
        }else{
            let first = new Array(ElementsArray.splice(0, size/2  ))
            let last = new Array(ElementsArray.splice(size/2-1))
            ElementsArray = new Array(first,TextElement,last)
        }
    }else{
        ElementsArray.push(TextElement)
    }

    return(
        <View style = { HeaderStyle.header } >
            {
                props.notBack? 
                    null 
                :
                    <Icon 
                        icon={ICONS_DEFINITIONS.GO_BACK_ICON} 
                        void 
                        style={HeaderStyle.icon} 
                        onPress = {
                        () => navigation.goBack()
                        }
                    />
            }
            {
                ElementsArray
            }
            {
                props.children
            }
        </View>
    )
}
export default Header