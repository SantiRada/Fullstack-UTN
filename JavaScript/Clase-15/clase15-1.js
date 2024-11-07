// WHILE
// DO-WHILE
// Funciones
// Arrow Function
// forEach
// map

// for in: Recorre un objeto array guardando el indice(clave)
// for of: Recorre un objeto array guardando el valor
// for clásico: Recorre un objeto array sumando un contador
// While: Itera en base a una condición de corte

// num = 15;

// do {
//     console.log("NUM: "+ num);
// } while(num < 10);

// let response;

// do {
//     response = prompt("Escribí un '0':");

// } while(response != '0');

// Avanzo cuando response sea == '0'

// Tienes una lista de usuarios, al iniciar el sistema debes pedir un ID de usuario y luego su contraseña. Si la contraseña es incorrecta, mostrar un mensaje que diga que escriba la contraseña nuevamente.

// 1. Crear un array de objetos de usuarios con su ID y contraseña
// 2. 
// 

// let users = [
//     {
//         id: 0,
//         pass: "hola",
//     },
//     {
//         id: 1,
//         pass: "mundo",
//     },
// ];

// let idUser = null;
// do{
//     let id = prompt("Ingrese el ID de usuario:");
//     id = parseInt(id);
//     for(let i = 0; i < users.length; i++){
//         if(id == users[i]['id']) {
//             idUser = id;
//         }
//     }
// } while(idUser == null);
// let pass;
// do { pass = prompt("Contraseña: "); } while(pass != users[idUser]['pass']);
// console.log("Ingresaste la contraseña correctamente.");

let hola; // undefined


function suma(numbers) {
    let result = 0;
    for(number of numbers) { result += number; }
    return result;
}
function resta(numbers) {
    let result = numbers[0];

    for(let i = 1; i < numbers.length; i++) { result -= numbers[i]; }
    return result;
}
function multiplicacion(numbers){
    let resultado = numbers[0];
    for (let i = 1; i < numbers.length; i++) { resultado *= numbers[i]; }
    return resultado;
}
function division(numbers){
    let resultado = numbers[0];
    for (let i = 1; i < numbers.length; i++) { resultado /= numbers[i]; }

    if(response == "Infinity") { console.log("No se puede dividir por cero."); }

    return resultado;
}

// 1. Pedir que se quiere hacer
let correct = false;
let response;
do{
    response = prompt("¿Qué cuenta quieres hacer? (SUMA - RESTA - MULTIPLICACIÓN - DIVISIÓN)");

    switch(response.toUpperCase()){
        case "SUMA": correct = true; break;
        case "RESTA": correct = true; break;
        case "MULTIPLICACION": correct = true; break;
        case "DIVISION": correct = true; break;
        default: alert("Debes escribir alguna de las 4 opciones: (SUMA - RESTA - MULTIPLICACIÓN - DIVISIÓN)"); break;
    }
} while(!correct);

let numbers = [];
let num;

do{
    num = prompt("Inicie el valor para la " + response + ": (escriba 'f' para finalizar)");

    if(num != 'f' && num != 'F'){
        num = parseFloat(num);
        numbers.push(num);
    }
} while(num != 'f' && num != 'F');

let resultadoFinal;

switch(response.toUpperCase()){
    case "SUMA":
        resultadoFinal = suma(numbers);
        break;
    case "RESTA":
        resultadoFinal = resta(numbers);
        break;
    case "MULTIPLICACION":
        resultadoFinal = multiplicacion(numbers);
        break;
    case "DIVISION":
        resultadoFinal = division(numbers);
        break;
}
console.log("El resultado de la " + response + " es " + resultadoFinal);