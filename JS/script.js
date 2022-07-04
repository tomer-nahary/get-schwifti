let boardElement = document.getElementById("board");
let boardGenerator = new BoardGenerator();
let board = boardGenerator.generateBoard(4);
let winnerAnnouncer = new WinnerAnnouncer();
if (board) {
    let boardManager = new BoardManager(board, winnerAnnouncer)
    let boardDisplayer = new BoardDisplayer(boardElement);
    boardDisplayer.display(boardManager);

}
