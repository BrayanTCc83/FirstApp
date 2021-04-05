import React, { useState } from 'react'

import { Image } from 'react-native'

import Icon from "../icon"

import TextView from "../textView"

import { StyleSheet, View } from 'react-native'

import { ICONS_DEFINITIONS, SCREEN_VIEWS } from "../../../global/definitions"
import { useDesignContext } from '../../provider/designProvider'
import ImageViewer from '../image'
import { useNavigation } from '@react-navigation/core'

const DrawTextContent = (style) =>{
    return (
        <TextView
            textSize={4} thin 
            style={ style }
        >
            Content
        </TextView> 
    )
}
const DrawMultimediaContent = (props) =>{
    const { width } = useDesignContext()
    const navigation = useNavigation()
    const ImageStyle = StyleSheet.create({
        content : {
            display : 'flex',
            justifyContent : 'center',
            flexDirection : 'row',
            flexWrap : 'wrap'
        }
    })
    return (
        <>
        {
            props.files? 
                <View style = {ImageStyle.content} >
                {
                    props.files.map( (file, index) => 
                        <ImageViewer 
                            src={file} 
                            key={file+" name is "+index}
                            onPress={ 
                                ()=>navigation.navigate(SCREEN_VIEWS.MULTIMEDIA,{ type:'img', files:props.files, index:index  }) 
                            } 
                        />
                    )
                }
                </View>
            :null
        }
        </>
    )
}
const Post = ( props ) => {
    const [ postUser, setPostUser ] = useState("User")
    const [ postDate, setPostDate ] = useState("3-27-2021,  5:01")

    const navigation = useNavigation()

    const { mainColor, width } = useDesignContext()

    const PostEstile = StyleSheet.create({
        post:{
            borderRadius : 15,
            borderColor : mainColor,
            borderWidth: 2,
            width : width - 25,
            margin : 12,
            maxHeight : 500
        },
        userIcon : {
            top: 5,
            left : 5
        },
        texts : {
            width : width - 39,
            height : 70,
            marginVertical : 5,
            marginHorizontal : 10
        },
        header : {
            display : 'flex',
            flexDirection : 'row'
        },
        textContent : {
            padding: 8,
            textAlign : 'left'
        }
    })
    return(
        <View
            style = { PostEstile.post }
        >
            <View style={ PostEstile.header } >
                <Icon 
                    icon={ ICONS_DEFINITIONS.USER_ICON } 
                    style={ PostEstile.userIcon }
                    onPress = {
                        () => navigation.navigate( SCREEN_VIEWS.POST_VIEW, {id:"key"})
                    }
                />
                <View style = { PostEstile.texts } >
                    <TextView
                        textSize={4} 
                        align='left'
                    >
                        { 
                            postUser
                        }
                    </TextView>
                    <TextView
                        textSize={4} thin 
                        align='left'
                    >
                        {
                            postDate
                        }
                    </TextView> 
                </View>
            </View>
            <View>
                {
                    DrawTextContent(PostEstile.textContent)
                }
                <DrawMultimediaContent 
                    files={[
                        'test1',
                        'test',
                        'https://lh3.googleusercontent.com/proxy/BDFRKIZhR3iT3dSTwcq4Ww6EKcYfAArpbAO2utQhHdJfjXmIu95s-q5BmcJWExTbZlzRILOU36YLJ66bFgo7oo3XraldZv7ttaBjYjOeROEx5uNp4TgVbGpZNbSDjGBh5MdYRaeWZXf_EXu0_M9UeQ'
                    ]} 
                />
            </View>
        </View>
    )
}
export default Post