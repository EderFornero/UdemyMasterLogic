//dado un string, devolver todos los posibles substring

const substring = (text) => { 
    
    let substrings = [];

    for(lyrics in text){

        let start = parseInt(lyrics);
        
        for(let i = 0; i <= text.length - start; i++){

            let add = parseInt(i) + parseInt(start);

            substrings.push(text.substring(start, add));
        }
    }

    return substrings.filter(e => e.length >= 1); 
}

console.log(substring("pepe"));