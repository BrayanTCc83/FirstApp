//React dependencies
import React, { useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'

//Global Views
import ViewContainer from "../components/viewContainer"

//Components import
import { ProgressBar } from 'react-native-paper'
import TextView from '../components/textView'

//Provider
import { useDesignContext } from "../provider/designProvider"
import Icon from '../components/icon'
import { useUserContext } from '../provider/userProvider'
import { useNavigation } from '@react-navigation/core'
import { SCREEN_VIEWS, TEXT_DEFINITIONS } from '../../global/definitions'

const Load = (props) =>{
    //Read data from context provider
    const { isFileAuthRead, isUser, readUserFile } = useUserContext()
    const { width, height, grayFontColor, fontColor, isDesignFileRead } = useDesignContext()
    const [ progress, setProgress ] = useState(0)
    const [ thisUser, setThisUser ] = useState(false)
    const [ status, setStatus ] = useState('Carga en curso')
    const navigation = useNavigation()
    //Styles definition
    const loadPageStyle = StyleSheet.create({
      textContainer:{
        width : width - width /4,
        left: width/8,
        top: height/5,
        height: height
      },
      load : {
        top: -10,
        backgroundColor: grayFontColor
      },
      infoText : {
        marginBottom : 50
      }
    })
    useEffect(()=>{
      ! isFileAuthRead ? readUserFile() : loadData()
    }, [ isUser, isFileAuthRead ] ) 
    const loadData = () => {
      setThisUser( isFileAuthRead )
      if( isFileAuthRead ){
        setStatus("Cargando información de usuario")
        setProgress(16)
          if( isDesignFileRead ){
            setStatus("Cargando diseño de aplicación")
            setProgress(30)
              if( true === true ){
                setStatus("Cargando lenguaje")
                setProgress(60)
                  if( true === true ){
                    setStatus("Cargando configuraciones")
                    setProgress(75)
                      if( true === true ){
                        setStatus("Solicitando permisos")
                        setProgress(90)
                          if( true === true ){
                            setStatus("Conectando con servicios")
                            setProgress(100)
                          }
                      }
                  }
              }
          }
      }
    }
    return (
        <ViewContainer>
          <Icon/>
          <View style={loadPageStyle.textContainer} onLayout={ loadData } >
            <TextView textSize = { TEXT_DEFINITIONS.TEXT_SIZE_1 } >NOMBRE DE LA APP</TextView>
            <ProgressBar 
              progress={progress}
              style={loadPageStyle.load} 
              color={fontColor} 
            />
            <TextView textSize={4} style={ loadPageStyle.infoText } >{status}</TextView>
            <TextView textSize={5} thin align='right' >Brayan Téllez Cruz</TextView>
            <TextView textSize={5} thin align='right' >Christian Roberto Gazpar Pérez</TextView>
            {
              progress === 100 ?
                thisUser ? 
                  isUser ?
                    navigation.navigate( SCREEN_VIEWS.HOME_VIEW )
                    :
                    navigation.navigate( SCREEN_VIEWS.LOGIN_VIEW )
                  :null
              :null
            }
          </View>
        </ViewContainer>
    )
};
export default Load