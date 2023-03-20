import { selectionSort } from "./selectionSort";

describe("Seleciton Sort", () => {
  it("Should return an array sorted", () => {
    const array = [1, 3, 15, 5];
    const expected = [1, 3, 5, 15];
    expect(selectionSort(array)).toEqual(expected);
  });

  it("Should return an array sorted", () => {
    const array = [10, 50, 30, 1000, 5, -5, -1, -1000, 0];
    const expected = [-1000, -5, -1, 0, 5, 10, 30, 50, 1000];
    expect(selectionSort(array)).toEqual(expected);
  });
});
