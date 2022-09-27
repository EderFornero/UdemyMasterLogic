//dado un string y un numero, repetir el string segun el numero que se dé

function repeat (string, number){ 

    let repeated = string; 

    for(let i = 0; i < number; i++){ 
        repeated += string; 
    }
    
    return repeated;
}

console.log(repeat("eder ", 5));


//funcion prototipo 

String.prototype.repeat = function(number){ 

    let repeated = ""; 

    for(let i = 0; i < number; i++){ 
        repeated += this; 
    }
    
    return repeated;
}

console.log(" funcion de prototipado".repeat(5));