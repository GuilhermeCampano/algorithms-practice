import { minSubArrayLen } from './min-sub-array';

describe('minSubArray', () => {
  it('should return 2 if array is [2, 3, 1, 2, 4, 3] and number is 7', () => {
    expect(minSubArrayLen([2, 3, 1, 2, 4, 3], 7)).toEqual(2);
  });
  it('should return 1 if array is [2, 1, 6, 5, 4] and number is 9', () => {
    expect(minSubArrayLen([2, 1, 6, 5, 4], 9)).toEqual(2);
  });
  it('should return 0 if array is [3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19] and number is 52', () => {
    expect(minSubArrayLen([3, 1, 7, 11, 2, 9, 8, 21, 62, 33, 19], 52)).toEqual(1);
  });
});
