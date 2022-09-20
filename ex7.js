//Dados dos numeros, averiguar cuantos numeros impares hay entre ellos
//mismo metodo para numeros pares


function impar(number1, number2) {

    let count = 0;

    //bucle while
    while(number1 < number2){ 
        if(number1%2 !== 0){ 
           count++ 
        }
        number1++; 
    }
  return count + " numeros impares"; 
} 

console.log(impar(1, 50))