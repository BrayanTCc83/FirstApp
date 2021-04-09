const errorHandler = ( error, recommendation ) => {
    throw new Error ("An error ocurred: "+error+", try to "+recommendation)
}
export {
    errorHandler
}