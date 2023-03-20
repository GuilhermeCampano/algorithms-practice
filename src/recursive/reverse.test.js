import { reverse } from "./reverse";

describe("reverse", () => {
  test.each`
    expected       | string
    ${"cba"}       | ${"abc"}
    ${"emosewa"}   | ${"awesome"}
    ${"emrehliuG"} | ${"Guilherme"}
  `(
    "given param $string it should return $expected",
    ({ expected, string }) => {
      expect(reverse(string)).toEqual(expected);
    }
  );
});
