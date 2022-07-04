class BoardManager {
    constructor(board) {
        this.board = board;
        this.activeTile = this.#getActiveTile();
    }
    #getActiveTile() {
        for (let i = 0; i < this.board.tiles.length; i++) {
            const tile = this.board.tiles[i];
            if (tile === 0) return i;
        }
        return -1;
    }
    onTileClick(tileIndex) {
        if (!this.#checkTileValidity(Number(tileIndex))) return [false];
        const tilesIndexes = [true, this.activeTile, tileIndex];
        this.#switchTiles(this.activeTile, tileIndex);
        this.activeTile = tileIndex;
        if (this.#checkWin()) alert("you win");
        return tilesIndexes;
    }
    #checkTileValidity(tileIndex) {
        const rowsNumber = this.board.rowsNumber;
        const columnNumber = this.board.length / rowsNumber;
        if (tileIndex === this.activeTile + columnNumber ||
            tileIndex === this.activeTile - columnNumber) {
            return true;
        }
        if ((tileIndex + 1) % columnNumber !== 0 &&
            tileIndex === this.activeTile - 1) {
            return true;
        }
        if (tileIndex % columnNumber !== 0 &&
            tileIndex === this.activeTile + 1) {
            return true;
        }
        return false;
    }
    #switchTiles(index1, index2) {
        const temp = this.board.tiles[index1]
        this.board.tiles[index1] = this.board.tiles[index2];
        this.board.tiles[index2] = temp;
    }
    #checkWin() {
        for (let i = 0; i < this.board.tiles.length - 1; i++) {
            if (this.board.tiles[i] != i + 1) return false;
        }
        return true;
    }
}