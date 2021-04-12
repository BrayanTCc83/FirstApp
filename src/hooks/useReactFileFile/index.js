import { PermissionsAndroid } from 'react-native'
import * as ReactNativeFile from 'react-native-fs'

const useReactNativeFile = ( encode ) => {
    const permissions = async()=>{
        try {
            const permissionWrite = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
            await PermissionsAndroid.request(permissionWrite);
            Promise.resolve();
            const permissionRead = PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE;
            await PermissionsAndroid.request(permissionRead);
            Promise.resolve();
        } catch (error) {
            Promise.reject(error);
        }
    }
    permissions()
    let encodeSystem = encode ? encode : 'utf8'
    let path = ReactNativeFile.DocumentDirectoryPath + '/'

    const writeFile = ( fileName, content, callback ) => {
        return ReactNativeFile.writeFile( (path + fileName ), JSON.stringify(content), encodeSystem )
        .then((success) => {
            console.log('FILE SAVED')
            callback ? callback (success) : ()=>{}
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
        writeFile( fileName, fileData )
    }
 
    const fileExists = async ( fileName ) => {
        return await ReactNativeFile.exists( path+fileName )
            .then((val)=>
                readFile(fileName)
            )
            .catch((err)=>err)
    }

    return {
        readFile,
        writeFile,
        fileExists,
        editFile
    }
}
export default useReactNativeFile