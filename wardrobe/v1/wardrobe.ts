export class Wardrobe {
    private possibleWardrobes: number[];
    private readonly wallSize: number;

    constructor() {
        this.possibleWardrobes = [
            50,
            75,
            100,
            120
        ];

        this.wallSize = 250;
    }

    public fit(): number[][] {
        const combinations: number[][] = [];

        this.possibleWardrobes.forEach((wardrobe) => {
            this.recur([wardrobe], combinations, wardrobe);
        });

        return combinations;
    }

    private recur(currentList: number[], combinations: number[][], wardrobe: number): void {
        const wardrobeWithoutSmaller = this.possibleWardrobes.filter(w => w >= wardrobe);
        const sum = currentList.reduce((a, w) => a+=w, 0);

        if (sum === this.wallSize) {
            combinations.push(currentList);
        }

        if (sum < this.wallSize) {
            wardrobeWithoutSmaller.forEach(w => {
                this.recur([...currentList, w], combinations, w);
            });
        }
    }
}
