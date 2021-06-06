import React, { useEffect, useState } from 'react'
import { View, Text, StyleSheet, ImageStore } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ICONS_DEFINITIONS, TEXT_DEFINITIONS, SCREEN_VIEWS } from '../../global/definitions';
import Icon from '../components/icon';
import ImageViewer from '../components/image';
import VideoViewer from '../components/video';
import Input from '../components/input';
import Header from '../components/header';
import ViewContainer from '../components/viewContainer';
import Button from '../components/button';
import { useDesignContext } from '../provider/designProvider';
import { launchImageLibrary } from "react-native-image-picker"
import Database, { Storage } from '../../database';
import { useHandlerData } from "../hooks/handlers"
import { useUserContext } from '../provider/userProvider';
const Post = (props) =>{
  const { mainColor, width, height } = useDesignContext()
  const { userData } = useUserContext()
  const navigation = useNavigation()
  const postReference = Database( 'posts' )
  const postStorage = Storage( 'posts', userData.key )
  const [ postData, setPostData ] = useHandlerData({
    images : [],
    videos : []
  })
  const [ hasMultimedia, setHasMultimedia ] = useState( false )
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
  const loadPhoto = ( file ) =>{
    if( file.uri != undefined ){
      setHasMultimedia( false )
      let prevImages = postData.images
      if( prevImages == null ){
        prevImages = new Array()
      }
      prevImages.push( file.uri )
      setPostData( prevImages, "images" )
      setHasMultimedia( true )
    }
  }
  const loadVideo = ( file ) => {
    console.log( file )
    if( file.uri != undefined ){
      setHasMultimedia( false )
      let prevVideos = postData.videoFiles
      if( prevVideos == null ){
        prevVideos = new Array()
      }
      prevVideos.push( file.uri )
      setPostData( prevVideos, "videos" )
      setHasMultimedia( true )
    }
  }
  const openGalery = () => {
    launchImageLibrary({quality:1,mediaType:'photo'}, loadPhoto )
  }
  const openVideoGalery = () => {
    launchImageLibrary({
      quality:0.6,
      mediaType:'video',
      includeBase64 : true,
      videoQuality : 'medium'
    }, loadVideo )
  }
  const postPublication = () => {
    let dateTime = new Date()
    postData.userRef = userData.key
    postData.postDate = `${dateTime.getDate()}-${dateTime.getMonth() + 1}-${dateTime.getFullYear()}`
    if( 
      postData.text !== "" || postData.images.length > 0 || postData.images.length > 0
    ){
      postStorage.uploadFiles( postData.images, ( fileUri, index, promise )=>{
        if( fileUri != null ) postData.images[index] = fileUri
        promise.then( ( status ) => {
          if( status === true ){
            postStorage.uploadVideos( postData.videos, ( videoUri, videoIndex, resolve )=>{
              if( videoUri != null ) postData.images[videoIndex] = videoUri
              resolve.then( (vidState) => {
                  if( vidState === true ){
                    postReference.pushElement( postData, () => {
                      navigation.goBack()
                    } )
                  }
              } )
            } )
          }
        } )
      } )
    }
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
      <Input 
        style={ PostStyles.input } 
        multiline 
        maxLength={150}   
        name="text"
        onChange={ setPostData }
      >
        Escribe tu publicación
      </Input>
      <View style={ PostStyles.images } >
        {
          postData.images.map((file, index)=>
            <ImageViewer 
              src={file} 
              key={index} 
              onPress={()=>navigation.navigate( SCREEN_VIEWS.MULTIMEDIA, {files : postData.images, index:index } )} 
            />
          )
        }
        {
          postData.videos.map((file, index)=>
            <VideoViewer 
              src={file} 
              key={index}
            />
          )
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
        <Icon 
          icon={ICONS_DEFINITIONS.RECORD} 
          void 
          onPress = { ()=> openVideoGalery() }
        />
      </View>
      <Button
        onPress = { postPublication }
      >
        Publicar
      </Button>
    </ViewContainer>
  )
};
export default Post