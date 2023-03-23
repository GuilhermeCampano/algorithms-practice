import { maxSubarraySum } from './maxSubarraySum';

describe('maxSubarraySum', () => {
  test.each`
    expected | array                              | items
    ${700}   | ${[100, 200, 300, 400]}            | ${2}
    ${39}    | ${[1, 4, 2, 10, 23, 3, 1, 0, 20]}  | ${4}
    ${5}     | ${[-3, 4, 0, -2, 6, -1]}           | ${2}
    ${5}     | ${[3, -2, 7, -4, 1, -1, 4, -2, 1]} | ${2}
    ${null}  | ${[2, 3]}                          | ${3}
  `(
    'given params are ($array, $items) it should return $expected',
    ({ expected, array, items }) => {
      expect(maxSubarraySum(array, items)).toEqual(expected);
    }
  );
});


