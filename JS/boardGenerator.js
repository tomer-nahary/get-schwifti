class BoardGenerator {
    constructor() {
    }
    generateBoard(length) {
        let sqrt = Math.sqrt(length);
        if (sqrt !== Math.floor(sqrt)) return null;
        let tiles = this.#generateRandomBoard(length);
        if (!this.#isValid(tiles)) this.#validate(tiles);
        return new Board(tiles, length, sqrt);
    }
    #generateRandomBoard(length) {
        let orderedBoard = this.#getOrderedBoard(length);
        let randomBoard = [];
        for (let i = 0; i < length; i++) {
            let rand = generateRandom(length - i);
            randomBoard.push(orderedBoard[rand]);
            orderedBoard.splice(rand, 1);
        }
        return randomBoard;
    }
    #getOrderedBoard(length) {
        let arr = [];
        for (let i = 0; i < length; i++) {
            arr.push(i);
        }
        return arr;
    }
    #isValid(board) {
        let counter = 0;
        for (let i = 0; i < board.length; i++) {
            board[i];
            if (board[i] !== 0) {
                for (let j = i; j < board.length; j++) {
                    if (board[j] !== 0 && board[i] > board[j]) counter++;
                }
            }
        }
        if (board.length % 2 === 0) {
            let zeroIndex = board.findIndex(n => n === 0);
            counter += zeroIndex / Math.sqrt(board.length) + 1;
        }
        return counter % 2 === 0;
    }
    #validate(board) {
        let num1 = generateRandom(board.length - 1) + 1;
        let num2 = num1;
        if (num1 === 1) num2++;
        else if (num1 === board.length - 1) num2--;
        else if (generateRandom(1) === 0) num2++;
        else num2--;
        let index1 = board.findIndex(n => n === num1);
        let index2 = board.findIndex(n => n === num2);
        let temp = board[index1];
        board[index1] = board[index2];
        board[index2] = temp;
    }
}

let generateRandom = (max) => {
    let rand = Math.random();
    return Math.floor(rand * max);
}