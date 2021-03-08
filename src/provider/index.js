import React, { createContext, useContext, useMemo, useState } from 'react';
import { Dimensions } from 'react-native'
import Variables from "../../global/globalStructure.json"

const AplicationContext = createContext();

export const AplicationProvider = (props) => {
    const [appTheme, setAppTheme] = useState({
        theme:Variables.vars.colors.lightTheme, 
        style:Variables.vars.colors.greenStyle
    });

    const width=Dimensions.get('window').width
    
    const height=Dimensions.get('window').height

    const modifyTheme = (newTheme) => {
        let prevTheme=appTheme
        if(newTheme.theme==="light"){
            prevTheme.theme=Variables.vars.colors.lightTheme
        }else{
            prevTheme.theme=Variables.vars.colors.darkTheme
        }
        if(newTheme.style==="green"){
            prevTheme.theme=Variables.vars.colors.greenStyle
        }else{
            prevTheme.theme=Variables.vars.colors.redStyle
        }
        setAppTheme(prevTheme)
    };

    const value = useMemo(() => {
        return ({
            appTheme,
            modifyTheme,
            width,
            height
        })
    }, [ appTheme, width, height ]);

    return <AplicationContext.Provider value={value} {...props} />
};

export const useAplicationContext = () => {
    const context = useContext(AplicationContext);
    if(!context){
        throw new Error("No es posible acceder al contexto de la aplicación");
    }
    return context
};