//dado un array de alumnos y sus notas, mostrar quienes estan aprobados y quienes no


function disapproved(students) {

    let disapproved = 0,
    approved = 0;

    for(student of students){
        if(student[1] >= 5){
            approved++;
        }else{
           disapproved++
        };
    };

    return{
        "approved": approved,
        "desapproved": disapproved
    }
    
}


console.log(disapproved([
    ["Pepe", 3],
    ["Jorge", 8],
    ["Gustavo", 10],
    ["Maria", 5],
    ["Ángela", 7],
    ["Marta", 2]
]));