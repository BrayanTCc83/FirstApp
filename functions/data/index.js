const ObjectEvaluate = ( object, callback ) => {
    const valuesArray = Object.values(object)
    console.log(valuesArray)
    return valuesArray.length !== 0 && valuesArray.every( callback )
}   
export {
    ObjectEvaluate
}