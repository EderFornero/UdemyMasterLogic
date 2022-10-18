//dado un array de numeros, sacar la media de ellos

function average (numbers){

    let add = numbers.reduce((acc, current) => {
        return acc + current
    });

    let x = add / numbers.length; 
    
    return x;
}

console.log(average([2, 4, 5, 6]));