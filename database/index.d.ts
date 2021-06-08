import { types } from "@babel/core"
import DatabaseStructure from "./database-structure.json"
import DatabaseFunctions from "./index"

/**
 * This function return a whole of methods to do functions with database, this structure contains the basics operations and can transform the results for its use, receive as paramether a reference, this must be a string
 * @param {string} ref This is a param that show 
 */
export default function DatabaseFunctions ( ref : 'users' | 'posts' | 'chats' ) : {
    /**
     * This method return the types for each child of the reference
     */
    getTypes : () => Object
    /**
     * This method return the keys for access to each element of the reference
     */
    getKeys : () => Array<string>
    /**
     * This method return a whole with the values of element, this object have each value for the element
     */
    getValues : ( key ?: string, callback ?: ( prop : string, val : any, index : number ) => void ) => Promise<boolean>
    /**
     * This method be able to know a specific value
     * @param {string} accessKey The key of element that you wanna have a result
     * @param {string} propName Contains the name of the value that you wanna know
     * @param {function} callback A function whit the process to do with the obtained value
     */
    getOneValue : ( accessKey : string, propName : string, callback : ( result : string | number | Array<string> ) => void ) => void
    /**
     * This method find a coincidence between a local value and one of database, when find it use the callback
     * to realice a process, if don't found any coincidence, this method won't do anything
     * @param {string} propName The name of the property to compare
     * @param {string} valueToFind Contains the value you try to compare with database
     * @param {function} callback A function whit the process to do with the obtained value
     */
    findCoincidence : ( propName : string, valueToFind : string, callback : ( valueObtained : string ) => void ) => void
    /**
     * This method can change the reference for the function, doing possible use other data from database
     * @param {string} ref A reference of a section od database
     */
    changeReference : ( ref : 'users' | 'posts' | 'chats', key ?: string ) => void
    /**
     * This method change the data from database, is used for change all structure or a whole of data
     * @param {Object} newData The structured data to modify
     * @returns {boolean} If the process was sussesful return true, else return false
     */
    updateData : ( newData : { [propName : string] : string | number | Array<string> } ) => boolean
    /**
     * This method add a new element to database, is used for add a new document
     * @param {Object} data The structured data for create the object
     * @returns {boolean} If the process was sussesful return true, else return false
     */
    pushElement : ( data : { [propname : string] : string | number | Array<string> }, callback ?: ()=> void ) => boolean
    /**
     * This const contains the reference used
     */
    reference : string
}
export function Storage( ref : 'users' | 'posts' | 'chats' , key ?: string ):{
    uploadOnceFile(
        fileUri : string,
        callback : ( fileUri : string, index : number, resolve : Promise<boolean> ) => void,
        i ?: number,
        mI ?: number
    )
    uploadFiles( 
        filesUris : Array<string>, 
        callback ?: ( fileUri : string, index : number, resolve : Promise<boolean> ) => void 
    ) : void
    uploadVideos( 
        videoFile : Array<{ uri : string, name : string }>,
        callback ?: ( fileUri : string, index : number, resolve : Promise<boolean> ) => void
    ) : void
}