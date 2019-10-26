export enum Player {
    X,
    O
}
export class TicTacToe {
    public currentPlayer: Player = Player.X;
    public winner: Player;
    private grid: Player[] = [];

    public play(cell: number): void {
        if (this.isCellPopulatedByAPlayer(cell)) {
            throw new Error("Cannot override existing cell");
        }

        this.grid[cell] = this.currentPlayer;

        this.checkAndAssignHorizontalWinner();
        this.checkAndAssignVerticalWinner();
        this.checkAndAssignDiagonalWinner();
        this.changePlayer();
    }

    private checkAndAssignHorizontalWinner(): void {
        let i = 0;
        while(i < 9) {
            const cellA = i;
            const cellB = i + 1;
            const cellC = i + 2;

            if (this.isSamePlayerOn(cellA, cellB, cellC)) {
                this.winner = this.grid[cellA];
            }

            i = i + 3;
        }
    }


    private checkAndAssignVerticalWinner(): void {
        let i = 0;
        while(i < 3) {
            const cellA = i;
            const cellB = i + 3;
            const cellC = i + 6;
            if (this.isSamePlayerOn(cellA, cellB, cellC)) {
                this.winner = this.grid[cellA];
            }

            i++;
        }
    }


    private checkAndAssignDiagonalWinner(): void {
        if (this.isSamePlayerOn(0, 4, 8)) {
            this.winner = this.grid[0];
        }

        if (this.isSamePlayerOn(2, 4, 6)) {
            this.winner = this.grid[2];
        }
    }

    private isSamePlayerOn(a: number, b: number, c: number): boolean {
        const isAPlayer: boolean = this.isCellPopulatedByAPlayer(a);
        return isAPlayer && this.grid[a] === this.grid[b] && this.grid[b] === this.grid[c];
    }

    private changePlayer(): void {
        if (this.currentPlayer === Player.O) {
            this.currentPlayer = Player.X;
        } else {
            this.currentPlayer = Player.O;
        }
    }

    private isCellPopulatedByAPlayer(cell: number): boolean {
        return this.grid[cell] === Player.O || this.grid[cell] === Player.X;
    }
}
