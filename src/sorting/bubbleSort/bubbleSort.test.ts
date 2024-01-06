import { bubbleSort, bubbleSortNearlySorted } from './bubbleSort';

describe('Bubble Sort', () => {
  it('should sort an array', () => {
    expect(bubbleSort([3, 2, 1])).toEqual([1, 2, 3]);
  });
  it('should sort an array of negative numbers', () => {
    expect(bubbleSort([-3, -2, -1])).toEqual([-3, -2, -1]);
  });
});

describe('bubbleSortNearlySorted', () => {
  it('should sort an array', () => {
    expect(bubbleSortNearlySorted([3, 2, 1])).toEqual([1, 2, 3]);
  });
  it('should sort an array of negative numbers', () => {
    expect(bubbleSortNearlySorted([-3, -2, -1])).toEqual([-3, -2, -1]);
  });
});