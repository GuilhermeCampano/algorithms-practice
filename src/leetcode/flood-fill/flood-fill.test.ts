import { floodFill } from './flood-fill';

describe('Flood Fill', () => {
  describe('GIVEN the input image [[1,1,1],[1,1,0],[1,0,1]]', () => {
    const image = [[1, 1, 1], [1, 1, 0], [1, 0, 1]];

    describe('WHEN the flood fill is called with sr = 1, sc = 1, color = 2', () => {
      const sr = 1;
      const sc = 1;
      const color = 2;

      test('THEN, the output should be [[2,2,2],[2,2,0],[2,0,1]]', () => {
        expect(floodFill(image, sr, sc, color)).toEqual([[2, 2, 2], [2, 2, 0], [2, 0, 1]]);
      });
    });
  });

  describe('GIVEN the input image [[0,0,0],[0,0,0]]', () => {
    const image = [[0, 0, 0], [0, 0, 0]];

    describe('WHEN the flood fill is called with sr = 0, sc = 0, color = 0', () => {
      const sr = 0;
      const sc = 0;
      const color = 0;

      test('THEN, the output should be [[0,0,0],[0,0,0]]', () => {
        expect(floodFill(image, sr, sc, color)).toEqual([[0, 0, 0], [0, 0, 0]]);
      });
    });
  });
});