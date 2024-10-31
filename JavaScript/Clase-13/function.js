// Esto es un comentario
/* Esto es un comentario
Sigo con el comentario */

// TIPOS DE VARIABLES // string - char - int - uint - float - double - bool
let nombreDeVariable = 50;

nombreDeVariable = 25;
// Declaración - Inicialización - Modificación
let variableString = "Hola, esta es la primera clase";
let variableChar = 'a';
let variableInt = 14;
let variableFloat = 14.5;
let variableUInt = 3000;
let variableDouble = 14.435674567456756756;
let variableBool = true; // false

variableString = 12;

// alert(variableString);

let formaBasica = "Lo que sea";
var formaSecundaria = "Cualquier otra cosa";
const formaFinal = 3.1417;
// alert(formaFinal);

let num1 = "Edad: ";
let num2 = 42;
// alert(num1 + num2);

let num3;
// alert(num3);

let num4 = 5, num5 = 12, num6 = 24;
// let num4 = 5;
// let num5 = 12;
// let num6 = 24;

let nombre = "Juan Pablo";

// alert(`Hola, ${nombre} ¿Cómo estás?`);
// alert("Hola, " + nombre + " ¿Cómo estás?");
// alert("Hola, \"" + nombre + "\"");

let num7 = 10;
let num8 = 6;
// alert(num7 + num8 + " Resultado " + (num7 + num8));
// alert("Resultado: " + (num7 % num8));
// alert("Resultado: " + (num7 **= 2));

// OPERADORES COMPARATIVOS
num1 = 10;
num2 = 5;
num4 = 15;
// alert(num1 == num2); IGUALACIÓN
// alert(num1 > num2); MAYOR QUE
// alert(num1 < num2); MENOR QUE
// alert(num1 >= num2); MAYOR O IGUAL QUE
// alert(num1 <= num2); MENOR O IGUAL QUE
// alert(num1 != num2); DIFERENTES
// alert(num1 === num2); IGUALACIÓN

// OPERADORES LÓGICOS
// num3 = (num1 >= num2) && (num2 != num1); AND
// num3 = (num1 <= num2) || (num2 != num1); OR
// num3 = !(num1 <= num2); NOT
// num3 = !(num1 <= num2) && ((num2 == num4) || (num1 > num4));

let camelCase; // Para Variables
let PascalCase; // Para funciones
let snake_case; // Otra opción para Variables
// let kebab-case;
// let dot.case;
let flatcase;
// let Train-Case;

// Si () entonces () fin
if (num1 <= num2){
    alert("El número 1 es menor o igual que el número 2");
}

let restaurante = 3;

// if(restaurante <= 4) {
//     alert("El restaurante abrió hace " + restaurante + " horas");

//     // IF ANIDADO
//     if(restaurante <= 2) { alert("Abrió hace poco..."); }
//     else { alert("Abrió hace un rato..."); }
// }
// else if(restaurante <= 8) {
//     alert("El restaurante abrió hace " + restaurante + " horas");
// }
// else {
//     alert("El restaurante está cerrado");
// }

/*
SI restaurante es "true" ENTONCES
    alert()
SINO 
    alert
FIN
*/

// Desarrollar un programa en JavaScript que permita calcular el promedio de tres notas de un estudiante
// (primer parcial, segundo parcial y final) y determine si el estudiante aprueba o desaprueba la materia,
// para finalizar muestra su nota y un texto que diga si está o no aprobado.

// ---- RESULTADO CORRECTO ---- //
// let nota1 = 7;
// let nota2 = 7;
// let nota3 = 6;
// resultado =  (nota1 + nota2 + nota3) / 3;
// if (resultado >= 7) { alert("aprobo con " + resultado); }
// else { alert("reprobo con " + resultado); };

/* --------- COMPLEJIZAR LA ACTIVIDAD --------- */
// Si el promedio es menor a 4.0, mostrar en pantalla: "Desaprobado".
// Si el promedio está entre 4.0 (inclusive) y 5.9, mostrar en pantalla: "Desaprobado, pero puede recuperar".
// Si el promedio está entre 6.0 (inclusive) y 7.9, mostrar en pantalla: "Aprobado con nota justa".
// Si el promedio está entre 8.0 (inclusive) y 9.4, mostrar en pantalla: "Aprobado con buena nota".
// Si el promedio es mayor a 9.5 (inclusive), mostrar en pantalla: "Aprobado con excelencia".

let nota1 = 8;
let nota2 = 9;
let nota3 = 7;
var promedio = (nota1 + nota2 + nota3) / 3;
let condicion;

if (promedio >= 7){
    condicion = "aprobado";
}
else {
    condicion = "desaprobado";
}

alert ("las notas son: " + nota1 + ", " + nota2 + ", " + nota3);
alert ("el promedio es: " + promedio);
alert ("el alumno está: " + condicion);