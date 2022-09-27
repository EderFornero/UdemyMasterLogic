//dividir un array en sub-arrays

//crear funcion con 2 parametros

function splitArray(totalArray, elementNumber) {
    let arrays = [];
    for (element of totalArray) {
        let last = arrays[arrays.length - 1]; 
        if(!last || last.length === elementNumber){ 
            arrays.push([element])
        }else {
            last.push([element])
        }; 
        
    }
    return arrays; 


}

console.log(splitArray([10, 30, 40, 25, 55, 100, 101], 2));