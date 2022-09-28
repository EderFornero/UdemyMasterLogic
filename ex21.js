//dado un texto y un numero, recortar los caracteres hasta el numero señalado
//asegurar que texto sea un 'string' y numero un 'number' con typeof


function cut (text, until){ 

    let result = ""; 
   

    if(typeof text === 'string' && typeof until === 'number'){ 

         result = text.substring(0, until)

    } else{ 
        console.log("error in data");
    }
  
    return result; 
}

console.log(cut("Prueba de texto recortado", 9));