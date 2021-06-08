import React, { useEffect, useState } from 'react'
import ViewContent from "../components/viewContainer"
import Icon from "../components/icon"
import TextView from "../components/textView"
import { StyleSheet, View } from 'react-native'
import { ICONS_DEFINITIONS, SCREEN_VIEWS } from "../../global/definitions"
import Post from '../components/post'
import Header from '../components/header'

import { useDesignContext } from '../provider/designProvider'
import { useUserContext } from '../provider/userProvider'

import Database from '../../database'

const Home = (props) =>{
  const { userData } = useUserContext()
  const { width, height, mainColor } = useDesignContext()
  const databaseRef = Database('posts')
  const [ postsData, setPostsData ] = useState([])
  const [ isUpdate, setUpdate ] = useState( false )
  const [ reload, setReload ] = useState( false )
  const EstiloE = StyleSheet.create({ 
    btnPost:{
      position:"absolute",
      left : width - 85,
      top: height - 115,
      zIndex : 1
    },
    postContainer:{
      height : height - 94,
      display : 'flex'
    }
  })
  const loadPostsData = () => {
    let currentPosts = new Array()
    databaseRef.getValues( '', ( key, val, index )=>{
      if( key !== 'key' ){
        setUpdate( false )
        currentPosts.push( { id : key ,data : val} )
        setPostsData( currentPosts )
        setUpdate( true )
      }
    } )
    createTimer()
  }
  const createTimer = () => {
    setTimeout( () => {
      setReload( true )
    }, 1000 )
  }
  useEffect( ()=> loadPostsData() , [] )
  return (
  <ViewContent>
    <Header
      icons={
        [
          {
            src: ICONS_DEFINITIONS.CONFIGURATION_ICON,   
            action:() => props.navigation.navigate(SCREEN_VIEWS.CONFIGURATION_VIEW)
          },
          {
            src: ICONS_DEFINITIONS.CHAT_MESSAGE_ICON,
            action: () => props.navigation.navigate(SCREEN_VIEWS.CHAT_LIST_VIEW)
          }
        ]
      }
      text = {"App name"}
      textOptions ={{align:'center',centering:true}}
      notBack
    />
    <ViewContent scroll style = {EstiloE.postContainer}>
      {
        isUpdate === true ? 
          postsData.map((postData) => 
            <Post id={ postData.key } data = { postData.data } isUpdate = { reload } />
          )
        :null
      }
    </ViewContent>
    <Icon 
      icon={ICONS_DEFINITIONS.NEW_POST_ICON}
      style={ EstiloE.btnPost }
      send
      onPress={
        () => props.navigation.navigate(SCREEN_VIEWS.POST_CREATE)
      }
    />
  </ViewContent>
  )
};
export default Home