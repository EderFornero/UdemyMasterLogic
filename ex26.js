//crear una serie de fibonacci

const fibo = (number) => { 
    let serie = [0, 1]; 

    for(let i = 2; i <= number; i++){
        serie.push(serie[i - 1] + serie[i - 2]); 
    }

    return [serie, serie[number]];
}


console.log("La serie de fibonacci es: ",fibo(23)[0]);
console.log("Termina en: ",fibo(23)[1]);