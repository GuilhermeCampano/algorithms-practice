import { isPalindrome } from "./isPalindrome";

describe("isPalindrome", () => {
  test.each`
    expected | string
    ${false} | ${"abc"}
    ${false} | ${"foobar"}
    ${true}  | ${"tacocat"}
    ${true}  | ${"osso"}
    ${true}  | ${"ovo"}
  `(
    "given param $string it should return $expected",
    ({ expected, string }) => {
      expect(isPalindrome(string)).toEqual(expected);
    }
  );
});
