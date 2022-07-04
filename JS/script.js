const generateButton = document.getElementById("generate-button");
const boardSizeElement = document.getElementById("board-size");
const increaseElement = document.getElementById("increase-size")
const decreaseElement = document.getElementById("decrease-size")
const boardElement = document.getElementById("board");

const boardGenerator = new BoardGenerator();
const winnerAnnouncer = new WinnerAnnouncer();
const sizePicker = new SizePicker(increaseElement, decreaseElement, boardSizeElement);
const boardDisplayer = new BoardDisplayer(boardElement);


function generateBoard() {
    winnerAnnouncer.reset();
    const board = boardGenerator.generateBoard(sizePicker.getSize());
    const boardManager = new BoardManager(board, winnerAnnouncer)
    boardDisplayer.display(boardManager);
}
generateButton.addEventListener("click", generateBoard);

