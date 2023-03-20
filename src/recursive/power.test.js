import { power } from "./power";

describe("power", () => {
  test.each`
    expected | base | expoent
    ${1}     | ${2} | ${0}
    ${4}     | ${2} | ${2}
    ${16}    | ${2} | ${4}
    ${256}   | ${4} | ${4}
  `(
    "$base raised to the powered of $expoent is $expected",
    ({ expected, base, expoent }) => {
      expect(power(base, expoent)).toEqual(expected);
    }
  );
});
