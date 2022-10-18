//corroborar que el email sea válido

const check = (email) => {
        //expresion regular + test
        let checkEmail = /^\w+@\w+\.\w+$/gi.test(email); 
        return checkEmail;
};
console.log(check('pepe@gmail.com'));