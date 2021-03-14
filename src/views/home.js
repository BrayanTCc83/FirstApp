import React from 'react'
import {ViewContent, Icon, Text, Button, Input, } from "../components/viewContent"
import { View, Text } from 'react-native'
const Home = () =>{
    return (
      <ViewContent style = {EstiloPE.maquetado}>
      <ViewContent>
          <TouchableOpacity onPress = {()=>alert('Estamos trabajando')}></TouchableOpacity>
          <Text>Nombre App</Text>
          <TouchableOpacity></TouchableOpacity>
      </ViewContent>
      
      <ScrollView>
        <ViewContent style = {EstiloE.post}>
            <Icon></Icon>
            <Text></Text>
            <Text></Text>
            <ViewContent></ViewContent>
        </ViewContent>
      </ScrollView>

      <Touchable style = {EstiloE.btnPost}>
        <Icon></Icon>
      </Touchable>
  </ViewContent>
    )
};
export default Home

const EstiloE = StyleSheet.create({
  maquetado: {
      display:"flex",
      flexDirection:"row"
  },
  btnPost:{
      position:"absolute"
  },
  post:{
      position:"relative"
  }
})