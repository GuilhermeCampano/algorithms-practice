import { binarySearch } from "./binarySearch";

describe("binarySearch", () => {
  test.each`
    expected | array                                       | value
    ${1}     | ${[1, 2, 3, 4, 5]}                          | ${2}
    ${4}     | ${[1, 2, 3, 4, 5]}                          | ${5}
    ${-1}    | ${[1, 2, 3, 4, 5]}                          | ${20}
    ${8}     | ${[1, 2, 3, 4, 5, 10, 15, 20, 30, 50, 100]} | ${30}
  `(
    "given params ($array, $value) it should return $expected",
    ({ expected, array, value }) => {
      expect(binarySearch(array, value)).toEqual(expected);
    }
  );
});
