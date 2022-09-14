//Hacer test a medida que voy programando


//Dado un numero, devolver su tabla de multiplicacion completa

 
function table (number) { 
   let result = `Tabla del ${number} \n`

   for(i = 1; i <= 10; i++){ 
     let multiply = (i*number)
     
     result += `${i} x ${number} = ${multiply} \n`

    }
    return result; 
 
}

console.log(table(2)); 