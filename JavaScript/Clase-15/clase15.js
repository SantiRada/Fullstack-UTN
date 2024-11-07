// Enviar funciones por parámetros -> Callback
function ejemplo1 () { return "Hola mundo"; }
function ejemplo2 (index) { return index; }
// ejemplo2(ejemplo1);

// Asignar funciones a variables
const ejemplo3 = function () { console.log("Hola mundo"); }

// Almacenar funciones en objetos -> Métodos
const ejemplo4 = {
    "saludar": function () { console.log("¡Hola mundo!"); },
    "despedir": function () { console.log("¡Adios!"); },
}
// ejemplo4['despedir']();
// ejemplo4.despedir();

// Efectos Secundarios - Side Effects
// 1. Modificar variables globales
// 2. Solicitudes HTTP
// 3. Modificar parámetros
// 4. Imprimir mensajes en pantalla o consola
// 5. Manipulación del DOM
// 6. Obtener la hora actual

// Para qué se crearon las ARROW FUNCTION
// 1. hacer las funciones más cortas en tema sintaxis
// 2. evitar el uso de this - arguments - bind - call - apply - contexto

const ejemplo5 = (dato1, dato2) => {
    console.log(dato1 + " VS " + dato2);
}

const ejemplo6 = () => console.log("Hola");
// ejemplo6();

// .map - Hace lo que se coloque dentro y retorna un nuevo array con los resultados
const numbers = [2, 4, 8, 16];
// const newNumbers = numbers.map(num => num * 2);
// console.log(newNumbers);

const newNumbersWithFor = (list) => {
    let newNumbers = [];
    for(num of list){
        newNumbers.push(num * 2);
    }

    return newNumbers;
}

// const newNumbers = newNumbersWithFor(numbers);
// console.log(newNumbers);

// .forEach - Hace lo que se coloque dentro pero no retorna nada, por lo que al igualarlo a una variable da undefined
const newNumbers = [1, 2, 3, 4, 5];
let sum = 0;
newNumbers.forEach(num => sum += num);
// console.log(sum);

// .filter - Devuelve un array con los elementos del primero que cumplan una condición
// .find - Busca el primer elemento que cumpla con la condición

const numbersFilter = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbersFilter.filter(number => number % 2 == 0);
// console.log(numbersFilter);
// console.log(evenNumbers);

const words = ['apple', 'hello', 'world', 'word', 'world', 'Marvel'];

// El primer valor de accumulator es {}
// el primer valor de currentValue es "apple"
const wordFrequency = words.reduce((accumulator, currentValue) => {
    console.log(accumulator);
    console.log(currentValue);

    if(accumulator[currentValue]) {
        accumulator[currentValue]++;
    }else {
        accumulator[currentValue] = 1;
    }
    
    console.log("--------------------------------");

    return accumulator;
}, {});
// El valor inicial de {} define que tipo de dato guarda accumulator
// console.log(wordFrequency);


