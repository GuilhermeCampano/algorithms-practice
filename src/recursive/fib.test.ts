import { fib } from './fib';

describe('fib', () => {
  it('should return the nth number in the fibonacci sequence', () => {
    expect(fib(4)).toBe(3);
  });
  it('should return the nth number in the fibonacci sequence', () => {
    expect(fib(10)).toBe(55);
  });
});