import { twoSum } from './twoSum';

describe('twoSum', () => {
  it('should return [0, 1] for [2, 7, 11, 15], 9', () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1]);
  });
  it('should return [1, 2] for [3, 2, 4], 6', () => {
    expect(twoSum([3, 2, 4], 6)).toEqual([1, 2]);
  });
  it('should return [0, 1] for [3, 3], 6', () => {
    expect(twoSum([3,3], 6)).toEqual([0,1]);
  });
  it('should return [] for [1,2,3], 100', () => {
    expect(twoSum([1,2,3], 100)).toEqual([]);
  });          
})