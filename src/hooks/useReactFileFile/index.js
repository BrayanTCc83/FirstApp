import React from 'react'
import * as ReactNativeFile from 'react-native-fs'

const useReactNativeFile = ( encode ) => {

    let encodeSystem = encode ? encode : 'utf8'
    let path = ReactNativeFile.DocumentDirectoryPath + '/'

    const writeFile = ( fileName, content ) => {
        console.log(content)
        ReactNativeFile.writeFile( (path + fileName ), JSON.stringify(content), encodeSystem )
        .then((success) => {
            console.log('FILE SAVED')
            return true
        })
        .catch((error) => {
            new Error (error.message)
            return false
        }) 
    }

    const readFile = async ( fileName ) => {
        return ReactNativeFile.readFile( ( path + fileName ) , encodeSystem )
            .then((result)=>
                JSON.parse(result)
            )
    }

    const editFile = async ( fileName, values) => {
        readFile(fileName).then((files)=>{
            let fileData=Object.assign(files, values)
            writeFile( fileName, fileData )
        })
    }
 
    const editPartFile = async ( fileName, prop, value ) => {
        let fileData = JSON.parse( readFile(fileName) )
        fileData[prop] = value
        await writeFile( fileName, fileData )
    }
 
    const fileExists = async ( fileName ) => {
        let result = (await ReactNativeFile.exists( path+fileName ).then((val)=>val)).valueOf()
        return new Promise( (resolve, reject)=>{
            result ? resolve( readFile(fileName) ) : reject("File not found")
        } )
    }

    return {
        readFile,
        writeFile,
        fileExists,
        editFile
    }
}
export default useReactNativeFile