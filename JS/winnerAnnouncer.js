class WinnerAnnouncer {
    #registerContainer;
    #registerInput;
    #registerButton;
    #leaderboard
    #leader;

    constructor(registerContainer, registerInput, registerButton, leaderboard) {
        this.#registerContainer = registerContainer;
        this.#registerInput = registerInput;
        this.#registerButton = registerButton;
        this.#leaderboard = leaderboard;
        this.#addEvenetListeners();
    }
    announceWinner(leader) {
        this.#leader = leader;
        this.#registerContainer.classList.add("display-register-container");
        setTimeout(() => this.#registerContainer.classList.add("animate-register-container"), .1);
    }
    #addEvenetListeners() {
        this.#registerButton.addEventListener("click", () => this.#addToleaderboard());
    }
    #addToleaderboard() {
        const userName = this.#registerInput.value;
        if (!userName) return;
        this.#leader.playerName = userName;
        this.#leaderboard.addWinner(this.#leader);
        this.#registerInput.value = "";
        this.#registerContainer.classList.remove("display-register-container");
        this.#registerContainer.classList.remove("animate-register-container")
    }
}