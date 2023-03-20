import { capitalizeFirst } from "./capitilizeFirst";

describe("capitalizeFirst", () => {
  test.each`
    expected                          | array
    ${[]}                             | ${[]}
    ${["Car", "Taco", "Banana"]}      | ${["car", "taco", "banana"]}
    ${["Jaspion", "Gyraya", "Otaku"]} | ${["jaspion", "gyraya", "otaku"]}
  `(
    "capitilize first letter of $array it should return $expected",
    ({ expected, array }) => {
      expect(capitalizeFirst(array)).toEqual(expected);
    }
  );
});
