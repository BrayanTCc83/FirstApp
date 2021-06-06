import React, { useState } from 'react'

import { StyleSheet, Image, View } from 'react-native'

import { TouchableOpacity } from 'react-native-gesture-handler'

import { SCREEN_VIEWS } from "../../../global/definitions"
import ImageTest from "../../../assets/images/test.png"
import ImageTest2 from "../../../assets/images/test2.png"
import VideoImage from "../../../assets/images/video-image.png"

import { useDesignContext } from '../../provider/designProvider'
import { useNavigation } from '@react-navigation/native'

const ImageViewer = ( props ) =>{
    const { width, height } = useDesignContext()
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
        const file = props.src ? props.src !== 'test1' && props.src !=='test' && props.src !== 'video' ? {
            uri: props.src
        } : props.src === 'test' ? ImageTest2 : props.src === 'video' ? VideoImage : ImageTest : ImageTest
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
                        props.onPress?
                            props.onPress
                        :()=>navigation.navigate(SCREEN_VIEWS.MULTIMEDIA,{ type:'img', file:props.src?props.src:'', index : 0 }) 
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