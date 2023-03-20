import { capitalizeWords } from "./capitalizeWords";

describe("capitalizeWords", () => {
  test.each`
    expected                          | array
    ${[]}                             | ${[]}
    ${["CAR", "TACO", "BANANA"]}      | ${["car", "taco", "banana"]}
    ${["JASPION", "GYRAYA", "OTAKU"]} | ${["jaspion", "gyraya", "otaku"]}
  `(
    "capitilize first letter of $array it should return $expected",
    ({ expected, array }) => {
      expect(capitalizeWords(array)).toEqual(expected);
    }
  );
});
