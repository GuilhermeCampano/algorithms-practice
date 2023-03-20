export function randomArray(length = 10, maxNumber = 100) {
  return Array.from({ length }, () => Math.floor(Math.random() * maxNumber));
}
