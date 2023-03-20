import { someRecursive } from "./someRecursive";

describe("someRecursive", () => {
  const isOdd = (val) => val % 2 !== 0;
  const greaterThan10 = (val) => val > 10;

  test.each`
    expected | array           | callback
    ${true}  | ${[1, 2, 3, 4]} | ${isOdd}
    ${true}  | ${[4, 6, 8, 9]} | ${isOdd}
    ${false} | ${[4, 6, 8]}    | ${isOdd}
    ${false} | ${[4, 6, 8]}    | ${greaterThan10}
  `(
    "given params are ($array, $callback) it should return $expected",
    ({ expected, array, callback }) => {
      expect(someRecursive(array, callback)).toEqual(expected);
    }
  );
});
