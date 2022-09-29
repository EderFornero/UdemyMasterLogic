//convertir un texto en mayusculas o minisculas dependiendo que prevalece mas 
//si hay mas mayusculas debemos pasarlo a mayusculas y viceversa 

function upperLower(text) {

    let result = "";
    let uppers = 0;
    let lowers = 0;

    for (word of text) {

        if (/[A-Z]/.test(word)) {

            uppers++

        } else {

            lowers++

        }
    }

    if (uppers > lowers) {
        result += text.toUpperCase();
    } else {
        result += text.toLowerCase();
    }
    return result;

}

console.log(upperLower("probando TEXTO MoDiFIcaDO"));