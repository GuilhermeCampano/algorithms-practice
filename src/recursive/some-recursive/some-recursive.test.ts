import { someRecursive } from './some-recursive';

describe('someRecursive', () => {
  it('should return true if a single odd value is in the array', () => {
    const isOdd = (val: number) => val % 2 !== 0;
    expect(someRecursive([1, 2, 3, 4], isOdd)).toBe(true);
  });

  it('should return true if a single value greater than 10 is in the array', () => {
    const greaterThan10 = (val: number) => val > 10;
    expect(someRecursive([2,4,10, 20], greaterThan10)).toBe(true);
  });
});