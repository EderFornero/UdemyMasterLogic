//hacer un cuadrado o rectangulo con espacios vacios al medio

function side(number) {
    let side = "";

    for (let i = 0; i < number; i++) {
        side += "~";
    }

    return side;
}


function rectangle(number) {

    let draw = side(number) + "\n";

    let content = "";

    for (x = 2; x < number; x++) {

        content = "|";

        for (y = 2; y < number; y++) {
            content += " ";
        }

        content += "|";


        draw += content + "\n";
    }

    draw += side(number);

    return draw;
}
console.log(rectangle(6));


