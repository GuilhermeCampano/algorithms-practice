import { sameFrequency } from "./sameFrequency";

describe("sameFrequency", () => {
  test.each`
    expected | number1    | number2
    ${true}  | ${182}     | ${281}
    ${false} | ${34}      | ${14}
    ${true}  | ${3589578} | ${5879385}
    ${false} | ${22}      | ${222}
  `(
    "given params are ($number1, $number2) it should return $expected",
    ({ expected, number1, number2 }) => {
      expect(sameFrequency(number1, number2)).toEqual(expected);
    }
  );
});
