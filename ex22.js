//dados dos numeros, indicar cual es mayor y cual es menor

//esta funcion ordenará los numeros de mayor a menor 

const numbersFirstOption = [4, 16, 10, 40];

numbersFirstOption.sort(function (a, b) {
    return b - a;
});

//accedo a los numeros ya ordenados para indicarlos

console.log("El número más grande de este array es:", numbersFirstOption[0]);
console.log("El número más pequeño de este array es:", numbersFirstOption[3]);


//otra forma

const numbersSecondOption = (numberOne, numberTwo) => {

    let result = "";

    if (numberOne === numberTwo) {

        result = "Los números indicados son IGUALES";

    } else if (numberOne > numberTwo) {

        result = `El número mayor es ${numberOne}` + "\n";
        result += `El número menor es ${numberTwo}`;

    } else if (numberOne < numberTwo) {

        result = `El número mayor es ${numberTwo}` + "\n";
        result += `El número menor es ${numberOne}`;
    }
    
    return result; 

}

console.log(numbersSecondOption(5, 8));
