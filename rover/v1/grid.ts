import { Direction } from './directionMap';
import { Position } from './position';

export class Grid {
    private readonly limitX: number;
    private readonly limitY: number;
    private readonly obstacles: Array<{
        x: number;
        y: number;
    }>;

    constructor(size: number[], obstacles: Array<Position>) {
        this.obstacles = obstacles;
        this.limitX = size[0];
        this.limitY = size[1];
    }

    public getPosition(position: Position, direction: Direction): Position {
        const newPosition: Position = {
            x: position.x,
            y: position.y
        };

        if (direction == Direction.NORTH) {
            newPosition.y = position.y === this.limitY ? this.limitY : newPosition.y + 1;
        } else if (direction == Direction.SOUTH) {
            newPosition.y = position.y === 0 ? 0 : newPosition.y - 1;
        } else if (direction == Direction.WEST) {
            newPosition.x = position.x === this.limitX ? this.limitX : newPosition.x + 1;
        } else {
            newPosition.x = position.x === 0 ? 0 : newPosition.x - 1;
        }

        return newPosition;
    }

    itWillBeAnObstacle(position: Position, value: Direction) {
        const newPosition: Position = this.getPosition(position, value);

        return this.obstacles.some((value: Position) => {
            return value.x === newPosition.x && value.y === newPosition.y
        });
    }
}
