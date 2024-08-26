const pi = 3.1415962

function doublePi(){
    return pi * 2
}

function triplePi(){
    return pi *3
}

export default pi // In a single file we can only have a single default export
export { doublePi, triplePi }