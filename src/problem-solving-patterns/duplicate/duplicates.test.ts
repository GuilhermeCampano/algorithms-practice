import { areThereDuplicates } from './duplicates';

describe('areThereDuplicates', () => {
  it('should return false for 1, 2, 3', () => {
    expect(areThereDuplicates([1, 2, 3])).toEqual(false);
  });
  it('should return true for 1, 2, 2', () => {
    expect(areThereDuplicates([1, 2, 2])).toEqual(true);
  });
  it('should return true for "a", "b", "c", "a"', () => {
    expect(areThereDuplicates(['a', 'b', 'c', 'a'])).toEqual(true);
  }); 
});
