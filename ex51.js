//dado un array de numeros, devolver arrays separados de numeros pares e impares 

function numbers (number){
    return{
        peers: number.filter(n => n % 2 === 0),
        odd: number.filter(n => n % 2 !== 0)
    };
}

console.log(numbers([1,2,3,4]));