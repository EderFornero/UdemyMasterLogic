//dado un numero, devolver que angulo es


const angle = (opening) => { 
    
    if(opening < 90){
        return "Es un ángulo agudo porque es menor a 90º"
    }
    else if(opening === 90){ 
        return "Es un ángulo recto porque equivale a 90º"
    }
    else if(opening > 90 && opening < 180){ 
        return "Es un ángulo obtuso convexo porque es mayor a 90º y menor a 180º"
    }
    else if(opening === 180){ 
        return "Es un ángulo llano porque equivale a 180º"
    }
    else if(opening > 180 && opening < 360){ 
        return "Es un ángulo cóncavo porque es mayor a 180º y menor a 360º"
    }
    else if(opening === 360){ 
        return "Es un ángulo completo porque equivale a 360º"
    }
}

console.log(angle(150));