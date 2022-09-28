//dado un numero, encontrar los divisores del mismo y mostrar del 1 hasta dicho numero

const numberD = (number, divider) => { 

    if(number % divider === 0){ 

       return divider; 
    } else{
        return false; 
    }
}

const showDivider = (number) => { 
    
    for(let i = 1; i <= number; i++){ 
        let isDivider = numberD(number, i)

        if(isDivider) { 
            console.log("El número " + isDivider + " es divisor de 30");
        } 
    }

}

showDivider(30);