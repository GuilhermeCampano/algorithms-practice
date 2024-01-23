import {updateMatrix} from './01-matrix';

describe('01-matrix', () => {
  describe('GIVEN a matrix [[0,0,0],[0,1,0],[0,0,0]]', () => {
    const matrix = [[0,0,0],[0,1,0],[0,0,0]];
    test('THEN returns [[0,0,0],[0,1,0],[0,0,0]]', () => {
      const expected = [[0,0,0],[0,1,0],[0,0,0]];
      expect(updateMatrix(matrix)).toEqual(expected);
    });
  });

  describe('GIVEN a matrix [[0,0,0],[0,1,0],[1,1,1]]', () => {
    const matrix = [[0,0,0],[0,1,0],[1,1,1]];
    test('THEN returns [[0,0,0],[0,1,0],[1,2,1]]', () => {
      const expected = [[0,0,0],[0,1,0],[1,2,1]];
      expect(updateMatrix(matrix)).toEqual(expected);
    });
  });
});