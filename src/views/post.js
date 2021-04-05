import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ICONS_DEFINITIONS, TEXT_DEFINITIONS, SCREEN_VIEWS } from '../../global/definitions';
import Icon from '../components/icon';
import Input from '../components/input';
import Header from '../components/header';
import ViewContainer from '../components/viewContainer';
import { useDesignContext } from '../provider/designProvider';
const Post = (props) =>{
  const { mainColor, width, height } = useDesignContext()
  const navigation = useNavigation()
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
    }
  })
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
      <View style={ PostStyles.footer } >
        <Icon 
          icon={ICONS_DEFINITIONS.CAMERA} 
          void 
          onPress = { ()=>alert('Opening camera') }
        />
        <Icon 
          icon={ICONS_DEFINITIONS.IMAGE_ICON} 
          void 
          onPress = { ()=>alert('Opening galery') }
        />
      </View>
    </ViewContainer>
  )
};
export default Post