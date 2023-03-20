import { recursiveRange } from "./recursiveRange";

describe("recursiveRange", () => {
  test.each`
    expected | number
    ${3}     | ${2}
    ${6}     | ${3}
    ${21}    | ${6}
  `(
    "given param $number it should return $expected",
    ({ expected, number }) => {
      expect(recursiveRange(number)).toEqual(expected);
    }
  );
});
