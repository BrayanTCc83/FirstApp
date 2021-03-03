import React, { createContext, useContext, useMemo, useState } from 'react';
const AplicationContext = createContext();

export const AplicationProvider = (props) => {
    const [appTheme, setAppTheme] = useState({
        theme:'light', 
        style:'green'
    });

    const modifyTheme = (newTheme) => {
        setAppTheme(newTheme)
    };

    const value = useMemo(() => {
        return ({
            appTheme,
            modifyTheme
        })
    },[appTheme]);

    return <AplicationContext.Provider value={value} {...props} />
};

export const useAplicationContext = () => {
    const context = useContext(AplicationContext);
    if(!context){
        throw new Error("No es posible acceder al contexto de la aplicación");
    }
};