import { types } from "@babel/core"
import { FirebaseDatabaseTypes } from "@react-native-firebase/database"
import DatabaseStructure from "./database-structure.json"
import DatabaseFunctions, { getElements } from "./index"
/**
 * This function return a whole of methods to do functions with database, this structure contains the basics operations and can transform the results for its use, receive as paramether a reference, this must be a string
 * @param {string} ref This is a param that show 
 */
export default function DatabaseFunctions ( ref : 'users' | 'posts' | 'chats' ) : {
    /**
     * This method return the types for each child of the reference
     */
    getTypes : () => Array<types>
    /**
     * 
     */
    getKeys : () => Array<string>
    getValues : () => Object
}