import React from "react"
import {View, Text, StyleSheet, ScrollView, Button, Pressable, Touchable, ImageBackground, TouchableOpacity} from "react-native"

const PantallaPrincipal = ()=>{
    return(
        <View style = {EstiloPP.maquetado}>
            <View>
                <TouchableOpacity onPress = {()=>alert('Estamos trabajando')}></TouchableOpacity>
                <Text>Nombre App</Text>
                <TouchableOpacity></TouchableOpacity>
            </View>
            <ScrollView>

            </ScrollView>
            <Touchable style = {EstiloPP.btnPost}>

            </Touchable>
        </View>
    )
}

const EstiloPP = StyleSheet.create({
    maquetado: {
        display:"flex",
        flexDirection:"row"
    },
    btnPost:{
        position:"absolute"
    }
})