import { areThereDuplicates } from "./areThereDuplicates";

it("should return false for 1, 2, 3", () => {
  expect(areThereDuplicates(1, 2, 3)).toEqual(false);
});

it("should return false for 1,2,3,4,5", () => {
  expect(areThereDuplicates(1, 2, 3, 4, 5)).toEqual(false);
});

it("should return true for 1, 2, 2", () => {
  expect(areThereDuplicates(1, 2, 2)).toEqual(true);
});

it(`should return true for "a", "b", "c", "a"`, () => {
  expect(areThereDuplicates("a", "b", "c", "a")).toEqual(true);
});

it(`should return true for 1, 3, 2, 4, 6, 7, 2, 9`, () => {
  expect(areThereDuplicates(1, 3, 2, 4, 6, 7, 2, 9)).toEqual(true);
});
