/*

Recorrer un objeto con for in: Dado un objeto que contiene información de un estudiante (nombre, edad, cursos), utiliza for...in para imprimir cada clave y su valor.

Sumar elementos de un array con for...of: Crea un array de números y usa for...of para calcular la suma total de sus elementos.

Modificar propiedades de un objeto: Utiliza for...in para incrementar en un 10% todos los valores numéricos de un objeto que representa precios de productos.

Imprimir atributos específicos de objetos en un array: Tienes un array de objetos que representan libros (título, autor, año). Usa for...of para imprimir solo los títulos de los libros.

Listar propiedades de un objeto anidado: Dado un objeto que contiene información de una empresa con departamentos y empleados, usa for in para listar todas las propiedades y subpropiedades.

Concatenar cadenas de un array: Crea un array de cadenas de texto y utiliza for...of para concatenarlas en una sola cadena separada por espacios.

Contar propiedades de un objeto: Usa for...in para contar cuántas propiedades tiene un objeto que representa las configuraciones de una aplicación.

Recorrer un array bidimensional: Tienes un array de arrays (matriz) de números. Utiliza bucles for...of anidados para imprimir todos los elementos de la matriz.

Transformar valores de un array: Usa for...of para iterar sobre un array de números y crear un nuevo array donde cada número esté multiplicado por 2.

Diferenciar métodos y propiedades en un objeto: Dado un objeto que contiene propiedades y métodos, utiliza for...in para iterar sobre él e imprimir solo las propiedades (excluyendo los métodos).

*/


// Listar propiedades de un objeto anidado:
// Dado un objeto que contiene información de una empresa con departamentos y empleados, usa for in para listar todas las propiedades y subpropiedades.

let listObject = {
    games: {
        name: "The Legend of Zelda",
        year: 1986,
    },
    movies: {
        name: "The Lord of the Rings",
        year: 2001,
    },
}

// SIRVE PARA RECORRER EL PRIMER OBJETO: listObject
for (list in listObject){
    // console.log("--------- " + list + " ---------");
    // SIRVE PARA RECORRER CADA OBJETO INDIVIDUAL: Games y Movies
    for (item in listObject[list]){
        // console.log(item, listObject[list][item]);
    }
}

// Contar propiedades de un objeto: Usa for...in para contar cuántas propiedades tiene un objeto que representa las configuraciones de una aplicación.

let configs = {
    theme: "light",
    fontSize: 16,
    language: "es",
}
// 

// [0] = "theme" [1] = "fontSize"
// console.log(Object.keys(configs).length);

// [0] = "light" [1] = 16
// console.log(Object.values(configs).length);

// console.log(myArray);

let counter = Object.values(configs).length;
// console.log("Cantidad: " + counter);

// myArray[0][0] = "theme"
let myArray = Object.entries(configs);

// console.log(myArray);

for (element of myArray){
    // console.log(element[0] + ": " + element[1]);
    // myArray[0] = ['theme', 'light'] 
    // element != 0 // element = ['theme', 'light']
}


myArray = [
    ['theme', 'light'],
    ['fontSize', 16, "hola", "mundo", true],
    ['language', 'es'],
];


/// FOR CLÁSICO
// for in - for of - for 
// myArray 
for(let i = 0; i < myArray.length; i++) {
    // myArray[i] == myArray[0]
    // console.log(myArray[i]);

    for(let j = 0; j < myArray[i].length; j++) {
        // i = 1
        // console.log("En la posición " + i + " está el valor: " + myArray[i][j]);

    }
}

/*
1. Crea la variable i
2. Define que el bucle se repetirá mientras que i sea menor que 3
3. Incrementa en 1 la variable i en cada iteración
4. Creo un nuevo for para recorrer el array de myArray[i]
5. Entramos al nuevo for con j = 0 y lo mostramos en pantalla
6. Entramos al nuevo for con j = 1 y lo mostramos en pantalla
7. Entramos al nuevo for con 


*/

/* 
Transformar valores de un array: Usa for...of para iterar sobre un array de números y crear un nuevo array donde cada número esté multiplicado por 2.
*/

// 1. Creo un array de números
// 2. Creo un array vacío
// 3. Recorro el array utilizando for of
// 4. 
// 
// 

const numbers = [ 2, 4, 8, 16, 32];
let newNumbers = [];

for (num of numbers) {
    newNumbers.push(num * 2);
}
// console.log(newNumbers);

for(let i = 0; i < numbers.length; i++){
    newNumbers[i] = numbers[i] * 2;
}

// console.log(newNumbers);


let juegos = [
    {
        nombre: "The Legend of Zelda",
        genero: "Aventura",
        precio: 60
    },
    {
        nombre: "FIFA",
        genero: "Deporte",
        precio: 50
    },
    {
        nombre: "Minecraft",
        genero: "Aventura",
        precio: 30
    }
];

console.log("--------------------------");
for (juego of juegos) {
    for (elemento in juego) {
        console.log(`${elemento}: ${juego[elemento]}`);
    }
    console.log("--------------------------");
}
