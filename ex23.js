//dada una cadena de texto, poner en mayúscula el primer caracter

function string (text) {

    let result = "";

    for (word in text) {

        if (text[word - 1] === " " || parseInt(word) === 0) {

            result += text[word].toUpperCase();

        }else{
            result += text[word];
        }
        
    }

  return result; 
}


console.log(string("probando texto con primera letra mayuscula"));
