import { flatten } from "./flatten";

describe("flatten", () => {
  test.each`
    expected           | array
    ${[1, 2, 3, 4, 5]} | ${[1, 2, 3, [4, 5]]}
    ${[1, 2, 3]}       | ${[[1], [2], [3]]}
  `(
    "given the array $array it should return $expected",
    ({ expected, array }) => {
      expect(flatten(array)).toEqual(expected);
    }
  );
});
