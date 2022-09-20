//devolver elementos en comun entre 2 array

function elements (array1, array2){ 
   
    const filtered = array1.filter(element => { return array2.includes(element)});

    return filtered;
}

console.log(elements([3,4,5,6,7], [3,7,8,9]));
console.log(elements(["jose","maria","angel"], ["pepe","angel","gabi"]));