// Function normal
function hola () {}
// Expression Function
const hola2 = function () {}
// Arrow Function
const hola3 = () => {}

// FUNCIONES COMO PARÁMETROS
function suma(a, b){
    return (a + b);
}
// RETORNAR FUNCIONES
function verifyNumber(a){
    if(!isNaN(a)){ return a; }
    else { return null; }
}
// ASIGNAR FUNCIONES A VARIABLES
const sumaFinal = suma(verifyNumber(4), verifyNumber("hola"));
// console.log(sumaFinal);

// ELEMENTOS QUE PUEDE TENER UN OBJETO, LAS FUNCIONES TAMBIÉN
const game = {
    name: "The Legend of Zelda",
    characters: [ "Zelda", "Link" ],
    titles: {
        "Zelda II": 1987,
        "A Link to the Past": 1991,
        "Link's Awakening": 1993,
        "Ocarina of Time": 1998,
        "Majora's Mask": 2000,
        "Oracla of Seasons": 2001,
    },
    whenCameOut: function whenCameOut(index) {
        if(this.titles[index]) { console.log(this.titles[index]); }
        else { console.log("No se reconoce el título"); }
    }
}
// EL THIS FUNCIONA PARA COMPRENDER EL CONTEXTO: Llamado "Enlace Léxico"
game.whenCameOut("Zelda II");


// MAP
const numbers = [2, 4, 6, 8, 10];
const newNumbers = numbers.map(num => num * 2);
// console.log(newNumbers);

// NORMAL WITHOUT MAP
function multiplicarPor2(numbers) {
    let newList = [];
    for(let num of numbers){
        newList.push(num * 2);
    }
    return newList;
}
const newNormalNumbers = multiplicarPor2(numbers);
// console.log(newNormalNumbers);

// FOREACH
