const select = document.getElementById('option');
const elements = document.getElementById('elements');

let winPC = 0, winUser = 0;

select.addEventListener('change', () => {

    // 0 = piedra 1 = papel 2 = tijera
    if(select.value != ''){
        let selectUser = select.value;

        // Condicional ternario/terciario
        selectUser = selectUser == "piedra" ? 0 : selectUser == "papel" ? 1 : 2;

        const selectPC = Math.floor(Math.random() * 3);
        const resultado = quienGana(selectUser, selectPC);

        const item = document.createElement('a');
        item.textContent = transcribir(selectUser);
        elements.appendChild(item);

        const item2 = document.createElement('a');
        item2.textContent = transcribir(selectPC);
        elements.appendChild(item2);
        
        const item3 = document.createElement('a');
        item3.textContent = resultado;
        elements.appendChild(item3);
    }
});
function transcribir(a){
    let value;
    switch(a){
        case 0: value = "Piedra"; break;
        case 1: value = "Papel"; break;
        case 2: value = "Tijera"; break;
    }

    return value;
}
function quienGana(user, pc){
    if(user === pc){ return "empate"; }

    let value;

    switch(user){
        case 0: if(pc == 2) { value = "Ganó el usuario"; } else { value = "Ganó la PC"; } break;
        case 1: if(pc == 0) { value = "Ganó el usuario"; } else { value = "Ganó la PC"; } break;
        case 2: if(pc == 1) { value = "Ganó el usuario"; } else { value = "Ganó la PC"; } break;
    }

    if(value.includes('PC')) { winPC++; }
    else { winUser++; }

    return value;
}