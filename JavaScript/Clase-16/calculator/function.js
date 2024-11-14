// ELEMENTS OF THE CALCULATOR
const input = document.getElementById('input');
const output = document.getElementById('output');
const buttons = document.querySelectorAll('.btn');

// FUNCTIONS
const trash = document.getElementById('trash');
const deleteBtn = document.getElementById('delete');
const equal = document.getElementById('equal');

const keys = [ "0", "1", "2", "3", "4", "5", "6", "7", "8", "9", ".", "*", "-", "+", "/", "(", ")" ];
const keyTrash = "Escape";
const keyDelete = "Backspace";
const keyEqual = [ "Enter", "Return", "=" ];

// ARRAY BUTTONS
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        if(btn.textContent !== "") {
            input.value += btn.textContent;
        }
    });
});

// FUNCTION BUTTONS
trash.addEventListener('click', () => { removeContent(); });
deleteBtn.addEventListener('click', () => { deleteContent(); });
equal.addEventListener('click', () => { evalContent(); });

// KEYS FUNCTIONS
document.addEventListener("keydown", (event) => {
    if(event.key === keyTrash){
        removeContent();
        return;
    }

    if(event.key === keyDelete){
        deleteContent();
        return;
    }

    for(let key of keyEqual){
        if(event.key === key){
            evalContent();
            return;
        }
    }

    for(let key of keys){
        if(key == event.key){
            input.value += key;
            return;
        }
    }
});

// FUNCTIONS CALCULATOR
function removeContent(){
    input.value = "";
    output.value = "";
}
function deleteContent(){
    let value = input.value.slice(0, -1);
    input.value = value;
    output.value = "";
}
function evalContent(){
    const validInputPattern = /^[0-9+\-*/().\s]*$/;

    if (!validInputPattern.test(input.value)) {
        output.value = "Invalid Input";
        return;
    }

    let result = eval(input.value);

    if (!isNaN(result)) {
        if (Number.isInteger(result)) { output.value = result; }
        else { output.value = result.toFixed(5); }
    } else {
        output.value = "Syntax Error";
    }
}