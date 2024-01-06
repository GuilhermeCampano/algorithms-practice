import { swap } from './swap';

describe('swap', () => {
  it('should swap two elements in an array', () => {
    const array = [1, 2, 3, 4, 5];
    swap(array, 0, 4);
    expect(array).toEqual([5, 2, 3, 4, 1]);
  });
});
