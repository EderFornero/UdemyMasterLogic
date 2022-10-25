//dado un numero, devolver cuantos bucles tiene
//bucle se refiere a circulo cuando se dibuja, ejemplo 8 (2 bucles)

const loop = (number) => { 

   let arrayNumber = number.toString().split('');
   let loops = 0;

   for(number of arrayNumber){
        number = parseInt(number);

        if(number === 0 || number === 6 || number === 9){
            loops++;
        }else if(number === 8){
            loops += 2; 
        }
   };

   return loops; 
    
};


console.log(loop(2886980));

