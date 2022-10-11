//dado un texto, devolver cuantas consonantes y vocales tiene

const text = (words) => {

    let consonants = 0; 
    let vowels = 0;
    let cleanerText = '';

    cleanerText = words.split('').filter(word => /[áéíóú\w]/gi.test(word) && isNaN(word)).join('');

    for(let word of cleanerText){ 
        if(/[áéíóúaeiou]/gi.test(word)){ 
            vowels++;
        }else{ 
            consonants++; 
        }
    }

    return [consonants, vowels]; 
}

let words = text('hola , ., asd!! arha, áéíóú, 5460456, 132612r3, 2131');

console.log('Consonants: ', words[0]);
console.log('Vowels: ', words[1]);