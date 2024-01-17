import { containsDuplicate, containsDuplicate2 } from './contains-duplicate';

describe('Contains Duplicate', () => {
  it('returns false when array is empty', () => {
    const nums = [];
    expect(containsDuplicate(nums)).toBe(false);
    expect(containsDuplicate2(nums)).toBe(false);
  });

  it('returns false when array contains only one element', () => {
    const nums = [1];
    expect(containsDuplicate(nums)).toBe(false);
    expect(containsDuplicate2(nums)).toBe(false);
  });

  it('returns true when array contains duplicate numbers', () => {
    const nums = [1, 2, 3, 1];
    expect(containsDuplicate(nums)).toBe(true);
    expect(containsDuplicate2(nums)).toBe(true);
  });

  it('returns false when array contains no duplicate numbers', () => {
    const nums = [1, 2, 3, 4];
    expect(containsDuplicate(nums)).toBe(false);
    expect(containsDuplicate2(nums)).toBe(false);
  });

  it('returns true when array contains multiple duplicate numbers', () => {
    const nums = [1, 2, 2, 3, 3, 3];
    expect(containsDuplicate(nums)).toBe(true);
    expect(containsDuplicate2(nums)).toBe(true);
  });
});