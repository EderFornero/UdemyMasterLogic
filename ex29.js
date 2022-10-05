//dado un numero, devolver si es capicua o no

function capicua (number){ 

    let toString = parseInt(number.toString().split('').reverse().join(''));
    
    if(toString === number){
        return true; 
    }else{
        return false; 
    }

    
}

console.log(capicua(323));