let boardElement = document.getElementById("board");
let boardGenerator = new BoardGenerator();
let board = boardGenerator.generateBoard(9);
if (board) {
    let boardManager = new BoardManager(board)
    let boardDisplayer = new BoardDisplayer(boardElement);
    boardDisplayer.display(boardManager);

}
