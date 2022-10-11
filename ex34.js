//dados dos numeros, devolver todas las operaciones basicas de ellos (suma,resta,multiplicacion y division)
//devolverlos en un string

const calculator = (number1, number2) => {
    let result = `La suma entre ${number1} y ${number2} es ` + (number1 + number2)  + '\n' +
                 `La resta entre ${number1} y ${number2} es ` + (number1 - number2) + '\n' +
                 `La multiplicación entre ${number1} y ${number2} es ` + (number1 * number2) + '\n' +
                 `La división entre ${number1} y ${number2} es ` + (number1 / number2) + '\n';
    return result;
};


console.log(calculator(5, 19));
