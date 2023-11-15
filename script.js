let currentPlayer = 'X';
let gameActive = true;
let gameState = ['', '', '', '', '', '', '', '', ''];

const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

function cellClick(cellIndex) {
    if (!gameActive || gameState[cellIndex] !== '') return;

    gameState[cellIndex] = currentPlayer;
    document.getElementById(cellIndex).innerText = currentPlayer;

    checkWin();
    checkDraw();

    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
}

function checkWin() {
    winConditions.forEach(condition => {
        const a = gameState[condition[0]];
        const b = gameState[condition[1]];
        const c = gameState[condition[2]];

        if (a !== '' && a === b && b === c) {
            gameActive = false;
            highlightWin(condition);
            alert(Player ${a} wins!);
        }
    });
}

function checkDraw() {
    if (!gameState.includes('') && gameActive) {
        gameActive = false;
        alert("It's a draw!");
    }
}

function highlightWin(cells) {
    cells.forEach(cell => {
        document.getElementById(cell).classList.add('win');
    });
}

function resetGame() {
    gameState = ['', '', '', '', '', '', '', '', ''];
    gameActive = true;
    currentPlayer = 'X';
    document.querySelectorAll('.cell').forEach(cell => {
        cell.innerText = '';
        cell.classList.remove('win');
    });
}