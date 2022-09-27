//buscar palabras en una frase


function coincidence(phrase, search) {

    let text = phrase.toLowerCase().replace(/[+,.]/gi, "")
    let result = 0;

    if (text.includes(search)) {
        let words = text.split(" ")
        let map = {};

        for (let word of words) {
            if(map[word]){ 
             map[word]++;
            }else{
                map[word] = 1; 
            }
        }

        result = map[search]
      
    } else {
        result = 0;
    }
    return result;
}

console.log(coincidence("Prueba de texto. eder eder eder", "eder"));