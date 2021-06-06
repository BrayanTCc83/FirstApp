import { useNavigation } from '@react-navigation/core'
import React from 'react'
import ImageViewer from "../image"
import { SCREEN_VIEWS } from "../../../global/definitions"
const VideoViewer = ( props ) => {
    const navigation = useNavigation()
    return (
        <ImageViewer 
            src= 'video'
            key = {props.index}
            onPress={
                ()=>navigation.navigate( SCREEN_VIEWS.MULTIMEDIA, 
                    { type:'video', files : [props.src], index: 0 } )
            }
        />
    )
}
export default VideoViewer