import { fib } from "./fib";

describe("fib", () => {
  test.each`
    expected | number
    ${3}     | ${4}
    ${55}    | ${10}
  `("fib of !$number is $expected", ({ expected, number }) => {
    expect(fib(number)).toEqual(expected);
  });
});
