/* --------- TIPOS DE VARIABLES --------- */
valor1 = "hola"; // cadena de caracteres (conocido como String)
valor2 = 25; // Valor numérico (conocido como int[valores enteros] o float[valores decimales])
valor3 = true; // Valor booleano. Puede contener true o false

// Esta forma de crear una variable es la más simple y tiene un alcance global
var number = 12

// Esta forma de crear una variable limita su alcance al bloque en que es ejecutada
let specificNumber = 17;

// Esta forma de crear una variable tiene alcance global pero no permite modificaciones
// Al no permitir modificaciones, se debe inicializar a la vez que se declara, por lo contrario genera errores.
const PI = 3.1416;

// Las variables tienen 3 posiblidades:
// Declarar, inicializar, modificar.

// Al no declarar una variable, abrá un error en consola
// Los errores (no siempre), detienen la ejecución
// alert(ejemplo1); // Función de Javascript para mostrar su contenido en una ventana emergente
// document.write(ejemplo1); // Función de Javascript para escribir su contenido directamente en la web

// Declarar una variable
let ejemplo1;

// Al no inicializar una variable, su valor será "undefined"
// alert(ejemplo1);

// inicializar
let ejemplo2 = "¡Hola";

// Modificar
ejemplo1 = " Mundo!";

// Declaración de variables múltiples
let opcion1, opcion2, opcion3;
opcion1 = 1;
opcion2 = 2;
opcion3 = 3;

// Simplificación
let opcion4 = 4, opcion5 = 5, opcion6 = 6;

// alert(opcion6);

// Declaración de variables vacías
let variableVacia = null;

// Ejemplo de Concatenación
let caso1 = 2;
let caso2 = " hola";

// alert(caso1 + caso2);

let caso3 = "texto";
let caso4 = 12;
let caso5 = 34;
let caso6 = true;

let frase1 = caso3 + caso4 + caso5 + caso6;
// alert(frase1);

let nombre = "Javier";
let frase2 = "¡Hola " + nombre + ", bienvenido!";
// alert(frase2);

frase2 = `¡Hola ${nombre}, bienvenido!`; // Alt+96 o CTRL+ALT+}
// alert(frase2);

// Escapar comillas
// frase2 = "hola "Javier", bienvenido";
frase2 = 'hola "Javier", bienvenido';
frase2 = "hola 'Javier', bienvenido";
frase2 = "hola \"Javier\", 'bienvenido'";
// alert(frase2);

// Ejemplo de NaN
// alert(caso1 * caso2);

// Pruebas con Prompt
// prompt("¡Hola Mundo!");

//  let valor = prompt("¡Hola, dame un valor!");
//  let resultadoDelValor = 5 + parseInt(valor);

//  alert(resultadoDelValor);

/* --------- OPERADORES --------- */
// Asignación simple
var x = 0;  // x = 5
x += 5;     // x = x + 5
x -= 5;     // x = x - 5
x *= 5;     // x = x * 5
x /= 5;     // x = x / 5
x %= 5;     // x = x % 5
x **= 5;    // x = x ** 5
// Asignaciones avanzadas
x <<= 5;    // x = x << 5
x >>= 5;    // x = x >> 5
x >>>= 5;   // x = x >>> 5
x &= 5;     // x = x & 5
x ^= 5;     // x = x ^ 5
x |= 5;     // x = x | 5

// Comparativos
x = 5;
let y = "5";
// alert(x == y);  // == Compara igualdad
// alert(x != y);  // != Compara desigualdad
// alert(x === y); // Compara igualdad estricta
// alert(x !== y); // Compara desigualdad estricta
// alert(x > y);   // Compara el primero como mayor que el segundo
// alert(x >= y);  // Compara el primero como mayor o igual que el segundo
// alert(x < y);   // Compara el primero como menor que el segundo
// alert(x <= y);  // Compara el primero como menor o igual que el segundo

// Lógicos
x = true;
y = false;
let logica1 = x && y;   // Verifica que ambos valores sean true, en dicho caso devuelve true
let logica2 = x || y;   // Verifica que alguno de los valores sean true, en dicho caso devuelve true
let logica3 = !x;       // Devuelve el valor contrario al valor de la variable

// alert(logica1);
// alert(logica2);
// alert(logica3);

let num1 = 6, num2 = 12, num3 = 18, num4 = 24, num5 = 30;

let example = (num1 < num2 || num2 < num3) && (!(num1 != num2) && num5 != num3);

// alert(example);

// Convenciones de Nomenclatura
// camelCase
// PascalCase
// snake_case
// kebab-case
// dot.case
// flatcase
// Train-Case
// Javascript utiliza camelCase

/* --------- CONDICIONALES --------- */
if(true) {
    // alert("Este código solo se ejecuta si el valor del if es TRUE");
}

// EJEMPLO DE IF
if(num1 < num2){
    let resultado = `${num1} es menor que ${num2}`;
    // alert(resultado);
}

// EJEMPLO DE USO DE ELSE-IF
if(num1 > num2){
    // alert(`${num1} es MAYOR que ${num2}`);
}
else if(num1 == num2){
    // alert(`${num1} es IGUAL a ${num2}`);
}
else{
    // alert(`${num1} es MENOR que ${num2}`);
}

/*
SI(num1 ES MAYOR A num2) ENTONCES
    PASA ESTO
SINO SI (num1 ES IGUAL A num2) ENTONCES
    PASA ESTO
SINO
    PASA ESTO
*/

/* --------- ACTIVIDAD #1 --------- */
// Desarrollar un programa en JavaScript que permita calcular el promedio de tres notas de un estudiante
// (primer parcial, segundo parcial y final) y determine si el estudiante aprueba o desaprueba la materia,
// para finalizar muestra su nota y un texto que diga si está o no aprobado.


/* --------- COMPLEJIZAR LA ACTIVIDAD --------- */
// Si el promedio es menor a 4.0, mostrar en pantalla: "Desaprobado".
// Si el promedio está entre 4.0 (inclusive) y 5.9, mostrar en pantalla: "Desaprobado, pero puede recuperar".
// Si el promedio está entre 6.0 (inclusive) y 7.9, mostrar en pantalla: "Aprobado con nota justa".
// Si el promedio está entre 8.0 (inclusive) y 9.4, mostrar en pantalla: "Aprobado con buena nota".
// Si el promedio es mayor a 9.5 (inclusive), mostrar en pantalla: "Aprobado con excelencia".