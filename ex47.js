//dado un array de objetos, devolver las aficiones mas comunes de los usuarios


const hobbies = (objects) => {

    let map= {};

    objects.forEach(object => {

        for(hobbie of object.hobbies){

            if(!map[hobbie]){
                map[hobbie] = 1;
            }else{
                map[hobbie]++;
            }
        }
    })

    return map; 
}



const users = [ 
    {name: "Eder", hobbies: ["Programming", "Football", "Videogames"]},
    {name: "Pepe", hobbies: ["Programming", "TV show", "Basketball"]},
    {name: "Maria", hobbies: ["Design", "Novels", "Volley"]},
];

console.log(hobbies(users));