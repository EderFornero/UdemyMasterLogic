function coincidencias(frase, busqueda) {

    let text = frase.toLowerCase().replace(/[+,.]/gi, "")
    let result = 0;

    if (text.includes(busqueda)) {
        let words = text.split(" ")
        let map = {};

        for (let word of words) {
            if(map[word]){ 
             map[word]++;
            }else{
                map[word] = 1; 
            }
        }

        result = map[busqueda]
      
    } else {
        result = 0;
    }
    return result;
}

console.log(coincidencias("Hola, no me salen los ejercicios, chau. eder eder eder", "master"));