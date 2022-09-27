//censurar palabra

function censor(text=false, search=false) {
    
    let result = "";
   
    
    if(!text && !search){
        console.log("No se puede leer");
    }else if(!text && search){ 
        console.log("texto no disponible");
    }else if(text && !search){
        console.log("busqueda no disponible");
    }else if(text && search){ 
        result = text.replace(new RegExp(search, 'gi'), "CENSOR")
    }
    return result; 
}

console.log(censor("hola, hola, chau", "hola"));
