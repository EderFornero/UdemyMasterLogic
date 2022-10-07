//dado un array de numeros, devolver el resultado elevado al cuadrado


function squared(number) {

    let squared_number = number
                            .filter(e => { return typeof e === "number" })
                            .map(numbers => Math.pow(numbers, 2));
    return squared_number;
}

console.log(squared([80, 76, 53, "probando", "texto", 106, ["texto2"]]));