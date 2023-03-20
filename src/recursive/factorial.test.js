import { factorial } from "./factorial";

describe("factorial", () => {
  test.each`
    expected | number
    ${1}     | ${0}
    ${2}     | ${2}
    ${24}    | ${4}
    ${120}   | ${5}
  `("factorial of !$number is $expected", ({ expected, number }) => {
    expect(factorial(number)).toEqual(expected);
  });
});
