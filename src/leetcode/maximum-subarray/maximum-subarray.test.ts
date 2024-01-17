import { maxSubArray } from './maximum-subarray';

describe('maxSubArray', () => {
  it('returns 6 for [-2,1,-3,4,-1,2,1,-5,4]', () => {
    const nums = [-2,1,-3,4,-1,2,1,-5,4];
    expect(maxSubArray(nums)).toBe(6);
  });

  it('returns 1 for [1]', () => {
    const nums = [1];
    expect(maxSubArray(nums)).toBe(1);
  });

  it('returns 23 for [5,4,-1,7,8]', () => {
    const nums = [5,4,-1,7,8];
    expect(maxSubArray(nums)).toBe(23);
  });
});