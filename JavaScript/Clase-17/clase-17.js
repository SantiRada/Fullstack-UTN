/*
Ejercicio: Encontrar el Número Mayor Único
Escribe una función en un máximo de 5 líneas que tome un array de números como entrada y devuelva el número más alto que no esté repetido en el array. Si todos los números están repetidos, la función debe devolver null.
*/

const numbers = [ 2, 4, 5, 2, 6, 8, 5, 9, 9 ];

console.log(maxNumber());

function maxNumber() {
    const numbersTwo = numbers.filter(num => numbers.indexOf(num) === numbers.lastIndexOf(num));
    return numbersTwo.length > 0 ? Math.max(...numbersTwo) : null;
}


// let max = 0;
// for(let i = 0; i < numbersTwo.length; i++) {
//     if(numbersTwo[i] > max) { max = numbersTwo[i]; }
// }
// console.log(max);
// if(numbersTwo.length === 0) { return null; }


/*
    Ejercicio: Números Duplicados
    Escribe una función que tome un array de números como entrada y devuelva un nuevo array que contenga solo los números que aparecen más de una vez en el array de entrada, sin duplicados en el resultado.
*/

const num = [ 2, 4, 5, 5, 6 ,7, 7, 9];

// [ 5, 7 ]




















// Reduce // slice // spread operator // find // findIndex / indexof // lastindexof

const numeros = [ 10, 20, 30, 40, 50 ];

const numeroElegido = numeros.reduce((acc, value) => acc += value);
// console.log(numeroElegido);

const personas = [ "Joaquin", "Facundo", "Jessica", "Elena", "Martin", "Gonzalo", "Gonzalo", "Jessica", "Jessica" ];
const newPersonas = personas.reduce((acc, value) => {
    if(acc[value]){ // En mi objeto accumulador existe el elemento "Joaquin"
        acc[value]++; // Si existe le sumo 1
    }else{
        acc[value] = 1; // Si no existe lo igual a 1 porque es la primera vez que aparece
    }

    return acc; // Que se guarde para la siguiente iteración
}, {});
// console.log(newPersonas);

// slice
const seleccionados = personas.slice(5);
// console.log(seleccionados);

const selectFind = numeros.findIndex(item => item > 20);
// console.log(selectFind);

// Spread Operator
const array1 = [ 10, 20, 30, 20 ];
const array2 = [ 50, 60, 70 ];

const array3 = [ ...array1, 40, ...array2, 80 ]; // COPIA EL CONTENIDO SIN QUE SEA UN ARRAY
// console.log(array3);

// indexof // lastindexof
const firstPosition = array1.indexOf(10);
const lastPosition = array1.lastIndexOf(10);

// if(firstPosition == lastPosition) { console.log("No está repetido"); }
// else { console.log("El valor está repetido"); }

const array01 = [ 1, 2, 3 ];
const array04 = [...array01, 4].map(item => item * 2).filter(item => item < 8).reduce((acc, value) => acc + value, 0);

// [ 1, 2, 3, 4 ] SPREAD OPERATOR
// [ 2, 4, 6, 8 ] MAP
// [ 2, 4, 6 ] FILTER
// 12 REDUCE

// console.log(array04);