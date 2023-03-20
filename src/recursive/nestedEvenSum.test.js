import { nestedEvenSum } from "./nestedEvenSum";

describe("nestedEvenSum", () => {
  const sample1 = {
    outer: 2,
    obj: {
      inner: 2,
      otherObj: {
        superInner: 2,
        notANumber: true,
        alsoNotANumber: "yup"
      }
    }
  };

  const sample2 = {
    a: 2,
    b: { b: 2, bb: { b: 3, bb: { b: 2 } } },
    c: { c: { c: 2 }, cc: "ball", ccc: 5 },
    d: 1,
    e: { e: { e: 2 }, ee: "car" }
  };

  test.each`
    expected | object
    ${6}     | ${sample1}
    ${10}    | ${sample2}
  `("it should return $expected", ({ expected, object }) => {
    expect(nestedEvenSum(object)).toEqual(expected);
  });
});
