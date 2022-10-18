//dado un numero, mostrar un triangulo con asteriscos

function traingle (number){ 

    let half = Math.floor(number - 1); 
    //hacer filas
    for(let row = 0; row < number; row++){
        let level = "";

        //hacer columnas
        for(let column = 0; column < (2 * number - 1); column++){

            if(half - row <= column && half + row >= column){
                level += "*";
            }else{
                level += " ";
            }
           
        }
        console.log(level);
       
    }
}

traingle(5);