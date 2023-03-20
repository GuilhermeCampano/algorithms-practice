import { searchDivideConquer } from "./searchDivideConquer";

describe("searchDivideConquer", () => {
  test.each`
    expected | array                                    | value
    ${2}     | ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}       | ${3}
    ${5}     | ${[10, 20, 30, 40, 100, 200, 900, 1000]} | ${200}
  `(
    "given params are ($array, $value) it should return $expected",
    ({ expected, array, value }) => {
      expect(searchDivideConquer(array, value)).toEqual(expected);
    }
  );
});
