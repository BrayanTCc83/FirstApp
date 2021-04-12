import React, { useState } from 'react'

import { View, StyleSheet } from 'react-native'

import Image from "../../components/image"
import Icon from "../../components/icon"
import Header from "../../components/header"
import ViewContainer from '../../components/viewContainer'

import { useDesignContext } from '../../provider/designProvider'
import { ICONS_DEFINITIONS } from "../../../global/definitions"

const MultimediaView = (props) => {
    const { width, height } = useDesignContext()
    const [ index, setIndex ] = useState(props.route && props.route.params ? props.route.params.index : 0)
    const files = props.route && props.route.params ? props.route.params.files : []
    console.log(files)
    const changeIndex=(isIncress)=>{
        let length = files.length
        console.log(index)
        isIncress === true ? setIndex( index < length-1 ? index + 1 : 0 ) : setIndex( index > 0 ? index - 1 : length-1 )
    }

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
            borderRadius: 0,
            zIndex : 1
        },
        buttonLeft : {
            position : 'absolute',
            left : -10,
            transform : [
                {
                    rotateZ : '-90deg'
                }
            ],
            zIndex : 2
        },
        buttonRight : {
            position : 'absolute',
            left : width - 60,
            transform : [
                {
                    rotateZ : '90deg'
                }
            ],
            zIndex : 2
        }
    })

    return (
        <ViewContainer>
            <Header/>
            <View style={MultimediaStyles.container} >
                <Icon icon={ ICONS_DEFINITIONS.DROPDOWN_ICON } void style={ MultimediaStyles.buttonLeft }
                    onPress = {
                        ()=> changeIndex(false)
                    }
                />
                <Image 
                    src={files[index]}
                    shower 
                    style={MultimediaStyles.img} 
                />
                <Icon icon={ ICONS_DEFINITIONS.DROPDOWN_ICON } void style={ MultimediaStyles.buttonRight } 
                    onPress = {
                        ()=> changeIndex(true)
                    }
                />
            </View>
        </ViewContainer>
    )
}
export default MultimediaView