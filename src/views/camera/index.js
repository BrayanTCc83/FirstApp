import React from 'react'
import { View, StyleSheet, TouchableOpacity, Text, ImageStore } from 'react-native'
import { PermissionsAndroid } from 'react-native'
import Icon from "../../components/icon"
import { ICONS_DEFINITIONS, SCREEN_VIEWS } from "../../../global/definitions"
import { RNCamera, Barcode } from 'react-native-camera';
import { useNavigation } from '@react-navigation/core';
import * as ReactNativeFile from 'react-native-fs'
const PendingView = () => (
  <View
    style={{
      flex: 1,
      backgroundColor: 'lightgreen',
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    <Text>Waiting</Text>
  </View>
);
const CameraView = (props) =>{
    const navigation = useNavigation()
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
                console.log(val)
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
        console.log(Object.keys(data), pictureRoute[pictureRoute.length-1] );
    };
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
        capture: {
          flex: 0,
          backgroundColor: '#fff3',
          paddingHorizontal : 2.5,
          borderRadius: 20,
          alignSelf: 'center',
          margin: 20,
          zIndex : 1
        },
        goBack : {
            position : 'absolute',
            top : 10,
            left : 10,
            zIndex : 2,
            backgroundColor : '#fff3',
            borderRadius : 20
        }
    })
    return (
        <View style = { CameraStyles.container } >
            <Icon 
                icon={ ICONS_DEFINITIONS.GO_BACK_ICON } 
                void 
                style={ CameraStyles.goBack } 
                onPress = { () => {
                    navigation.goBack()
                } }
            />
            <RNCamera
                style = { CameraStyles.preview }
                type={RNCamera.Constants.Type.back}
                flashMode={RNCamera.Constants.FlashMode.on}
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
                    </View>
                    );
                }}
            </RNCamera>
        </View>
    )
}
export default CameraView