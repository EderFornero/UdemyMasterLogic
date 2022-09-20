//dar vuelta un numero entero y devolverlo

//string
function number(number) {

    let invest = "";

    for (numbers of number) {
        invest = numbers + invest;
    }
    return invest + ` es ${number} invertido`;
}

console.log(number("97"));


//number

function investNumber(number) {

    let invested = parseInt(number
        .toString()
        .split('')
        .reverse()
        .join('')) * Math.sign(number); //math.sign para saber si un numero es - 
    return invested;
}

console.log(investNumber(-56));