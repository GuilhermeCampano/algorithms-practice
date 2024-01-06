import { radixSort } from './radixSort';

describe('radixSort', () => {
  it('should sort an array of numbers', () => {
    expect(radixSort([1, 3, 2, 5, 4])).toEqual([1, 2, 3, 4, 5]);
  });
});