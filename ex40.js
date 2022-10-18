//dados un array de numeros, devolver el mas bajo y el mas alto

function number(numbers) {

    let organize = numbers.sort((a, b) => a - b);

    return {
        higher: organize[0],
        lower: organize[organize.length - 1]
    }
}

console.log(number([1, 9, 2, 5, 77, 87, 20]));