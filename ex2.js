//identificacion de palindromos

function palindromo (text) { 
     let invest = text.split('')
                      .reverse()
                      .join('');
     return (invest === text) 
    
}


console.log(palindromo("hola"));