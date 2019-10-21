import { DirectionMap, Direction } from './directionMap';
import { Grid } from './grid';
import { Position } from './position';

export class Rover {
    private directionMap: DirectionMap = new DirectionMap();
    private direction: Direction = Direction.NORTH;
    private grid: Grid;
    private position: Position;

    constructor(grid: Grid) {
        this.grid = grid;
        this.position = {
            x: 0,
            y: 0
        }
    }

    commands(command: string) {
        let haveFoundAnObstacle: boolean = false;
        const commands: string[] = command.split("");
        commands.forEach((commandString: string) => {
            if (haveFoundAnObstacle) {
                return;
            }

            if (commandString === "R") {
                this.direction = this.directionMap.right(this.direction);
            }

            if (commandString === "L") {
                this.direction = this.directionMap.left(this.direction);
            }

            if (commandString === "M") {
                if (this.itWillMoveToAnObstacle()) {
                    haveFoundAnObstacle = true;
                } else {
                    this.move();
                }
            }
        });


        const obstacle: string = haveFoundAnObstacle ? "O:" : "";
        return `${obstacle}${this.position.x}:${this.position.y}:${this.direction}`
    }

    private move(): void {
        this.position = this.grid.getPosition(this.position, this.direction);
    }

    private itWillMoveToAnObstacle() {
        return this.grid.itWillBeAnObstacle(this.position, this.direction);
    }
}
