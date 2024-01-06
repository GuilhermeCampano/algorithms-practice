import { productOfArray } from './product-of-array';

describe('productOfArray', () => {
  it('should return the product of an array', () => {
    expect(productOfArray([1, 2, 3])).toBe(6);
  });
  it('should return the product of an array', () => {
    expect(productOfArray([1, 2, 3, 10])).toBe(60);
  });
});