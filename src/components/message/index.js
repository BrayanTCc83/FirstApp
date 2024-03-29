import React from 'react'
import { View, StyleSheet } from 'react-native'
import { STYLE_DEFINITIONS, TEXT_DEFINITIONS } from '../../../global/definitions'
import { useDesignContext } from '../../provider/designProvider'
import TextView from '../textView'

const Message = (props) => {
    const { width, mainColor, secondaryColor, strTheme } = useDesignContext()
    const MessageStylesGlobal = StyleSheet.create({
        container : {
            width : width/3*2,
            borderColor: mainColor,
            borderWidth:2,
            padding : 6,
            paddingBottom : 15,
            marginHorizontal : 15,
            marginVertical: 7,
            backgroundColor : strTheme === STYLE_DEFINITIONS.DARK_MODE ? 'transparent' : secondaryColor
        }
    })
    const MessageStyles = StyleSheet.create({
        containerLeft : {
            borderRadius: 15,
            borderBottomLeftRadius: 0,
            ...MessageStylesGlobal.container
        },
        containeRight : {
            alignSelf : 'flex-end',
            borderRadius: 15,
            borderBottomRightRadius: 0,
            ...MessageStylesGlobal.container
        }
    })
    return (
        <View style={
            props.mine?MessageStyles.containeRight:MessageStyles.containerLeft
        } >
            <TextView 
                textSize={TEXT_DEFINITIONS.TEXT_SIZE_4}
                thin='thin' 
                align='justify'
            >
                {
                    props.children? props.children : "Message"
                }
            </TextView>
            <TextView 
                textSize={TEXT_DEFINITIONS.TEXT_SIZE_5}
                thin='thin' 
                align={ props.mine ? 'right' : 'left' }
            >
                {
                    props.time? props.time : "----"
                }
            </TextView>
        </View>
    )
}
export default Message