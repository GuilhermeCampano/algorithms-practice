import { minSubArrayLen } from "./minSubArray";

describe("minSubArray", () => {
  test.each`
    expected | array                 | number
    ${2}     | ${[2, 3, 1, 2, 4, 3]} | ${7}
  `(
    "given params are ($array, $number) it should return $expected",
    ({ expected, array, number }) => {
      expect(minSubArrayLen(array, number)).toEqual(expected);
    }
  );
});
