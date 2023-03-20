import { swap } from './swap';

describe("swap", () => {
  test('something', () => {
    const array = [5, 10, 15];
    swap(array, 0, 1);
    expect(array).toEqual([10,5,15]);
  })
});
