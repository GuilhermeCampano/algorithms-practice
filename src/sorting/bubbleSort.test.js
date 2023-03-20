import { bubbleSort, bubbleSortNearlySorted } from "./bubbleSort";

describe("Bubble Sort", () => {
  it("Should return an array sorted", () => {
    const array = [1, 3, 15, 19, 2, 5];
    const expected = [1, 2, 3, 5, 15, 19];
    expect(bubbleSort(array)).toEqual(expected);
  });

  it("Should return an array sorted", () => {
    const array = [10, 50, 30, 1000, 5, -5, -1, -1000, 0];
    const expected = [-1000, -5, -1, 0, 5, 10, 30, 50, 1000];
    expect(bubbleSort(array)).toEqual(expected);
  });

  it("Should return an nearly sorted array sorted", () => {
    const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 500, 10];
    const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 500];
    expect(bubbleSortNearlySorted(array)).toEqual(expected);
  });
});
