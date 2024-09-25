/* --------- ARRAYS --------- */
// Declaración con inicialización
let array = ["texto 1", "texto 2", "texto 3"];
// alert(array);
// alert(array[2]);
// alert(array[25]);

// Solo declaración
let array2 = [];
// alert(array2);
// Inicialización
array2 = [1, 2, 3];
// alert(array2);

// Arrays asociativos
let alumnos = {
    nombre: "Javier",
    edad: 25,
    diplomatura: "Fullstack"
};

// alert(alumnos["edad"]);

let ejemplo1 = `<p>El alumno ${alumnos["nombre"]} <br>Tiene ${alumnos["edad"]} años <br>Y está en la diplomatura ${alumnos["diplomatura"]}</p>`;

// document.write(ejemplo1);

/* --------- SWITCH --------- */
let var1 = "S";
// let var1 = prompt("Digite UNA tecla:");
switch(var1){
    case "Q": alert("Se usó la habilidad 1"); break;
    case "W": alert("Se usó la habilidad 2"); break;
    case "E": alert("Se usó la habilidad 3"); break;
    case "R": alert("Se usó la habilidad definitiva"); break;
    // default: alert("No se utilizó ninguna habilidad"); break;
}

if(var1 == "Q"){
    // alert("Se usó la habilidad 1");
}
else if(var1 == "W"){
    // alert("Se usó la habilidad 2");
}
else if(var1 == "E"){
    // alert("Se usó la habilidad 3");
}
else if(var1 == "R"){
    // alert("Se usó la habilidad definitiva");
}
else{
    // alert("No se utilizó ninguna habilidad");
}

/* --------- WHILE --------- */
// BUCLE INDETERMINADO = No le decimos cuantas vueltas va a dar
let numero = 10;
while (numero > 5){
    // document.write("<p>" + numero + "</p>");
    numero--;
    
    // if(numero == 7) { break; }
}

/* --------- DO-WHILE --------- */
do{
    // document.write("<p>" + numero + "</p>");
    numero--;
} while(numero > 5);

/* --------- FOR --------- */
// Declaración e inicialización + Condicion + Aumento o Decremento
numero = 10;
for (var i = 0; i < numero; i++){
    if(i == 2){
        continue;
    }
    // document.write("<p>" + i + "</p>");

    if(i == 4){
        break;
    }
}

// alert(i); // Ejemplo de SCOPE por usar VAR

/* --------- FOR IN --------- */
let animales = ["tortuga", "erizo", "bandicoot"];

for (animal in animales) {
    // document.write("<p>" + animal + ": " + animales[animal] + "</p>");
}

/* --------- FOR OF --------- */
for (animal of animales) {
    // document.write("<p>" + animal + "</p>");
}

let caso1 = [ "juan", "joaquin", "josefina" ];
let caso2 = [ "pedro", "patricia", caso1, "picasso" ];

// Label para el FOR padre
forEjemplo:
for(let array in caso2){
    if(array == 2){
        for(let array of caso2[2]){
            // document.write("<p>" + array + "</p>");
            // break; // En este caso solo se termina el for cercano
            break forEjemplo; // Ahora se termina el for que tenga el label
        }
    }else{
        // document.write("<p>" + caso2[array] + "</p>");
    }
}

/* --------- FUNCTION --------- */
// saludar();
// saludar();
// saludar();
// saludar();
// Primera forma de crear una función
function saludar(){
    let respuesta = prompt("¡Hola!, ¿como fue tu día?");

    if(respuesta == "bien"){ alert("¡Me alegro!"); }
    else{ alert("Que pena"); }
}

// Segunda forma de crear una función
saludar2 = function(){
    alert("¡Segundo saludo!");
}

// saludar2();

function saludar3(){
    // alert("Caso 3");
    return "Se ejecutó el caso 3";
}

let caso3 = saludar3();
// document.write("<p>" + caso3 + "</p>");

// Ejemplo de parámetros
function showText(text) { return "<p>" + text + "</p>"; }
// document.write(showText(caso3));

// Segundo ejemplo
let text = "El resultado de la suma es: " + suma(12, 24);
// document.write(showText(text));

// Parámetros para simplificar funciones
function suma(a, b){
    let res = a + b;
    return res;
}

const saludar4 = function(nombre){
    let frase = `¡Hola ${nombre}!, ¿como estás?`;
    document.write(showText(frase));
}

// saludar4("Pedro");

// Tercera forma de crear una función
// const saludar5 = (nombre) => {
//     let frase = `¡Hola ${nombre}!, ¿Cómo estás?`;
//     document.write(showText(frase));
// }
// saludar5(prompt("¿Cómo te llamas?"));

// const saludar5 = (nombre) => frase = `¡Hola ${nombre}!, ¿Cómo estás?`;
// document.write(showText(saludar5(prompt("¿Cómo te llamas?"))));

/* --------- ACTIVIDAD #1 --------- */
// Definir preguntas y respuestas correctas
let preguntas = [
    "¿Cuánto es 5 + 3?",
    "¿Cuánto es 12 - 4?",
    "¿Cuánto es 6 * 7?"
];
let respuestasCorrectas = [8, 8, 42];
let respuestasUsuario = [];
let puntaje = 0;

// Solicitar respuestas del usuario
for (let i = 0; i < preguntas.length; i++) {
    let respuesta = parseInt(prompt(preguntas[i]));
    respuestasUsuario.push(respuesta);
    
    // Evaluar respuesta
    if (respuesta === respuestasCorrectas[i]) {
        puntaje++;
    }
}

// Mostrar resultados
document.write("<h2>Resultados del Quiz:</h2>");
for (let i in preguntas) {
    document.write(`<p>Pregunta: ${preguntas[i]}<br>Tu respuesta: ${respuestasUsuario[i]}<br>Respuesta correcta: ${respuestasCorrectas[i]}</p>`);
}

document.write(`<p><strong>Puntaje Total: ${puntaje} de ${preguntas.length}</strong></p>`);

// Mostrar mensaje final
if (puntaje === preguntas.length) {
    alert("¡Felicidades! Has dado todas las respuestas de forma correcta.");
} else if (puntaje >= preguntas.length / 2) {
    alert("¡Bien hecho! Has dado la mitad o más de las preguntas correctamente. Sigue practicando.");
} else {
    alert("Necesitas mejorar. Revisa los conceptos y vuelve a intentar el quiz.");
}

/* --------- ACTIVIDAD #2 --------- */


/* --------- ACTIVIDAD #3 --------- */

