//dado un numero, crear una escalera con "-"

function stair(number) {
    let stairs = "";

    for (let level = 1; level <= number; level++) {
        let steps = "";
        for (let step = 1; step <= level; step++) {
            steps += "-"
        }
       stairs += steps += '\n'
    }

    return stairs; 
}
console.log(stair(8));
