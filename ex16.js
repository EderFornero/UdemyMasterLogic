//dado un texto, sacar cuantas vocales tenga con el método match

function vowels(text) {

    let coincidences = text.match(/[aeiou]/gi)

    return coincidences.length; 
}

console.log("La cantidad de vocales que hay en el texto es de:", vowels("buscando vocales"));