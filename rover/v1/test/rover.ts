import { Rover } from '../rover';
import { Grid } from '../grid';

const grid: Grid = new Grid([10, 10], [
    {
        x: 1,
        y: 4
    }
]);

describe('when rotating right', () => {

    it('should rotate to West', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("R")).toBe("0:0:W");
    });

    it('should rotate to South', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("RR")).toBe("0:0:S");
    });

    it('should rotate to Est', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("RRR")).toBe("0:0:E");
    });

    it('should rotate to North', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("RRRR")).toBe("0:0:N");
    });
});

describe('when rotating left', () => {
    it('should rotate to Est', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("L")).toBe("0:0:E");
    });

    it('should rotate to South', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("LL")).toBe("0:0:S");
    });

    it('should rotate to West', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("LLL")).toBe("0:0:W");
    });

    it('should rotate to North', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("LLLL")).toBe("0:0:N");
    });
});

describe('when moving', () => {
    it('should move North', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("MMM")).toBe("0:3:N");
    });

    it('should move North', () => {
        const rover: Rover = new Rover(grid);
        rover.commands("M");

        expect(rover.commands("MM")).toBe("0:3:N");
    });

    it('should move West', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("RMM")).toBe("2:0:W");
    });
});


describe('when moving outside the grid', () => {
    it('should prevent to go outside', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("MMMMMMMMMMM")).toBe("0:10:N");
    });

    it('should prevent to go outside', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("RRM")).toBe("0:0:S");
    });

    it('should prevent to go outside', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("RRRM")).toBe("0:0:E");
    });

    it('should prevent to go outside', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("RMMMMMMMMMMM")).toBe("10:0:W");
    });

    it('should prevent to go outside but be able to go into another direction', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("RMMMMMMMMMMMLLMM")).toBe("8:0:E");
    });
});

describe('when moving into an obstacle', () => {
    it('should stop', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("MMMMRM")).toBe("O:0:4:W");
    });

    it('should not do any other movements', () => {
        const rover: Rover = new Rover(grid);
        expect(rover.commands("MMMMRMLM")).toBe("O:0:4:W");
    });
});

