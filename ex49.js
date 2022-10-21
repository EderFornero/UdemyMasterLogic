//dado un objeto, descubrir si una propiedad existe o no


const exist = (object, prop) => { 
    return typeof object === 'object' && typeof prop === 'string' && hasOwnProperty.call(object, prop);
};

let user = {
    name: "Eder",
    lastName: "Fornero"
}

console.log(exist(user, 'name'));