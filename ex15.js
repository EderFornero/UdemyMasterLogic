//dado un texto, descubrir cual es el caracter mas usado

function use (text){ 
    
    let map_use = {}; 
    let number_use = 0;
    let word_use = "";  


    for(word of text){ 
        
        if(!map_use[word]){ 
            map_use[word] = 1; 
        }else{ 
            map_use[word]++; 
        }
    }
    //pasar a string para aplicar el metodo trim asi sacamos los espacios en blanco y contamos las letras
    for(word in map_use){ 
       if(map_use[word].toString().trim().length === 1 && map_use[word] > number_use){
        number_use = map_use[word]; 
        word_use = word; 
       }
    }
    return word_use; 
}

console.log("La letra que más se repite es:", use("Quitamos espacios en blanco con método trim"));