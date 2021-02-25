import React from 'react'
import {
    View,
    Text,
    StyleSheet
} from 'react-native'
const Targeta = (props) => {
    return(
        <View style={estilos.contenedor} >
            {props.name?<Text style={estilos.titulo} >{props.name}</Text>:null}
        </View>
    )
}
export default Targeta

const estilos = StyleSheet.create({
    contenedor:{
        border:'2px black solid'
    },
    titulo:{
        border:'2px black solid'
    }
})