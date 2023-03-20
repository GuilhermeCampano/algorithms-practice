import { linearSearch } from "./linearSearch";

describe("linearSearch", () => {
  test.each`
    expected | array                             | value
    ${1}     | ${[10, 15, 20, 25, 30]}           | ${15}
    ${5}     | ${[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]} | ${4}
    ${2}     | ${["a", "b", "c"]}                | ${"c"}
    ${-1}    | ${[1, 2, 3]}                      | ${10}
  `(
    "given params ($array, $value) it should return $expected",
    ({ expected, array, value }) => {
      expect(linearSearch(array, value)).toEqual(expected);
    }
  );
});
