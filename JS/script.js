let boardElement = document.getElementById("board");
let boardGenerator = new BoardGenerator();
let boardDisplayer = new BoardDisplayer(boardElement);
let board = boardGenerator.generateBoard(4);
boardDisplayer.display(board);
