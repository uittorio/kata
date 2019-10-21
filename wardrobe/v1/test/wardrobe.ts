import { Wardrobe } from '../wardrobe';

describe('wardrobe', () => {

    it('will return a combination the combination', () => {
        const wardrobe: Wardrobe = new Wardrobe();
        const result: number[][] = wardrobe.fit();
        console.log(result);
        expect(result).toEqual(
            [
                [ 50, 50, 50, 50, 50 ],
                [ 50, 50, 50, 100 ],
                [ 50, 50, 75, 75 ],
                [ 50, 100, 100 ],
                [ 75, 75, 100 ]
            ]
        )
    });

});
