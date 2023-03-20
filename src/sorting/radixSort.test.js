import { digitCount, getDigit, mostDigits, radixSort } from "./radixSort";

describe("getDigit", () => {
  test.each`
    expected | number    | place
    ${6}     | ${123456} | ${0}
    ${5}     | ${123456} | ${1}
    ${4}     | ${123456} | ${2}
    ${3}     | ${123456} | ${3}
    ${0}     | ${123456} | ${500}
  `(
    "given params ($number, $place) it should return $expected",
    ({ expected, number, place }) => {
      expect(getDigit(number, place)).toEqual(expected);
    }
  );
});

describe("digitCount", () => {
  test.each`
    expected | number
    ${1}     | ${1}
    ${2}     | ${12}
    ${5}     | ${12345}
  `(
    "given the number $number it should return $expected",
    ({ expected, number }) => {
      expect(digitCount(number)).toEqual(expected);
    }
  );
});

describe("mostDigits", () => {
  test.each`
    expected | array
    ${3}     | ${[1, 10, 100]}
    ${7}     | ${[1, 1234567]}
    ${8}     | ${[1, 10, 12345678, 400, 5000]}
  `(
    "given the array $array it should return $expected",
    ({ expected, array }) => {
      expect(mostDigits(array)).toEqual(expected);
    }
  );
});

describe("Radix Sorting", () => {
  it("Should return an array sorted", () => {
    const array = [10, 15, 5, 315, 420, 3, 1020, 50];
    const expected = [3, 5, 10, 15, 50, 315, 420, 1020];
    expect(radixSort(array)).toEqual(expected);
  });

  // negative number issue?
  // it("Should return an array sorted", () => {
  //   const array = [10, 50, 30, 1000, 5, -5, -1, -1000, 0];
  //   const expected = [-1000, -5, -1, 0, 5, 10, 30, 50, 1000];
  //   expect(radixSort(array)).toEqual(expected);
  // });
});

// describe("Quick sort", () => {
//   it("Should return an array sorted", () => {
//     const array = [3, 6, 8, 9, 1, 10, 2];
//     const expected = [1, 2, 3, 6, 8, 9, 10];
//     expect(quickSort(array)).toEqual(expected);
//   });

//   it("Should return an array sorted", () => {
//     const array = [10, 50, 30, 1000, 5, -5, -1, -1000, 0];
//     const expected = [-1000, -5, -1, 0, 5, 10, 30, 50, 1000];
//     expect(quickSort(array)).toEqual(expected);
//   });
// });
