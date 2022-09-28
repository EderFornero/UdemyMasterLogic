//dadas dos cadenas de textos, demostrar si son anagramas entre si, sin tener en cuenta espacios, numeros o simbolos


const anagramsCleaner = (text) => { 

   return text.split('').sort().join().replace(/[^\w]/gi, "").toLowerCase();
}


function anagrams (textOne, textTwo) { 
    
    return anagramsCleaner(textOne) === anagramsCleaner(textTwo); 
}

console.log(anagrams("ed.e,r", "e..dre---"))

