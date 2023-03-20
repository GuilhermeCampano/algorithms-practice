export function nestedEvenSum(object) {
  let sum = 0;

  function isEven(number) {
    return number % 2 === 0;
  }

  function calculateSum(currentObject) {
    const keys = Object.keys(currentObject);
    keys.forEach((key) => {
      const value = currentObject[key];
      if (typeof value === "number" && isEven(value)) {
        sum += value;
      }
      if (typeof value === "object") {
        calculateSum(value);
      }
    });
  }
  calculateSum(object);

  return sum;
}

//function nestedEvenSumV2(object, sum = 0) {
//   function isEven(number) {
//     return number % 2 === 0;
//   }
//   Object.keys(object).forEach((key) => {
//     const value = object[key];
//     if (typeof value === "number" && isEven(value)) {
//       sum += value;
//     }
//     if (typeof value === "object") {
//       sum += nestedEvenSum(value);
//     }
//   });

//   return sum;
// }
