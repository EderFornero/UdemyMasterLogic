//sacar factorial de un numero


const factorial = (number) => { 
    let result = 1; 

    for(let i = 1; i <= number; i++){ 
        result *= i; 
    }

    return result; 

}

console.log("El factorial de 3 es:", factorial(3));