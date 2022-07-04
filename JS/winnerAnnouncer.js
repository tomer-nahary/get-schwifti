class WinnerAnnouncer {
    #registerContainer;
    #registerInput;
    #registerButton;
    constructor(registerContainer, registerInput, registerButton) {
        this.#registerContainer = registerContainer;
        this.#registerInput = registerInput;
        this.#registerButton = registerButton;
        this.#addEvenetListeners();
    }
    announceWinner() {
        this.#registerContainer.classList.add("display-register-container");
        setTimeout(() => this.#registerContainer.classList.add("animate-register-container"), .1);
    }
    #addEvenetListeners() {
        this.#registerButton.addEventListener("click", () => this.#addToleaderboard());
    }
    #addToleaderboard() {
        const userName = this.#registerInput.value;
        if (!userName) return;
        this.#registerInput.value = "";
        alert(userName + " You won");
        this.#registerContainer.classList.remove("display-register-container");
        this.#registerContainer.classList.remove("animate-register-container")
    }
}