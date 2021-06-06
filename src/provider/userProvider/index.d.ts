import React from "react"
import { UserProvider, UserContext, useUserContext } from "./index"
function UserProvider ( props : { children : JSX.ElementChildrenAttribute, token : string } ) : JSX.Element
function UserContext () : React.Context
function useUserContext () : {
    userData : { [propName : string] : string | number | Array<string> } ,
    isUser : boolean,
    isFileAuthRead : boolean,
    accessKey : string,
    register : ( newUser : {[propName : string] : string | number | Array<string> } ) => void,
    login : ( user : string, password : string ) => void,
    logout : () => void,
    readUserFile : () => Promise
}
export {
    UserContext,
    UserProvider,
    useUserContext
}