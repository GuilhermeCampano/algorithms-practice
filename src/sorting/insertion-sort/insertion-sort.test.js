import { insertionSort } from './insertion-sort';

describe('Insertion Sort', () => {

  describe('GIVEN the unsorted array [3, 1, 15, 5]', () => {
    const array = [3, 1, 15, 5];

    it('should be sorted to [1, 3, 5, 15]', () => {
      const expected = [1, 3, 5, 15];
      expect(insertionSort(array)).toEqual(expected);
    });
  });

  describe('GIVEN the unsorted array [10, 50, 30, 1000, 5, -5, -1, -1000, 0]', () => {
    const array = [10, 50, 30, 1000, 5, -5, -1, -1000, 0];
    it('should be sorted to [-1000, -5, -1, 0, 5, 10, 30, 50, 1000]', () => {
      const expected = [-1000, -5, -1, 0, 5, 10, 30, 50, 1000];
      expect(insertionSort(array)).toEqual(expected);
    });
  });

});
