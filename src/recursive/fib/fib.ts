// export function fib(number) {
//   let factorialArray = [];

//   function factorial(number) {
//     factorialArray.push(number);
//     if (number === 1) return factorialArray.push(1);
//     factorial(number - 1);
//   }
//   factorial(number);

//   return factorialArray.sort()[number - 1];
// }

export function fib(n = 0): number {
  if (n <= 2) return 1;
  return fib(n - 1) + fib(n - 2);
}
