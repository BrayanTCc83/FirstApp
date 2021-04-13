import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ImageStore } from 'react-native'
import { PermissionsAndroid } from 'react-native'
import Icon from "../../components/icon"
import { ICONS_DEFINITIONS, SCREEN_VIEWS } from "../../../global/definitions"
import { RNCamera, Barcode } from 'react-native-camera';
import { useNavigation } from '@react-navigation/core';
import { useDesignContext } from "../../provider/designProvider";
import Header from "../../components/header";
import * as ReactNativeFile from 'react-native-fs'
const PendingView = () => (
  <View
    style={{
      position : 'absolute',
      backgroundColor : 'white'
    }}
  >
    <Text>Waiting</Text>
  </View>
);
const CameraView = (props) =>{
    const { width } = useDesignContext()
    const navigation = useNavigation()
    const [ whiteBalance, setWhiteBalance ] = useState(RNCamera.Constants.WhiteBalance.auto)
    const [ isFlash, setFlash ] = useState(RNCamera.Constants.FlashMode.off)
    const [ cameraDirection, setCameraDirection ] = useState( RNCamera.Constants.Type.back )
    takePicture = async function(camera) {
        const options = { quality: 0.5, base64: true };
        const data = await camera.takePictureAsync(options)
        let pictureRoute = encodeURI( data.uri ).split('/')
        let path = ReactNativeFile.PicturesDirectoryPath+'/SocialNetwork/'
        try {
            const permission = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
            await PermissionsAndroid.request(permission);
            Promise.resolve();
        } catch (error) {
            Promise.reject(error);
        }
        await ReactNativeFile.exists(path)
            .then((val)=>{
                if( val ){
                    ReactNativeFile.writeFile( path + pictureRoute[pictureRoute.length-1] , data.base64, 'base64' )
                }else{
                    ReactNativeFile.mkdir(path)
                        .then((val)=>{
                            console.log(val)
                        })
                        .catch((err)=>{
                            console.log(err)
                        })   
                }
            })
            .catch((err)=>console.log('Path exists ',err))
    };
    const CommonCameraStyles = StyleSheet.create({
        icons : {
            backgroundColor: '#fff6',
            paddingHorizontal : 1,
            borderRadius: 20,
            alignSelf: 'center',
            top : 0
        },
        subHeader : {
            display : 'flex',
            left : 140,
            zIndex : 2,
            flexDirection : 'row-reverse'
        }
    })
    const CameraStyles = StyleSheet.create({
        container: {
          flex: 1,
          flexDirection: 'column',
          backgroundColor: 'black',
        },
        preview: {
          flex: 1,
          justifyContent: 'flex-end',
          alignItems: 'center',
          zIndex : 1
        },
        header : {
            position : 'absolute',
            zIndex : 2,
            borderBottomColor : 'transparent'
        },
        capture: {
            flex: 0,
            alignSelf: 'center',
            margin: 20,
            zIndex : 1,
            ...CommonCameraStyles.icons
        },
        icons : {
            margin : 5,
            alignSelf : 'center',
            zIndex : 2,
            ...CommonCameraStyles.icons
        }
    })
    return (
        <View style = { CameraStyles.container } >
            <Header 
                style={CameraStyles.header} 
                iconsDesign = { CommonCameraStyles.icons } 
            >
                <View style={CommonCameraStyles.subHeader} >
                    <Icon 
                        icon={ ICONS_DEFINITIONS.FLASH } 
                        void 
                        style={ CameraStyles.icons } 
                        onPress = { () => {
                            console.log( isFlash )
                            setFlash( 
                                isFlash === RNCamera.Constants.FlashMode.on ? 
                                    RNCamera.Constants.FlashMode.off
                                    : RNCamera.Constants.FlashMode.on 
                            )
                        } }
                    />
                    <Icon 
                        icon={ ICONS_DEFINITIONS.SPIN } 
                        void 
                        style={ CameraStyles.icons } 
                        onPress = { () => {
                            console.log( cameraDirection )
                            setCameraDirection( 
                                cameraDirection === RNCamera.Constants.Type.back ? 
                                    RNCamera.Constants.Type.front
                                    : RNCamera.Constants.Type.back
                            )
                        } }
                    />
                    <Icon 
                        icon={ ICONS_DEFINITIONS.WHITE_BALANCE } 
                        void 
                        style={ CameraStyles.icons } 
                        onPress = { () => {
                            console.log( whiteBalance )
                            setWhiteBalance( 
                                whiteBalance === RNCamera.Constants.WhiteBalance.auto ? 
                                    RNCamera.Constants.WhiteBalance.cloudy
                                : whiteBalance === RNCamera.Constants.WhiteBalance.cloudy ? 
                                    RNCamera.Constants.WhiteBalance.fluorescent 
                                : whiteBalance === RNCamera.Constants.WhiteBalance.fluorescent ?
                                    RNCamera.Constants.WhiteBalance.incandescent
                                : whiteBalance === RNCamera.Constants.WhiteBalance.incandescent ?
                                    RNCamera.Constants.WhiteBalance.shadow
                                : whiteBalance === RNCamera.Constants.WhiteBalance.shadow ? 
                                    RNCamera.Constants.WhiteBalance.sunny
                                : RNCamera.Constants.WhiteBalance.auto
                            )
                        } }
                    />
                </View>
            </Header>
            <RNCamera
                style = { CameraStyles.preview }
                type={ cameraDirection }
                flashMode={ isFlash }
                autoFocus = { RNCamera.Constants.AutoFocus.on }
                maxZoom = {1}
                whiteBalance = { whiteBalance }
                captureAudio
                androidCameraPermissionOptions={{
                    title: 'Permission to use camera',
                    message: 'We need your permission to use your camera',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                androidRecordAudioPermissionOptions={{
                    title: 'Permission to use audio recording',
                    message: 'We need your permission to use your audio',
                    buttonPositive: 'Ok',
                    buttonNegative: 'Cancel',
                }}
                
            >
                {({ camera, status, recordAudioPermissionStatus }) => {
                    if (status !== 'READY') return <PendingView />;
                    return (
                    <View style={{ flex: 0, flexDirection: 'row', justifyContent: 'center' }}>
                        <Icon
                            icon = { ICONS_DEFINITIONS.CAMERA }
                            onPress={
                                () => this.takePicture(camera)
                            } 
                            void
                            style={CameraStyles.capture} 
                        />
                        <Icon
                            icon = { ICONS_DEFINITIONS.RECORD }
                            void
                            style={CameraStyles.capture} 
                        />
                    </View>
                    );
                }}
            </RNCamera>
        </View>
    )
}
export default CameraView