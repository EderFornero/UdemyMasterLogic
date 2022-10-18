//dado un array de string, devolver otro que esté formado por mas de dos palabras

const words = (elements) => {

    let new_elements = [];

    for(e of elements){

        if(e.split(' ').length >= 2){
            new_elements.push(e);
        };
    }

    return new_elements;
}

console.log(words(["madrid", "barcelona cataluña", "roma italia", "italia"]));