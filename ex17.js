//dado un numero, mostrar desde el 1 hasta ese numero
//en un multiplo de 3, mostrar "Buzz"
//en un multiplo de 5, mostrar "Lightyear"
//en un multiplo de 3 y 5, mostrar "BuzzLightyear"

const buzz = (number) => {

    let result = "";

    if (number % 3 === 0 && number % 5 === 0) {

        result = "BuzzLightyear"

    } else if (number % 3 === 0) {

        result = "Buzz"

    } else if (number % 5 === 0) {

        result = "Lightyear"
    } else { 

        return number; 
    }

    return result; 
}


const numbers = (number) => { 
      
      for(let i = 1; i <= number; i++){ 
          console.log(buzz(i));
      }
}

numbers(15)