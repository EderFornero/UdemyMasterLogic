//dar vuelta una palabra 

// function lyrics (frase) { 
//     let invest = frase.split('')
//                       .reverse()
//                       .join('-')
//     return invest
// }

// console.log(lyrics("eder"))


//Dar vuelta una palabra sin usar metodos 

//En este ejercicio hacemos una inversion del string utilizando un for of 
//Cumple su funcion de esta manera, recorre cada letra del parametro text y 
//al momento de concatenar lyrics + invested lo que pasa es que cada iteracion pasa a primer lugar 

function invest(text) {

    let invested = "";

    for (lyrics of text){
     invested = lyrics + invested; 
    }
    return invested; 
   
}

console.log(invest("hola buenas")); 

