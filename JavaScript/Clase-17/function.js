// REPASO DE MAP
const ejemplo = [ "ejemplo", "1", "2", "3" ];
const ejemplo2 = ejemplo.map(item => item * 3);
// console.log(ejemplo2);

// REPASO DE FILTER
const elementos = [ 20, 41, 32, 103, 56 ];
const otrosElementos = elementos.filter(item => item % 2 == 0);
// console.log(otrosElementos);

// REPASO DE FOREACH
// for in for of !== forEach
const items = document.querySelectorAll('.item');

items.forEach(item => {
    item.addEventListener('click', () => {
        // console.log(item.textContent);
    });
});

// GET ELEMENT BY ID
const content = document.getElementById('content');
const listItems = content.children;
// console.log(content);
// querySelector querySelectorAll getElementById
// :last-child
const firstItem = content.firstElementChild;
const lastItem = content.lastElementChild;
const previousBrother = content.previousElementSibling;
const nextBrother = content.nextElementSibling;
const firstItemNode = content.parentNode;

