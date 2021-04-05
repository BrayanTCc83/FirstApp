import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ICONS_DEFINITIONS, TEXT_DEFINITIONS, SCREEN_VIEWS } from '../../global/definitions';
import Icon from '../components/icon';
import Input from '../components/input';
import Message from '../components/message';
import TextView from '../components/textView';
import ViewContainer from '../components/viewContainer';
import { useDesignContext } from '../provider/designProvider';
import Header from "../components/header"
const UserProfile = (props) =>{
  const { mainColor, width, height } = useDesignContext()
  const navigation = useNavigation()
  const ProfileStyles = StyleSheet.create({
    header : {
      height : 80,
      borderBottomColor: mainColor,
      borderBottomWidth:2,
      display:'flex',
      flexDirection:'row'
    },
    icon : {
      top : 5
    },
    user : {
      width: width / 2,
      height : width / 2,
      borderRadius : width/2,
      left : width / 6,
      margin : 10
    },
    userInside : {
      width: width / 2,
      height : width / 2,
      borderRadius : width/2
    },
    viewer : {
      height : height - 100 ,
      paddingHorizontal : width / 12
    },
    separator : {
      borderColor : mainColor,
      marginVertical : 10,
      borderBottomWidth : 2
    }
  })
  return (
    <ViewContainer >
      <Header/>
      <ViewContainer style={ ProfileStyles.viewer } scroll>
        <Icon 
          icon={ICONS_DEFINITIONS.USER_ICON } 
          style={ ProfileStyles.user }
          styleInside = { ProfileStyles.userInside }
        />
        <TextView textSize={TEXT_DEFINITIONS.TEXT_SIZE_2} > {props.userName?props.userName : 'User Name'} </TextView>
        <TextView textSize={TEXT_DEFINITIONS.TEXT_SIZE_3} thin align='left' > {props.userName?props.userName : 'Email'} </TextView>
        <TextView textSize={TEXT_DEFINITIONS.TEXT_SIZE_3} thin align='left' > {props.userName?props.userName : 'Affiliation date'} </TextView>
        <TextView textSize={TEXT_DEFINITIONS.TEXT_SIZE_3} thin align='left' > {props.userName?props.userName : 'Sex'} </TextView>
        <TextView textSize={TEXT_DEFINITIONS.TEXT_SIZE_3} thin align='left' > {props.userName?props.userName : 'Age'} </TextView>
        <View style={ ProfileStyles.separator } />
        <Icon
          icon = { ICONS_DEFINITIONS.IMAGE_ICON }
          void 
        />
        <Icon
          icon = { ICONS_DEFINITIONS.PRIVACITY_ICON }
          void 
        />
        <Icon
          icon = { ICONS_DEFINITIONS.UNDEFINED_ICON }
          void 
        />
      </ViewContainer>
    </ViewContainer>
  )
};
export default UserProfile