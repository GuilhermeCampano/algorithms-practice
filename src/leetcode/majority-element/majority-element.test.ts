import {majorityElement, boyerMooreAlgorithm} from './majority-element';

describe('Majority Element', () => {

  it('should return 3 when nums = [3,2,3]', () => {
    const nums = [3,2,3];
    expect(majorityElement(nums)).toBe(3);
    expect(boyerMooreAlgorithm(nums)).toBe(3);
  });

  it('should return 2 when nums = [2,2,1,1,1,2,2]', () => {
    const nums = [2,2,1,1,1,2,2];
    expect(majorityElement(nums)).toBe(2);
    expect(boyerMooreAlgorithm(nums)).toBe(2);
  });

  it('should return 1 when nums = [1]', () => {
    const nums = [1];
    expect(majorityElement(nums)).toBe(1);
    expect(boyerMooreAlgorithm(nums)).toBe(1);
  });

  it('should return 1 when nums = [1,1,1,1,1,2]', () => {
    const nums = [1,2,1];
    expect(majorityElement(nums)).toBe(1);
  });

});