const picker = document.getElementById('picker');
const bar = document.getElementById('bar');

const selectable = document.getElementById('color');

const redInput = document.getElementById('red');
const greenInput = document.getElementById('green');
const blueInput = document.getElementById('blue');

const hueInput = document.getElementById('hue');
const saturationInput = document.getElementById('saturation');
const lightnessInput = document.getElementById('lightness');

let hue = 0;
let saturation = 0;
let lightness = 0;

function CreateHueBar(){
    for(let i = 0; i < 24; i++) {
        const item = document.createElement('div');
        item.classList.add('item-bar');
        item.style.backgroundColor = "hsl(" + (i * 330 / 23) + ", 50%, 50%)";
        item.addEventListener('click', () => ModifyHue((i * 330 / 23)));
        bar.appendChild(item);
    }
}

function ModifyHue(color){
    hue = Math.floor(color);
    AddColors();
}

function AddColors(){
    picker.innerHTML = "";
    for(let i = 9; i >= 0; i--){
        const div = document.createElement('div');
        div.classList.add('list');
        picker.appendChild(div);
        for(let j = 9; j >= 0; j--){
            const item = document.createElement('div');
            item.classList.add('item');

            item.style.backgroundColor = WorkColor(hue, j, i);

            item.addEventListener('click', () => {
                changeColor(item.style.backgroundColor, j, i);
            });
            div.appendChild(item);
        }
    }
}

function changeColor(color,j, i){
    selectable.style.backgroundColor = color;

    color = color.replace('rgb(', '').replace(')', '');
    let separate = color.trim().split(',');
    let r = separate[0];
    let g = separate[1];
    let b = separate[2];

    let hsl = WorkColor(hue, j, i).replace('hsl(', '');
    hsl = hsl.replace(')', '');
    let separateHSL = hsl.trim().split(',');

    hue = separateHSL[0];
    saturation = separateHSL[1];
    lightness = separateHSL[2];

    redInput.value = r;
    greenInput.value = g;
    blueInput.value = b;
    hueInput.value = hue;
    saturationInput.value = saturation;
    lightnessInput.value = lightness;
}

function WorkColor(h, s, l){
    s = Math.floor(-100/9 * s + 100);
    l = Math.floor(l * 100 / 9);

    return "hsl(" + h + ", " + s + "%, " + l + "%)";
}

selectable.addEventListener('click', () => {
    copyToClipboard(selectable.style.backgroundColor);
});

function copyToClipboard(value){
    navigator.clipboard.writeText(value);
    alert("Código RGB copiado al portapapeles");
}

AddColors();
CreateHueBar();