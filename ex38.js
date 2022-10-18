//dado una serie de numeros, mostrar los numeros al cuadrado de cada uno de ellos


function square (number){
    return Math.pow(number, 2); 
};

function show (number){ 
    for(let i = 0; i <= number; i++){
        console.log(square(i));
    }
};

show(6);

