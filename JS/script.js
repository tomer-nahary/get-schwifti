const generateButton = document.getElementById("generate-button");
const boardSizeElement = document.getElementById("board-size");
const increaseElement = document.getElementById("increase-size")
const decreaseElement = document.getElementById("decrease-size")
const registerContainer = document.getElementById("register-container")
const registerInput = document.getElementById("register-name");
const registerButton = document.getElementById("register-button");
const boardElement = document.getElementById("board");
const tableElement = document.getElementById("leaderboard-table");


const boardGenerator = new BoardGenerator();
const leaderboard = new Leaderboard(tableElement);
const winnerAnnouncer = new WinnerAnnouncer(registerContainer, registerInput, registerButton, leaderboard);
const sizePicker = new SizePicker(increaseElement, decreaseElement, boardSizeElement);
const boardDisplayer = new BoardDisplayer(boardElement);

function generateBoard() {
    const board = boardGenerator.generateBoard(sizePicker.getSize());
    const boardManager = new BoardManager(board, winnerAnnouncer)
    boardDisplayer.display(boardManager);
}
generateButton.addEventListener("click", generateBoard);
generateBoard();