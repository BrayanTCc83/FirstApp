import React, { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { Dimensions } from 'react-native'

//Variables
import Variables from "../../../global/globalStructure.json"

//Definitions
import { STYLE_DEFINITIONS, FILES_NAMES } from "../../../global/definitions"
import useReactNativeFile from '../../hooks/useReactFileFile'

export const DesignContext = createContext()

export const DesignProvider = (props) => {
    const ReactFile = useReactNativeFile()
    const [ isDesignFileRead, setFileRead ] = useState(false)

    const [theme, setTheme] = useState( Variables.vars.colors.lightTheme )
    const [strTheme, setStrTheme] = useState( STYLE_DEFINITIONS.LIGHT_MODE )
    const [mainColor, setMainColor] = useState( Variables.vars.colors.greenStyle.main )
    const [secondaryColor, setSecondaryColor] = useState( Variables.vars.colors.greenStyle.secondary )
    const [fontColor, setFontColor] = useState( Variables.vars.fontColors.black )
    const [strSchema, setStrSchema] = useState( STYLE_DEFINITIONS.GREEN_THEME )

    const [update, setUpdate] = useState(true)

    const getConfigTheme=()=>{
        ReactFile.fileExists( FILES_NAMES.CONFIG ).then(
            async (result) => {
                await setStrTheme( result['strTheme'] )
                await setFontColor( result['fontColor'] )
                await setTheme( result['theme'] )
                await setMainColor( result['mainColor'] )
                await setSecondaryColor( result['secondaryColor'] )
                await setStrSchema( result['strSchema'] )
                await setUpdate(false)
                await setFileRead(true)
            }
        ).catch(async()=>{
            await setStrTheme( STYLE_DEFINITIONS.LIGHT_MODE )
            await setFontColor( Variables.vars.fontColors.black )
            await setTheme( Variables.vars.colors.lightTheme )
            await setMainColor( Variables.vars.colors.greenStyle.main )
            await setSecondaryColor( Variables.vars.colors.greenStyle.secondary )
            await setStrSchema( STYLE_DEFINITIONS.GREEN_THEME )
            await setUpdate(false)
            await setFileRead(true)
        })
    }
    const changeTheme = async( newTheme ) => {
        var structure = {
            strTheme : newTheme,
            theme : newTheme === STYLE_DEFINITIONS.LIGHT_MODE ?
                Variables.vars.colors.lightTheme :
                Variables.vars.colors.darkTheme,
            fontColor: newTheme === STYLE_DEFINITIONS.LIGHT_MODE ?
                Variables.vars.fontColors.black :
                Variables.vars.fontColors.white
        }
        await ReactFile.fileExists( FILES_NAMES.CONFIG ).then(
            () => ReactFile.editFile( FILES_NAMES.CONFIG, structure )
        ).catch(
            () => ReactFile.writeFile( FILES_NAMES.CONFIG, structure )
        )
        await setUpdate(true)
    }
    const changeSchemaColor = async( newSchema ) => {
        var structure = {
            strSchema : newSchema,
            mainColor : newSchema === STYLE_DEFINITIONS.GREEN_THEME ?
                Variables.vars.colors.greenStyle.main :
                Variables.vars.colors.redStyle.main,
            secondaryColor: newSchema === STYLE_DEFINITIONS.GREEN_THEME ?
                Variables.vars.colors.greenStyle.secondary :
                Variables.vars.colors.redStyle.secondary
        }
        await ReactFile.fileExists( FILES_NAMES.CONFIG ).then(
            () => ReactFile.editFile( FILES_NAMES.CONFIG, structure )
        ).catch(
            () => ReactFile.writeFile( FILES_NAMES.CONFIG, structure )
        )
        await setUpdate(true)
    }   

    useEffect(()=>{
        getConfigTheme()
    }, [ update ])

    const grayFontColor = Variables.vars.fontColors.gray

    const whiteColor = Variables.vars.fontColors.white

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
            whiteColor,
            strSchema,
            isDesignFileRead
        })
    }, [ theme, width, height, secondaryColor, isDesignFileRead ] );
    return <DesignContext.Provider value={value} {...props} />
};

export const useDesignContext = () => {
    const context = useContext(DesignContext);
    if(!context){
        throw new Error("No es posible acceder al contexto de la aplicación");
    }
    return context
};