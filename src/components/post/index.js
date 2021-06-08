import React, { useEffect, useState } from 'react'

import { Image } from 'react-native'

import Icon from "../icon"

import TextView from "../textView"

import { StyleSheet, View } from 'react-native' 

import { ICONS_DEFINITIONS, SCREEN_VIEWS, TEXT_DEFINITIONS } from "../../../global/definitions"
import { useDesignContext } from '../../provider/designProvider'
import ImageViewer from '../image'
import { useNavigation } from '@react-navigation/core'
import Database from '../../../database'
import { useHandlerData } from '../../hooks/handlers'

const DrawTextContent = (style, text) =>{
    return (
        <TextView
            textSize={ TEXT_DEFINITIONS.TEXT_SIZE_4 } thin 
            style={ style }
        >
            {text + "  "}
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
                            onPress={ ()=>
                                navigation.navigate(
                                    SCREEN_VIEWS.MULTIMEDIA,
                                    { type:'img', files:props.files, index:index  
                                }) 
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
    const [ postData, instanceData, clear ] = useHandlerData( {
        name : "User name",
        date : props.data? props.data.date : "01-05-2021"
    } )
    const [ isUpdate, setUpdate ] = useState( false )
    const postDatabase = Database( 'users' )

    const loadData = () => {
        instanceData( props.data.postDate, "date" )
        postDatabase.getValues( props.data.userRef, ( prop, val, index )=>{
            instanceData( val, prop )
        } )
    }

    useEffect( () => loadData(), [] )

    const navigation = useNavigation()

    const { mainColor, width } = useDesignContext()

    const PostEstile = StyleSheet.create({
        profilePhoto : {
            borderRadius : 30,
            margin : 5,
            width : 60,
            height : 60,
            borderColor : mainColor,
            borderWidth: 2,
        },
        post:{
            borderRadius : 15,
            borderColor : mainColor,
            borderWidth: 2,
            width : width - 20,
            margin : 10,
            maxHeight : 800
        },
        userIcon : {
            top: 5,
            left : 5
        },
        texts : {
            width : width - 39,
            height : 60,
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
            {
                props.isUpdate === true ?
                <View>
                    <View style={ PostEstile.header } >
                        {   
                            postData.profilePhoto ? 
                                <Image source = {{ uri : postData.profilePhoto }} style = { PostEstile.profilePhoto } />
                            :
                                <Icon 
                                    icon={ ICONS_DEFINITIONS.USER_ICON } 
                                    style={ PostEstile.userIcon }
                                    onPress = {
                                        () => navigation.navigate( SCREEN_VIEWS.POST_VIEW, {id:"key"})
                                    }
                                />
                        }
                        <View style = { PostEstile.texts } >
                            <TextView
                                textSize={ TEXT_DEFINITIONS.TEXT_SIZE_3 } 
                                align='left'
                            >
                                { 
                                    postData.name ? postData.name : null
                                }
                            </TextView>
                            <TextView
                                textSize={ TEXT_DEFINITIONS.TEXT_SIZE_3 } thin 
                                align='left'
                            >
                                {
                                    postData.date ? postData.date : null
                                }
                            </TextView> 
                        </View>
                    </View>
                    <View>
                        {
                            DrawTextContent(PostEstile.textContent, props.data && props.data.text !== " " ? props.data.text : "Content" )
                        }
                        {
                            props.data && props.data.images ? 
                                <DrawMultimediaContent 
                                    files={props.data.images} 
                                />
                            :
                                <DrawMultimediaContent 
                                    files={[
                                        'test1',
                                        'test',
                                        'https://lh3.googleusercontent.com/proxy/BDFRKIZhR3iT3dSTwcq4Ww6EKcYfAArpbAO2utQhHdJfjXmIu95s-q5BmcJWExTbZlzRILOU36YLJ66bFgo7oo3XraldZv7ttaBjYjOeROEx5uNp4TgVbGpZNbSDjGBh5MdYRaeWZXf_EXu0_M9UeQ'
                                    ]} 
                                />
                        }
                    </View>
                </View>
                : null
            }
        </View>
    )
}
export default Post