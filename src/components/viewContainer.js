//React import
import React, { Fragment, useState, useEffect } from 'react'
import { StyleSheet, View, ScrollView } from 'react-native'

//Context Provider
import { useDesignContext } from "../provider/designProvider"

//Global Styles definition
const ViewContainer = (props) =>{
    //Read data from context
    const { width, height, theme } = useDesignContext()
    //Styles definition
    const globalViews = StyleSheet.create({
        view : {
            backgroundColor : theme,
            width : width,
            height : height,
            ...props.style
        }
    })
    //Return component view
    return (
        <Fragment>
            <ScrollView 
                scrollEnabled={props.scroll?props.scroll:false} 
                style={globalViews.view}
            >
                {props.children}
            </ScrollView>
        </Fragment>
    )
}

//Components export
export default ViewContainer