import { Player, TicTacToe } from '../ticTacToe';

describe('when playing', () => {
    it('the current player is X', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        expect(ticTacToe.currentPlayer).toBe(Player.X);
    });

    it('the second player is O', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(0);
        expect(ticTacToe.currentPlayer).toBe(Player.O);
    });

    it('player alternates', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(0);
        ticTacToe.play(1);
        expect(ticTacToe.currentPlayer).toBe(Player.X);
    });

    it('no player are winner when there are not 3 X or O on the same line', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(0);
        ticTacToe.play(1);
        expect(ticTacToe.winner).toBeUndefined();
    });

    it('first player win when three X are drawn horizontally on top', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(0);
        ticTacToe.play(3);
        ticTacToe.play(1);
        ticTacToe.play(4);
        ticTacToe.play(2);
        expect(ticTacToe.winner).toBe(Player.X);
    });

    it('second player win when three O are drawn horizontally on top', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(3);
        ticTacToe.play(0);
        ticTacToe.play(4);
        ticTacToe.play(1);
        ticTacToe.play(6);
        ticTacToe.play(2);
        expect(ticTacToe.winner).toBe(Player.O);
    });

    it('player win when three of the same symbol are drawn horizontally on the middle', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(3);
        ticTacToe.play(6);
        ticTacToe.play(4);
        ticTacToe.play(7);
        ticTacToe.play(5);
        expect(ticTacToe.winner).toBe(Player.X);
    });

    it('player win when three of the same symbol are drawn horizontally on the bottom', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(6);
        ticTacToe.play(1);
        ticTacToe.play(7);
        ticTacToe.play(2);
        ticTacToe.play(8);
        expect(ticTacToe.winner).toBe(Player.X);
    });

    it('player win when three of the same symbol are drawn vertically on the left', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(0);
        ticTacToe.play(1);
        ticTacToe.play(3);
        ticTacToe.play(2);
        ticTacToe.play(6);
        expect(ticTacToe.winner).toBe(Player.X);
    });

    it('player win when three of the same symbol are drawn vertically on the middle', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(1);
        ticTacToe.play(0);
        ticTacToe.play(4);
        ticTacToe.play(2);
        ticTacToe.play(7);
        expect(ticTacToe.winner).toBe(Player.X);
    });

    it('player win when three of the same symbol are drawn vertically on the right', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(2);
        ticTacToe.play(0);
        ticTacToe.play(5);
        ticTacToe.play(1);
        ticTacToe.play(8);
        expect(ticTacToe.winner).toBe(Player.X);
    });

    it('player cannot override existing cell', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(2);
        expect(() => {
            ticTacToe.play(2);
        }).toThrowError("Cannot override existing cell");
    });

    it('player win when three of the same symbol are drawn in a diagonal from the left', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(0);
        ticTacToe.play(1);
        ticTacToe.play(4);
        ticTacToe.play(2);
        ticTacToe.play(8);
        expect(ticTacToe.winner).toBe(Player.X);
    });

    it('player win when three of the same symbol are drawn in a diagonal from the right', () => {
        const ticTacToe: TicTacToe = new TicTacToe();
        ticTacToe.play(2);
        ticTacToe.play(1);
        ticTacToe.play(4);
        ticTacToe.play(5);
        ticTacToe.play(6);
        expect(ticTacToe.winner).toBe(Player.X);
    });
});
