const cells = document.querySelectorAll('.cell');
const winner = document.getElementById("winner");

const textTurn = document.getElementById('turn');
let turn = "";
updateTurn();

//  x = [0, 2, 7, 8];
//  o = [1,3, 4, 5];

cells.forEach((cell, index) => {
    cell.addEventListener('click', () => {
        if(cell.textContent == ""){
            cell.textContent = turn;
            verifyWin(index);
            updateTurn();
        }
    });
});

function updateTurn(){
    turn = turn == "X" ? "O" : "X";
    textTurn.textContent = "Es turno de " + turn;
}

function verifyWin(clicUser){
    const combinations = [ "0,1,2", "3,4,5", "6,7,8", "0,3,6", "1,4,7", "2,5,8", "0,4,8", "2,4,6" ];
    const newCombinations = combinations.filter((item) => item.includes(clicUser));

    let countWin = 0;
    for(let i = 0; i < newCombinations.length; i++) {
        let content = newCombinations[i].split(',');
        for(let j = 0; j < content.length; j++){
            if(cells[content[j]].textContent == turn){ 
                countWin++;
            }
            else { countWin = 0; }
        }

        if(countWin >= 3){ break; }
    }

    if(countWin >= 3){
        winner.classList.add('winner');

        const textWin = document.createElement('p');
        textWin.textContent = "¡Ha ganado " + turn + "!";
        winner.appendChild(textWin);
    }

    let count = 0;
    cells.forEach(cell => {
        if(cell.textContent !== "") {
            count++;
        }
    });

    if(count >= 9) { console.log("Es un empate"); }
}

const resetButton = document.getElementById('reset-game');

resetButton.addEventListener('click', () => resetGame() );

function resetGame(){
    cells.forEach(cell => {
        cell.textContent = "";
    });

    winner.classList.remove('winner');
}
