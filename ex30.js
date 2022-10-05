//dado un array, eliminar elementos duplicados

function double (arrayDouble){ 
    
    arrayDouble = arrayDouble.filter(e => { 
        return typeof e === "number"; 
    })
    //usar método set para eliminar duplicados
    let withoutDouble = new Set(arrayDouble);
    //usar método array.from para convertir lo que sea en un array
    return Array.from(withoutDouble);
}

console.log(double([1, 2, "array", "hola", 1, 2, 3]));