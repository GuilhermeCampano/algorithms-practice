import { countUniqueValues } from "./countUniqueValues";

describe("countUniqueValues", () => {
  test.each`
    expected | array
    ${3}     | ${[1, 2, 3]}
    ${3}     | ${[1, 2, 2, 2, 3]}
    ${1}     | ${[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]}
  `(
    "given params are $array it should return $expected",
    ({ expected, array }) => {
      expect(countUniqueValues(array)).toEqual(expected);
    }
  );
});
