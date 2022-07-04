class WinnerAnnouncer {
    #winnerNode;
    constructor() {
        this.#winnerNode = document.getElementById("win-announce");
    }
    reset() {
        this.#winnerNode.classList.remove("display-win");
    }
    announceWinner() {
        this.#winnerNode.classList.add("display-win");
    }
}