import { averagePair } from "./averagePair";

describe("averagePair", () => {
  test.each`
    expected | average | array
    ${true}  | ${2.5}  | ${[1, 2, 3]}
    ${true}  | ${8}    | ${[1, 3, 3, 5, 6, 7, 10, 12, 19]}
  `(
    "given params are ($array, $average) it should return $expected",
    ({ expected, average, array }) => {
      expect(averagePair(array, average)).toBe(expected);
    }
  );
});
