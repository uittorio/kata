export enum Direction {
    NORTH = "N",
    EST = "E",
    SOUTH = "S",
    WEST = "W"
}

interface Dictionary<TValue> {
    [key: string]: TValue;
}

export class DirectionMap {
    private directRightMap: Dictionary<Direction> = {
        [Direction.NORTH]: Direction.WEST,
        [Direction.WEST]: Direction.SOUTH,
        [Direction.SOUTH]: Direction.EST,
        [Direction.EST]: Direction.NORTH
    };

    private directLeftMap: Dictionary<Direction> = {
        [Direction.NORTH]: Direction.EST,
        [Direction.EST]: Direction.SOUTH,
        [Direction.SOUTH]: Direction.WEST,
        [Direction.WEST]: Direction.NORTH
    };

    right(direction: Direction): Direction {
        return this.directRightMap[direction];
    }

    left(direction: Direction): Direction {
        return this.directLeftMap[direction];
    }
}
