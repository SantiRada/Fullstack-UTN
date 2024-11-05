// 1. Roberto Mercedez (un cliente) te pidió un juego rápido y simple dónde se le pregunta al usuario edades de ciertos famosos, y se muestre
// en pantalla un mensaje u otro dependiendo si el valor ingresado por el usuario es mayor, menor o igual a la edad de ese famoso.
// Se le deben hacer 3 preguntas en total al jugador.

let celebrities = {
    "Leonardo Di Caprio": 49,
    "Robert Downey Jr.": 57,
    "Tom Hanks": 67,
    "Arnold Schwarzenegger": 75,
    "Dwayne Johnson": 50,
    "Jhonny Deep": 61
};
let counter = 0;

let arrayKeys = Object.keys(celebrities);

// FOR ( VARIABLE DE ITERACIÓN ; CONDICION ; ITERACIÓN )
for(let i = 0;i < 3; i++) {
    let guess = prompt(`¿Cuántos años tiene ${arrayKeys[i]}?`);
    guess = parseInt(guess);

    if(guess == celebrities[arrayKeys[i]]){
        alert(`¡Correcto! ${arrayKeys[i]} tiene ${celebrities[arrayKeys[i]]} años.`);
    }
    else if(guess > celebrities[arrayKeys[i]]) {
        alert(`¡Incorrecto! ${arrayKeys[i]} es más joven`);
    }
    else {
        alert(`¡Incorrecto! ${arrayKeys[i]} es más grande.`);
    }
}

let moreCelebrities = [
    {
        "name": "Leonardo Di Caprio",
        "edad": 49,
    },
    {

    },
    {

    },
];

// moreCelebrities[0].name = "Leonardo Di Caprio";
// moreCelebrities[0].edad = 49


let myArray = [ 1, 2, 3, 4 ];

myArray.push(5);
myArray[myArray.length] = 5;

let num1 = 42;
document.write("<p>" + num1 + "</p>");