//sacar porcentaje de un numero
var number1 = 250;

console.table(Math.floor(number1*15)/100); 
console.table(Math.floor(number1*20)/100);
console.table(Math.floor(number1*30)/100);


function operation2(number, percentage) {
    let op = (number * (percentage/100));
    let result = `El ${percentage}% de ${number} es ${op}`;
    return result; 
}

console.log(operation2(385, 50));







