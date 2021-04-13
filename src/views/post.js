import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageStore } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ICONS_DEFINITIONS, TEXT_DEFINITIONS, SCREEN_VIEWS } from '../../global/definitions';
import Icon from '../components/icon';
import ImageViewer from '../components/image';
import Input from '../components/input';
import Header from '../components/header';
import ViewContainer from '../components/viewContainer';
import { useDesignContext } from '../provider/designProvider';
import CameraView from './camera';
import { launchImageLibrary } from "react-native-image-picker"
const Post = (props) =>{
  const { mainColor, width, height } = useDesignContext()
  const navigation = useNavigation()
  const [ imagesFiles, setImagesFiles ] = useState("")
  const PostStyles = StyleSheet.create({
    input : {
      borderWidth : 0,
      maxWidth : width - 20,
      marginHorizontal : -30,
      height : 200,
      textAlignVertical : 'top',
    },
    footer : {
      display:'flex',
      flexDirection:'row'
    },
    images : {
      display : 'flex',
      flexDirection : 'row',
      alignContent : 'center',
      justifyContent : 'space-evenly',
      flexWrap:'wrap'
    }
  })
  const openGalery = () => {
    launchImageLibrary({quality:1,mediaType:'photo'},(file)=>{
      let prevImages = imagesFiles
      prevImages=prevImages!==""?prevImages+"---":""
      prevImages+=file.uri
      setImagesFiles(prevImages)
    })
  }
  return (
    <ViewContainer >
      <Header
        icons = {[
            {
              src:ICONS_DEFINITIONS.USER_ICON
            }
        ]}
      />
      <Input style={ PostStyles.input } multiline maxLength={150} >Escribe tu publicación</Input>
      <View style={ PostStyles.images } >
        {
          imagesFiles.length!==0? 
            imagesFiles.split('---').map((file, index)=>
              <ImageViewer 
                src={file} 
                key={index} 
                onPress={()=>navigation.navigate( SCREEN_VIEWS.MULTIMEDIA, {files : imagesFiles.split('---'), index:index } )} 
              />
            )
          :null
        }
      </View>
      <View style={ PostStyles.footer } >
        <Icon 
          icon={ICONS_DEFINITIONS.CAMERA} 
          void 
          onPress = { () => navigation.navigate( SCREEN_VIEWS.CAMERA_TAKE ) }
        />
        <Icon 
          icon={ICONS_DEFINITIONS.IMAGE_ICON} 
          void 
          onPress = { ()=> openGalery() }
        />
      </View>
    </ViewContainer>
  )
};
export default Post