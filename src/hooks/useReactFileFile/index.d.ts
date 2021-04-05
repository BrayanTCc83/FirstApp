import useReactNativeFile, {readFile} from "./index"
/**
 * This hook is used for work with storaged files, utils for the app
 * 
 * @returns {Object} Returns a whole of functions usables for read, edit or delete files, encoded on utf8 
 */
export default function useReactNativeFile ( encode ?: string ) : {
    /**
     * @param {string} fileName
     * @param {string | JSON} content
     * @returns {Object} Provides a function to write files encoded in utf8
     */
    writeFile : ( fileName:string, content : string | JSON ) => boolean
    /**
     * @param {string} fileName
     * @param {Array<string>} parts 
     * @returns {Object} Provides a function to get the result content of file written, if was save as a string
     *  or an JSON file
     */
    readFile : ( fileName:string ) => Promise<JSON>
    editFile : ( fileName:string, values:JSON | string ) => Promise
    editFilePart : ( fileName : string, prop : string, value : string ) => Promise 
    /**
     * @param {string} fileName
     */
    fileExists : ( fileName : string ) => Promise<boolean>
}
export {
    readFile
}