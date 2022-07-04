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
        const tilesIndexes = [this.activeTile, tileIndex];
        this.activeTile = tileIndex;
        return tilesIndexes;
    }
}