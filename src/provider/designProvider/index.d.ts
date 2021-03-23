import { DesignProvider, useDesignContext } from ".";

/**
 * This method must be used inside a React.Component | React.Element, for its use is necessary
 * contain the element in a DesignProvider
 * 
 * @returns {Object} The design context for your app
 */
export function useDesignContext () : {
    theme : string,
    strTheme : string,
    mainColor : string,
    secondaryColor : string,
    fontSizes : number,
    fontColor : string,
    grayFontColor : string,
    whiteColor : string,
    width : string,
    height : string,
    changeTheme : (newTheme : string) => void,
    changeSchemaColor : (newSchema : string) => void
}

/**
 * The design context provider is necessary to access details commons about the style 
 * for the app, like theme (color schema), mode (white or dark background) and fonts styles 
 * (size, color, family) also width and height of the screen.
 * If you try to use that resources out the context provider, you can receive an error.
 *
 * @param {Object} props Default configuration for the app, theme and mode 
 * @returns {React.Component} React provider for app desing
 */
export function DesignProvider ( props : { theme ?: string , mode ?: string } ) : JSX.Element