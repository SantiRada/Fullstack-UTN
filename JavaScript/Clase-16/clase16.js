// FUNCTION
// function saludar () {}

// EXPRESIÓN DE FUNCIÓN
// const nombreDeVariable = function () { }

// FUNCIÓN DE FLECHA
// const arrowFunction = () => { }

const obj = {
    texto: "hola",
    numeros: 34,
    boolean: true,
    nada: null,
    array: [],
    objs: {},
    multiplier: function multiplier() {
        return this.numeros * 2;
    },
};

// console.log(obj.multiplier());

function suma (a, b){
    return (a + b);
}
function resta(a, b){
    return (a - b);
}

let result = suma(resta(5, 2), 3);

// FUNCTION
function saludar () {}

// EXPRESIÓN DE FUNCIÓN
const nombreDeVariable = function () { }

// FUNCIÓN DE FLECHA
// 1. SIMPLIFICAR LA SINTAXIS
// 2. EVITAR EL CONTEXTO (this)
const arrowFunction = () => {
    console.log("");
    return 2;
}

// MAP // FOREACH // FILTER
// let data = [ 2, 4, 6, 8, 10 ];

// CREA UN NUEVO ARRAY MODIFICANDO CADA ESPACIO SEGÚN LA FUNCIÓN INTERNA
// const element = data.map(item => item * 2); // [ 4, 8, 12, 16, 20 ]
// console.log(element);

// const newArray = [];
// for(item of data) {
    // newArray.push(item * 2);
// }

// Tenemos un sistema de clima en el que las temperaturas están en fahrenheit y necesitamos pasarlas a celsius
// °C = (°F - 32) × 5/9

const temperatureInFarenheit = [ 54, 32, 57, 28, 94 ];
const temperatureInCelsius = temperatureInFarenheit.map(item => ((item - 32) * (5/9)).toFixed(2));
// console.log("Farenheit: ", temperatureInFarenheit);
// console.log("Celsius: ", temperatureInCelsius);

// Tenemos un listado de empleados y necesitamos subir un 10% sus sueldos a todos por igual
const sueldos = [ 2500, 3500, 5000, 1800, 2200 ];
let aumentos = sueldos.map(item => item * 1.1);

// let objExample = {
//     "Alexander Mcqueen": 5000,
//     "como": 3,
//     "estas": 4,
// }
// MANEJO DE OBJETOS CON MAP
// const ejemploDeArray = objExample.entries(); // [ ["hola", 2], ["como", 3], ["estas", 4] ]
// ejemploDeArray = objExample.keys(); // [ "hola", "como", "estas" ]
// ejemploDeArray = objExample.values(); // [ 5000, 3, 4 ]
// const newEjemplo = ejemploDeArray.map(item => item + 5);
// let i = 0;
// for(exam in objExample){
//     objExample[exam] = newEjemplo[i];
//     i++;
// }

// let games = {
//     precio: 5600,
//     lanzamiento: 1996,
//     ventas: 9930,
// }
// let gamesArray = Object.values(games); // [ 5600, 1996, 9930 ] [ 5600*3, 1996*3, 9930*3 ]
// let newGames = gamesArray.map(item => item * 3);
// // console.log(newGames);

// let empleados = {
//     "joaquin": 16,
//     "ezequiel": 24,
//     "facundo": 32,
//     "tomas": 8,
//     "santiago": 12,
// }

// let empleadosArray = Object.values(empleados);

// const newEmpleados = empleadosArray.filter(item => item > 15); // newEmplados = [ 16, 24, 32 ]
// console.log(newEmpleados);





/*
Un cliente necesita un sistema para filtrar y transformar una lista de empleados de una empresa. Cada empleado está representado por un objeto con las siguientes propiedades: nombre (string), edad (número), departamento (string), y salario (número). El sistema debe realizar las siguientes tareas:

1. Filtrar todos los empleados que tienen un salario mayor a 2499 COMPLETADO
2. Obtener una lista con los nombres de los empleados que trabajan en el departamento de "Marketing", transformando la lista original.
3. Aumentar en un 10% el salario de todos los empleados mayores de 30 años, creando una nueva lista con los salarios actualizados.
*/

const empleados = [
    {
        nombre: "Facundo",
        edad: 34,
        departamento: "Marketing",
        salario: 2500,
    },
    {
        nombre: "Rodrigo",
        edad: 38,
        departamento: "Ventas",
        salario: 2100,
    },
    {
        nombre: "Joaquin",
        edad: 24,
        departamento: "Ventas",
        salario: 1800,
    },
    {
        nombre: "Tomas",
        edad: 19,
        departamento: "Marketing",
        salario: 1700,
    },
    {
        nombre: "Jeremias",
        edad: 28,
        departamento: "Programacion",
        salario: 2300,
    },
    {
        nombre: "Nicolas",
        edad: 23,
        departamento: "Marketing",
        salario: 4500,
    }
];

// INCISO #1
const newSalary = empleados.filter(item => item.salario > 2499);
console.log("Estos son los empleados con un sueldo mayor a $2499: ", newSalary);

// INCISO #2
// 2. Obtener una lista con los nombres de los empleados que trabajan en el departamento de "Marketing".
let empleadosDeMarketing = empleados.filter(item => item.departamento.toLowerCase() === "marketing");
// empleados = empleadosDeMarketing;
console.log("Los empleados de Marketing son: ", empleadosDeMarketing);

// INCISO #3
// 3. Aumentar en un 10% el salario de todos los empleados mayores de 30 años, creando una nueva lista con los salarios actualizados.
let edadesEmpleados = empleados.filter(item => item.edad > 30); // [ {}, {}, {} ]
let sueldoModificado = edadesEmpleados.map(item => item.salario * 1.1);

let i = 0;
for(item in edadesEmpleados){
    edadesEmpleados[item].salario = sueldoModificado[i];
    i++;
}

console.log("Sueldos modificados: ", edadesEmpleados);

// FOREACH
const edades = [ 30, 24, 29, 39, 19, 32 ];
for(item of edades){
    // item = 30
}

edades.forEach(item => {
    // MAP: Devuelve un array modificado
    // Filter: Devuelve un array filtrado/reducido
    // forEach: NO devuelve nada = No se guardan los valores en ningún lado
    let hola = item * 2;
    // console.log(hola);
});

