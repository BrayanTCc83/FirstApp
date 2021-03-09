//React dependencies
import React from 'react'
import { View, Text, StyleSheet, ProgressBarAndroidBase } from 'react-native'

//ProgressBar
import { ProgressBar } from 'react-native-paper'
import TextView from '../components/text'

//Provider
import { useAplicationContext } from "../provider"

const Load = () =>{
    const theme = useAplicationContext().appTheme.theme
    const style = useAplicationContext().appTheme.style
    const width = useAplicationContext().width
    const height = useAplicationContext().height
    const fontColor = useAplicationContext().fontColor

    const loadPageStyle = StyleSheet.create({
      view : {
        backgroundColor : theme,
        width : width,
        height : height,
      },
      iconOutside : {
        top : height/6,
        left : width/4,
        backgroundColor : style.main,
        width : width/2,
        height : width/2,
        borderRadius : width/4
      },
      iconInside : {
        backgroundColor : style.secondary,
        width : width/2.5,
        height : width/2.5,
        borderRadius : width/4,
        top: width/20,
        left: width/20
      },
      textContainer:{
        width : width - width /4,
        left: width/8,
        top: width/3
      },
      load : {
        top: -30,
        backgroundColor: fontColor.gray
      }
    })  

    return (
        <View style={loadPageStyle.view} >
          <View style={loadPageStyle.iconOutside} >
            <View style={loadPageStyle.iconInside} ></View>
          </View>
          <View style={loadPageStyle.textContainer} >
            <TextView>NOMBRE DE LA APP</TextView>
            <ProgressBar progress={0.5} style={loadPageStyle.load} color={fontColor.black} >
            </ProgressBar>
            <TextView type={5} >Brayan Téllez Cruz</TextView>
            <TextView type={5} >Christian Roberto Gazpar Pérez</TextView>
          </View>
        </View>
    )
};
export default Load