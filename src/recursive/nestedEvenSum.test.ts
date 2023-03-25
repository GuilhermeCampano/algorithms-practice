import { nestedEvenSum } from './nestedEvenSum';

describe('nestedEvenSum', () => {
  it('should return the sum of all even numbers in an object which may contain nested objects', () => {
    expect(nestedEvenSum({ a: 2, b: 3, c: { d: 3, e: 4 } })).toBe(6);
  });
});
