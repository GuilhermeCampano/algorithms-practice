import { merge, mergeSort } from "./mergeSort";

describe("Merge", () => {
  it("Should merge two sorted arrays", () => {
    const array1 = [1, 10, 50];
    const array2 = [2, 14, 99, 100];
    const expected = [1, 2, 10, 14, 50, 99, 100];
    expect(merge(array1, array2)).toEqual(expected);
  });

  it("Should merge two sorted arrays", () => {
    const array1 = [];
    const array2 = [1, 3];
    const expected = [1, 3];
    expect(merge(array1, array2)).toEqual(expected);
  });
});

describe("Merge Sort", () => {
  it("Should have sorte the array", () => {
    const array = [100, 2, 20, 5, 1, 9];
    const expected = [1, 2, 5, 9, 20, 100];
    expect(mergeSort(array)).toEqual(expected);
  });
});
