//React dependencies
import React from 'react'
import { View, Text, StyleSheet, ProgressBarAndroidBase } from 'react-native'

//Global Views
import ViewContainer from "../components/viewContainer"

//Components import
import { ProgressBar } from 'react-native-paper'
import TextView from '../components/text'

//Provider
import { useDesignContext } from "../provider/designProvider"
import Icon from '../components/icon'

const Load = () =>{
    //Read data from context provider
    const { width, height, grayFontColor, fontColor } = useDesignContext()
    //Styles definition
    const loadPageStyle = StyleSheet.create({
      textContainer:{
        width : width - width /4,
        left: width/8,
        top: height/5,
        height: height/2
      },
      load : {
        top: -30,
        backgroundColor: grayFontColor
      }
    })  
    //Return component view
    return (
        <ViewContainer>
          <Icon/>
          <View style={loadPageStyle.textContainer} >
            <TextView>NOMBRE DE LA APP</TextView>
            <ProgressBar progress={0.5} style={loadPageStyle.load} color={fontColor} >
            </ProgressBar>
            <TextView type={5} >Brayan Téllez Cruz</TextView>
            <TextView type={5} >Christian Roberto Gazpar Pérez</TextView>
          </View>
        </ViewContainer>
    )
};
export default Load