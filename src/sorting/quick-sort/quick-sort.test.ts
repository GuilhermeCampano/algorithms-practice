import { pivotHelper, quickSort } from './quick-sort';

describe('Pivot helper', () => {
  it('Should move all numbers less than the pivot number to the left', () => {
    const array = [3, 6, 8, 9, 1, 10, 2];
    const expected = 2;
    expect(pivotHelper(array)).toEqual(expected);
  });

  it('Should move all numbers less than the pivot number to the right', () => {
    const array = [3, 6, 8, 9, 1, 10, 2];
    const expected = 4;
    expect(pivotHelper(array, 2)).toEqual(expected);
  });
});

describe('Quick sort', () => {
  it('Should return a sorted array for a simple case', () => {
    const array = [3, 6, 8, 9, 1, 10, 2];
    const expected = [1, 2, 3, 6, 8, 9, 10];
    expect(quickSort(array)).toEqual(expected);
  });

  it('Should return a sorted array for a complex case', () => {
    const array = [10, 50, 30, 1000, 5, -5, -1, -1000, 0];
    const expected = [-1000, -5, -1, 0, 5, 10, 30, 50, 1000];
    expect(quickSort(array)).toEqual(expected);
  });
});