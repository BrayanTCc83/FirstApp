import React, { createContext, useContext, useMemo, useState } from 'react'
import { Dimensions } from 'react-native'

//Variables
import Variables from "../../../global/globalStructure.json"

//Definitions
import { STYLE_DEFINITIONS } from "../../../global/definitions"

export const DesignContext = createContext()

export const DesignProvider = (props) => {
    const [theme, setTheme] = useState( Variables.vars.colors.lightTheme )
    const [strTheme, setStrTheme] = useState( STYLE_DEFINITIONS.LIGHT_MODE )
    const [mainColor, setMainColor] = useState( Variables.vars.colors.greenStyle.main )
    const [secondaryColor, setSecondaryColor] = useState( Variables.vars.colors.greenStyle.secondary )
    const [fontColor, setFontColor] = useState( Variables.vars.fontColors.black )
    const grayFontColor = Variables.vars.fontColors.gray
    const whiteColor = Variables.vars.fontColors.white
    
    const changeTheme = ( newTheme ) => {
        setStrTheme( newTheme )
        setTheme( newTheme === STYLE_DEFINITIONS.LIGHT_MODE ?
            Variables.vars.colors.lightTheme :
            Variables.vars.colors.darkTheme
        )
        setFontColor( newTheme === STYLE_DEFINITIONS.LIGHT_MODE ?
            Variables.vars.fontColors.black :
            Variables.vars.fontColors.white
        )
    }

    const changeSchemaColor = ( newSchema ) => {
        setMainColor( newSchema === STYLE_DEFINITIONS.GREEN_THEME ?
            Variables.vars.colors.greenStyle.main :
            Variables.vars.colors.redStyle.main
        )
        setSecondaryColor( newSchema === STYLE_DEFINITIONS.GREEN_THEME ?
            Variables.vars.colors.greenStyle.secondary :
            Variables.vars.colors.redStyle.secondary
        )
    }   

    const width = Dimensions.get('window').width
    
    const height = Dimensions.get('window').height

    const fontSizes = Variables.vars.fontSizes

    const value = useMemo(() => {
        return ({
            theme,
            mainColor,
            secondaryColor,
            strTheme,
            changeTheme,
            changeSchemaColor,
            width,
            height,
            fontSizes,
            fontColor,
            grayFontColor,
            whiteColor
        })
    }, [ theme, width, height, secondaryColor ] );
    return <DesignContext.Provider value={value} {...props} />
};

export const useDesignContext = () => {
    const context = useContext(DesignContext);
    if(!context){
        throw new Error("No es posible acceder al contexto de la aplicación");
    }
    return context
};