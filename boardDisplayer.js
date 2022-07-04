class BoardDisplayer {
    #rootNode;
    constructor(rootNode) {
        this.#rootNode = rootNode;
    }
    display(boardManager) {
        const board = boardManager.board;
        this.#rootNode.innerHTML = "";
        for (let i = 0; i < board.rowsNumber; i++) {
            let rowElement = document.createElement("div");
            rowElement.classList.add("board-row");
            this.#rootNode.append(rowElement);
            for (let j = 0; j < board.length / board.rowsNumber; j++) {
                const tileIndex = i * board.rowsNumber + j;
                const tileNumber = board.tiles[tileIndex];
                const tileElement = document.createElement("div");
                tileElement.classList.add("board-tile");
                tileElement.id = getTileId(tileIndex);
                tileElement.innerText = tileNumber;
                tileElement.addEventListener("click", () => this.#onTileClicked(boardManager, tileIndex))
                rowElement.append(tileElement);
            }
        }
        board.rowsNumber
    }
    #onTileClicked(boardManager, tileIndex) {
        let [isMoveValie, index1, index2] = boardManager.onTileClick(tileIndex);
        if (!isMoveValie) return;
        this.#switchTiles(index1, index2);
    }
    #switchTiles(index1, index2) {
        const tile1 = document.getElementById(getTileId(index1));
        const tile2 = document.getElementById(getTileId(index2));
        const temp = tile1.innerText;
        tile1.innerText = tile2.innerText;
        tile2.innerText = temp;
    }
}

const getTileId = (tileIndex) => `board-tile-${tileIndex}`;