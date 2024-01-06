import { fib } from './fib';

describe('FIB', () => {
  it('should return the Fibonacci of 4', () => {
    expect(fib(4)).toBe(3);
  });
  it('should return the Fibonacci of 10', () => {
    expect(fib(10)).toBe(55);
  });
});