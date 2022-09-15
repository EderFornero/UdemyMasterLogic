//dar vuelta una palabra 

// function word (frase) { 
//     let invest = frase.split('')
//                       .reverse()
//                       .join('-')
//     return invest
// }

// console.log(word("eder"))


//Dar vuelta una palabra sin usar metodos 

//En este ejercicio hacemos una inversion del string utilizando un for of 
//Cumple su funcion de esta manera, recorre cada letra del parametro text y 
//al momento de concatenar word + invested lo que pasa es que cada iteracion pasa a primer lugar 

function invest(text) {

    let invested = "";

    for (word of text){
     invested = word + invested; 
    }
    return invested; 
   
}

console.log(invest("hola buenas")); 

