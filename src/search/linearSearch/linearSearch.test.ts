import { linearSearch } from './linearSearch';

describe('linearSearch', () => {
  it('should return the index of the value', () => {
    expect(linearSearch([1, 2, 3, 4, 5], 3)).toBe(2);
  });
  it('should return -1 if the value is not found', () => {
    expect(linearSearch([1, 2, 3, 4, 5], 6)).toBe(-1);
  });
  it('should return the index of the value', () => {
    expect(linearSearch(['a', 'b', 'c', 'd', 'e'], 'c')).toBe(2);
  });
  it('should return -1 if the value is not found', () => {
    expect(linearSearch(['a', 'b', 'c', 'd', 'e'], 'f')).toBe(-1);
  });
});
