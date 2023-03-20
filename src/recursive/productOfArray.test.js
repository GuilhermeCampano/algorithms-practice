import { productOfArray } from "./productOfArray";

describe("productOfArray", () => {
  test.each`
    expected | array
    ${null}  | ${[]}
    ${2}     | ${[2]}
    ${6}     | ${[1, 2, 3]}
    ${125}   | ${[5, 5, 5]}
  `("product of array $array is $expected", ({ expected, array }) => {
    expect(productOfArray(array)).toEqual(expected);
  });
});
