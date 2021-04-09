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
    getValues : () => Object
    /**
     * This method be able to know a specific value
     * @param {string} value Contains the name of the value that you wanna know
     * @returns {string | Array<string> | number} Return the value of the data in the database
     */
    getOneValue : ( value : string ) => string | Array<string> | number
    /**
     * This method can change the reference for the function, doing possible use other data from database
     * @param {string} ref 
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
    pushElement : ( data : { [propname : string] : string | number | Array<string> } ) => boolean
    /**
     * This const contains the reference used
     */
    reference : string
}