// dado un numero, sacar a cuantos años, meses y dias equivale

function day (days){ 

    let years = Math.floor(days/365); 
    let remainingDays = Math.floor(days%365)
    let months = Math.floor(remainingDays/30); 
    remainingDays = remainingDays % 30; 
    
    return `${days} días equivalen a ${years} años, ${months} meses y ${remainingDays} días`
}


console.log(day(823));