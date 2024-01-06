import { binarySearch } from './binary-search';

describe('binarySearch', () => {
  it('should return the index of the value', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });
  it( 'should return -1 if the value is not found', () => {
    expect(binarySearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  }); 
});