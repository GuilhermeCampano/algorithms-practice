import { search } from './binary-search';

describe('Binary Search', () => {

  describe('GIVEN Input: nums = [-1,0,3,5,9,12], target = 9', () => {
    const nums = [-1,0,3,5,9,12];
    const target = 9;
    test('THEN it returns 4', () => {
      const actual = search(nums, target);
      expect(actual).toBe(4);
    });
  });

  describe('GIVEN Input: nums = [-1,0,3,5,9,12], target = 2', () => {
    const nums = [-1,0,3,5,9,12];
    const target = 2;
    test('THEN it returns -1', () => {
      const actual = search(nums, target);
      expect(actual).toBe(-1);
    });
  });

  describe('GIVEN Input: nums = [5], target = 5', () => {
    const nums = [5];
    const target = 5;
    test('THEN it returns 0', () => {
      const actual = search(nums, target);
      expect(actual).toBe(0);
    });
  });
});