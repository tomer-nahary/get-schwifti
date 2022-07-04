class Leaderboard {
    #tableElement;
    #leaders
    constructor(tableElement) {
        this.#tableElement = tableElement;
        this.#leaders = [];
    }
    addWinner(leader) {
        let index = -1;
        for (let i = 0; i < this.#leaders.length && index === -1; i++) {
            if (leader.boardLength > this.#leaders[i].boardLength ||
                (leader.boardLength == this.#leaders[i].boardLength &&
                    leader.gameLength < this.#leaders[i].gameLength)
            ) index = i;
        }
        if (index !== -1) {
            this.#leaders.splice(index, 0, leader);
            if (this.#leaders.length === 6) this.#leaders.pop();
        } else if (this.#leaders.length < 5) {
            this.#leaders.push(leader);
        }
        this.#updateTable();
    }
    #updateTable() {
        const headerRow = document.getElementById("leaderboard-header");
        this.#tableElement.innerHTML = '';
        const tbodyElement = document.createElement("tbody");
        tbodyElement.append(headerRow);
        for (let leader of this.#leaders) {
            const rowElement = document.createElement("tr");

            const levelColumn = document.createElement("td");
            levelColumn.innerText = leader.level;

            const playerNameColumn = document.createElement("td");
            playerNameColumn.innerText = leader.playerName;

            const gameLengthColumn = document.createElement("td");
            gameLengthColumn.innerText = leader.gameLength;

            const boardLengthColumn = document.createElement("td");
            boardLengthColumn.innerText = leader.boardLength;

            const dateColumn = document.createElement("td");
            dateColumn.innerText = leader.date.toDateString();

            rowElement.append(levelColumn, playerNameColumn, gameLengthColumn, boardLengthColumn, dateColumn);
            tbodyElement.append(rowElement);
        }
        this.#tableElement.append(tbodyElement);
    }
}