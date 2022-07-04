class BoardManager {
    #gameWon;
    #startTime
    constructor(board, winnerAnnouncer) {
        this.board = board;
        this.winnerAnnouncer = winnerAnnouncer;
        this.#gameWon = false;
        this.activeTile = this.#getActiveTile();
        this.#startTime = new Date();
    }
    #getActiveTile() {
        for (let i = 0; i < this.board.tiles.length; i++) {
            const tile = this.board.tiles[i];
            if (tile === 0) return i;
        }
        return -1;
    }
    onTileClick(tileIndex) {
        if (this.#gameWon || !this.#checkTileValidity(Number(tileIndex))) return [false];
        const tilesIndexes = [true, this.activeTile, tileIndex];
        this.#switchTiles(this.activeTile, tileIndex);
        this.activeTile = tileIndex;
        if (this.#checkWin()) {
            const gameLength = Math.floor((new Date() - this.#startTime) / 1000)
            const boardLength = this.board.length;
            const leader = new Leader("רב אלוף", "", gameLength, boardLength, this.#startTime)
            this.#gameWon = true;
            this.winnerAnnouncer.announceWinner(leader);
        }
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