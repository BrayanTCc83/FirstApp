//React import
import React, { Fragment } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

//Context Provider
import {useAplicationContext} from "../provider"

//Global Styles definition
const ViewContainer = (props) =>{
    //Read data from context
    const width = useAplicationContext().width
    const height = useAplicationContext().height
    const theme = useAplicationContext().appTheme.theme
    //Styles definition
    const globalViews = StyleSheet.create({
        view : {
            backgroundColor : theme,
            width : width,
            height : height,
        }
    })
    //Return component view
    return (
        <Fragment>
            <ScrollView scrollEnabled={props.scroll?props.scroll:false} >
                <View style={globalViews.view} >
                    {props.children}
                </View>
            </ScrollView>
        </Fragment>
    )
}

//Components export
export default ViewContainer