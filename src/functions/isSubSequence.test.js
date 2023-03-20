import { isSubsequence } from "./isSubSequence";

describe("isSubsequence", () => {
  test.each`
    expected | string1    | string2
    ${true}  | ${"hello"} | ${"hello world"}
    ${false} | ${"hallo"} | ${"hello world"}
  `(
    "given params are ($string1, $string2) it should return $expected",
    ({ expected, string1, string2 }) => {
      expect(isSubsequence(string1, string2)).toEqual(expected);
    }
  );
});
