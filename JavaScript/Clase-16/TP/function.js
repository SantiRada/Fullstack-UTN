// SIRVE PARA ENCONTRAR UN LISTADO DE ELEMENTOS DE LA UI CON CLASE ".BTN"
const buttons = document.querySelectorAll('.btn'); // Busca todos los elementos de la clase ".btn"
const input = document.getElementById('input'); // Busca el elemento de id "input"
const output = document.getElementById('output');

// SPECIAL BUTTONS
const trash = document.getElementById("trash");
const deleteBtn = document.getElementById("delete");
const equal = document.getElementById("equal");

// KEYBOARD BUTTONS
const keys = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "+", "-", "*", "/", "(", ")", ".", "Enter", "Escape", "Backspace" ];

document.addEventListener('keydown', (e) => {
    keys.forEach(key => {
        if(key === e.key){
            switch(key){
                case "Enter": equalContent(); break;
                case "Escape": removeContent(); break;
                case "Backspace": deleteChar(); break;
                default: input.value += key; break;
            }
        }
    });
});

// SIRVE PARA RECORRER EL ARRAY Y HACER UNA FUNCIÓN CON CADA ITERACIÓN
buttons.forEach(btn => {
    // PREGUNTA SI SE CLIQUEO EL ELEMENTO
    btn.addEventListener('click', () => {
        input.value += btn.textContent;
    });
});
trash.addEventListener('click', () => {
    removeContent();
});
deleteBtn.addEventListener('click', () => {
    deleteChar();
});
equal.addEventListener('click', () => {
    equalContent();
});

function removeContent() {
    input.value = "";
    output.value = "";
}
function deleteChar(){
    let value = input.value.slice(0, -1);
    input.value = value;
    output.value = "";
}
function equalContent() {
    output.value = eval(input.value);
}


const numbersReduce = [ 1, 2, 3, 4, 5, 6, 7, 8 ];

const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

console.log("SUMA: ", sum);

const users = [ "Joaquin", "Facundo", "Jeremias", "Gonzalo", "Facundo", "Roberto", "Gonzalo", "Facundo" ];

const countUsers = users.reduce((acc, currentValue) => {
    if(acc[currentValue]) { acc[currentValue]++; }
    else { acc[currentValue] = 1; }

    return acc;
}, {});

const amount = Object.values(countUsers).find(item => item > 2);

// console.log(amount);

const list = [ 10, 20, 30, 40, 50, 60, 70, 80, 90, 100 ];

const newList = list.slice(4, 7);
// const newList = list.slice(3);
// const newList = list.slice(-2);
// console.log(newList);

const array01 = [ 1, 2, 3 ];
const array02 = [ 4, 5, 6 ];

// Spread Operator
const array03 = [...array01, ...array02];
console.log(array03);

function sum(a,b,c){
    return a + b + c;
}

sum(...array01); // Se envía como 1, 2, 3 no como ARRAY

// Agregar elementos
// [ 1, 2, 3, 4 ]
// [ 2, 4, 6, 8 ]
// [ 2, 4, 6 ]
// 2 + 4 + 6 = 12
const array04 = [...array01, 4].map(item => item * 2).filter(item => item < 8).reduce((acc, value) => acc + value, 0);
console.log(array04);

const parent = document.getElementById('parent');

// primer hijo del parent
const firstChildren = parent.firstElementChild;
// último hijo del parent
const lastChildren = parent.lastElementChild;

// Hermano anterior del parent
const previousElementSibling = parent.previousElementSibling;
// hermano posterior del parent
const nextElementSibling = parent.nextElementSibling;

// <div id="primero">Div 1</div>
// <!-- Comentario -->
// <p id="segundo">Párrafo</p>
// <div id="tercero">Div 2</div>
let nodo = document.getElementById("primero");

console.log(nodo.nextSibling);         // Devuelve el comentario
console.log(nodo.nextElementSibling);  // Devuelve el <p id="segundo">

// const parent2 = children.parentNode; TRAE AL NODO PADRE
// const parent3 = childre.parentElement; TRAE AL ELEMENTO PADRE
// const grandGrandParent = childen.closest("nav") TRAE AL NAV MÁS CERCANO (hacia arriba)

const frutas = [ "banana", "manzana", "naranja", "melon" ];

const inputt = document.getElementById('input');

inputt.addEventListener('change', () => {
    const value = inputt.value;

    
});