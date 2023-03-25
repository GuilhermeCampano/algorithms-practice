export function nestedEvenSum(object: object, sum = 0): number {
  function isEven(number) {
    return number % 2 === 0;
  }
  Object.keys(object).forEach((key) => {
    const value = object[key];
    if (typeof value === 'number' && isEven(value)) {
      sum += value;
    }
    if (typeof value === 'object') {
      sum += nestedEvenSum(value);
    }
  });

  return sum;
}
