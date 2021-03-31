import React from 'react'

import { View, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'

import Image from "../../components/image"
import Icon from "../../components/icon"
import ViewContainer from '../../components/viewContainer'

import { ICONS_DEFINITIONS } from "../../../global/definitions"
import { useDesignContext } from '../../provider/designProvider'

const MultimediaView = (props) => {
    const { width, height } = useDesignContext()
    const navigation = useNavigation()
    const file = props.route.params.file
    const MultimediaStyles = StyleSheet.create({
        container : {
            width : width,
            height : height-100,
            display : 'flex',
            alignContent : 'center',
            justifyContent : 'center',
        },
        img : {
            width : width - 20,
            height : height - 120,
            borderRadius: 0
        }
    })

    return (
        <ViewContainer>
            <View >
                <Icon 
                    icon = { ICONS_DEFINITIONS.GO_BACK_ICON }
                    void  
                    onPress = {
                        ()=>navigation.goBack()
                    }
                />
            </View>
            <View style={MultimediaStyles.container} >
                <Image 
                    src={file} 
                    shower 
                    style={MultimediaStyles.img} 
                />
            </View>
        </ViewContainer>
    )
}
export default MultimediaView