import { useHandlerData, useHandlerPassword } from "./index"
function useHandlerData ( initialValue ?: Object< string, string|number|Array<string>> ) : [ 
    objectData : Object< string, string|number|Array<string>>, 
    updateData : ( value : string , hashKey ?: string ) => void,
    cleanData : () => void
]
function useHandlerPassword ( updateData : ( 
    value : string , 
    key : string ) => void , key : string 
) :  ( value : string , key : string ) => void
export {
    useHandlerData,
    useHandlerPassword
}