//dado un texto o array, devolver el elemento que mas veces aparece

function elements (text) {

    let result = {};
    let mostFrequent = '';
    let mostFrequentNumber = 0;

    if(typeof text === 'string'){
        text = text.split(' ')
    }


    for(let word of text){

        if(result[word]){ 
            result[word]++;
        }else{ 
            result[word] = 1; 
        }
    }

    //recorrer los indices del mapeo
    for(let element in result){
        if(result[element] > mostFrequentNumber){ 

            mostFrequentNumber = result[element];
            mostFrequent = element; 
        }
    }

    return {
        "Most frequent" : mostFrequent,
        "Most frequent number": mostFrequentNumber
    };
}

console.log(elements('texto de prueba texto abrir abrir abrir'));
console.log(elements([1, 2, 2, 2, 4, 7]));