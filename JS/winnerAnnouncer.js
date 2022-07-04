class WinnerAnnouncer {
    #winnerNode;
    constructor() {
        this.#winnerNode = document.getElementById("win-announce");
    }
    announceWinner() {
        this.#winnerNode.classList.add("display-win");
    }
}