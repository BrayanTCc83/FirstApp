import React, { useState } from 'react'

import { StyleSheet, Image, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { SCREEN_VIEWS } from "../../../global/definitions"
import ImageTest from "../../../assets/images/test.png"
import ImageTest2 from "../../../assets/images/test2.png"

import { useDesignContext } from '../../provider/designProvider'
import { useNavigation } from '@react-navigation/native'

const ImageViewer = ( props ) =>{
    const { width, height } = useDesignContext()
    console.log('Img', props)
    const navigation = useNavigation()
    const ImageStyle = StyleSheet.create({
        src : {
            resizeMode: "contain",
            height: 100,
            width: width / 2.5,
            margin : 10,
            borderRadius : 20,
            ...props.style
        }
    })
    const chooseFile = () =>{
        const file = props.src ? props.src !== 'test' ? {
            uri: props.src
        } : ImageTest : 
            props.src === ''?ImageTest2 : ImageTest2
        return (
            <>
                <Image source={file} style= { ImageStyle.src }  />
            </>
        )
    }
    return (
        <View>
            <TouchableOpacity 
                disabled={props.shower}
                onPress={ 
                    ()=>navigation.navigate(SCREEN_VIEWS.MULTIMEDIA,{ type:'img', file:props.src?props.src:'' }) 
                } 
            >
                {
                    chooseFile()
                }
            </TouchableOpacity>
        </View>
    )
}
export default ImageViewer