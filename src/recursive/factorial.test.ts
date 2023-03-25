import { factorial } from './factorial';

describe('factorial', () => {
  it('should return the factorial of a number', () => {
    expect(factorial(4)).toBe(24);
  });
  it('should return the factorial of a number', () => {
    expect(factorial(3)).toBe(6);
  });
  it('should return 1 if the number is 0', () => {
    expect(factorial(0)).toBe(1);
  });
});
