//dado un string devolver cuales son las letras que aparecen solo una vez y la primera.

function texts(text) {

    let count = {},
        result = [];
        words = text.split('').filter(word => word.trim().length >= 1);

    for (lyrics of words) {

        if (!count[lyrics]) {
            count[lyrics] = 1;
        }else{
            count[lyrics]++;
        }
    }

    for(lyrics in count){
        if(count[lyrics] > 1){
            delete count[lyrics];
        }else{
            result.push(lyrics);
        }
    }

    return [result, result[0]];

}

console.log(texts("hola hola peru"));