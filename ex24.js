//dado un array de enteros, devolver true si es una permutacion o false si no lo es 
//pasar dos parametros, el array y la secuencia de permutacion (ejemplo: 5)


const permutation = (sequence, numbers) => { 
        
     for(let i = 0; i < numbers; i++){ 
        if(sequence.indexOf(i + 1) < 0){
            return false; 
        }
     }

     return true; 
}

console.log(permutation([1, 2, 3, 4], 4));
console.log(permutation([1, 2, 3, 4], 5));