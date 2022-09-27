//dado un numero, restar de 8 en 8 hasta llegar a 0

function number(number){ 
 
    let result = `Del ${number} al 0` + '\n'
    
    while(number > 0){ 
        result += `nº${number} \n`
        number -= 8; 
    }
    result += "Fin \n"
    return result; 
}

console.log(number(80));
 