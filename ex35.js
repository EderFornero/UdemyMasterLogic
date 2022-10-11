//dado un array, devolver uno nuevo con el primer y ultimo elemento de dicho array

function originalArray (newArray) { 

    let newElements = []; 

    newElements.push(newArray[0], newArray[newArray.length - 1]);

    return newElements; 
}

console.log(originalArray([100, 2000, 3454, 1321]));