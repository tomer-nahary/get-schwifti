class SizePicker {
    #size;
    #increaseElement;
    #decreaseElement;
    #sizeElement;
    constructor(increaseElement, decreaseElement, sizeElement) {
        this.#size = 2;
        this.#increaseElement = increaseElement;
        this.#decreaseElement = decreaseElement;
        this.#sizeElement = sizeElement;
        this.#addEvenetListeners()
    }
    getSize() {
        return Math.pow(this.#size, 2);
    }
    #changeSize(diff) {
        if (this.#size + diff < 2) return;
        this.#size += diff;
        this.#sizeElement.innerText = Math.pow(this.#size, 2);
    }
    #addEvenetListeners() {
        this.#increaseElement.addEventListener("click", () => this.#changeSize(1));
        this.#decreaseElement.addEventListener("click", () => this.#changeSize(-1));
    }
}