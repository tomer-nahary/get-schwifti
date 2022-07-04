class BoardDisplayer {
    #rootNode;
    constructor(rootNode) {
        this.#rootNode = rootNode;
        console.log(this.#rootNode);
    }
    display(board) {
        for (let i = 0; i < board.rowsNumber; i++) {
            let rowElement = document.createElement("div");
            rowElement.classList.add("board-row");
            this.#rootNode.append(rowElement);
            for (let j = 0; j < board.length / board.rowsNumber; j++) {
                let tileNumber = board.tiles[i * board.rowsNumber + j];
                let tileElement = document.createElement("div");
                tileElement.classList.add("board-tile");
                tileElement.id = `board-tile-${tileNumber}`
                tileElement.innerText = tileNumber;
                rowElement.append(tileElement);
            }
        }
        board.rowsNumber
    }
}