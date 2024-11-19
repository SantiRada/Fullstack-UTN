const boardElement = document.getElementById("board");
const currentTurnElement = document.getElementById("currentTurn");
const resetButton = document.getElementById("resetButton");

let board = JSON.parse(localStorage.getItem("board")) || Array(9).fill("");
let currentTurn = localStorage.getItem("currentTurn") || "X";
const winner = document.querySelector('.winner');
let win = "";

// Renderiza el tablero
function renderBoard() {
  boardElement.innerHTML = "";
  board.forEach((cell, index) => {
    const cellElement = document.createElement("div");
    cellElement.classList.add("cell");
    if (cell !== "") {
      cellElement.textContent = cell;
      cellElement.classList.add("taken");
    }
    if(win === "") { cellElement.addEventListener("click", () => handleMove(index)); }
    boardElement.appendChild(cellElement);
  });
  currentTurnElement.textContent = currentTurn;
}

// Maneja el movimiento de un jugador
function handleMove(index) {
  if (board[index] === "") {
    board[index] = currentTurn;
    saveGame();
    verifyWin(index);
    renderBoard();

    currentTurn = currentTurn === "X" ? "O" : "X";
  }
}

// Guarda el estado del juego en localStorage
function saveGame() {
  localStorage.setItem("board", JSON.stringify(board));
  localStorage.setItem("currentTurn", currentTurn);
}

// Reinicia el juego
function resetGame() {
  board = Array(9).fill("");
  currentTurn = "X";
  
  winner.style.display = 'none';
  win = "";

  saveGame();
  renderBoard();
}

function verifyWin(index) {
  let posibilities = [ "0-1-2", "3-4-5", "6-7-8", "0-3-6", "1-4-7", "2-5-8", "0-4-8", "2-4-6" ];

  let countCorrect = 0;
  for(let i = 0; i < posibilities.length; i++){
    if(posibilities[i].includes(index)) {
      countCorrect = 1;
      let separate = posibilities[i].split('-');

      for(let j = 0; j < separate.length; j++){
        let num = parseInt(separate[j]); 

        if(currentTurn == board[num]) { countCorrect++; }
        else { countCorrect = 0; } 
      }

      if(countCorrect >= 3) { break; } 
    }
  }

  if(countCorrect >= 3) {
    win = currentTurn;

    conffetti();

    winner.style.display = 'flex';
    winner.innerHTML = "";
    const dataWinner = document.createElement('p');
    dataWinner.textContent = "El ganador es " + win;
    dataWinner.classList.add('win-text');
    winner.appendChild(dataWinner);
  }
  else if(board.every(value => value !== "")){
    winner.style.display = 'flex';
    winner.innerHTML = "";
    const dataWinner = document.createElement('p');
    dataWinner.textContent = "¡Es un empate!";
    dataWinner.classList.add('win-text');
    winner.appendChild(dataWinner);
  }
}

// Event listener para el botón de reinicio
resetButton.addEventListener("click", resetGame);

// Inicializa el juego
renderBoard();