export function someRecursive(array, callbackFn) {
  if (!array.length) return false;
  return callbackFn(array[0]) || someRecursive(array.splice(1), callbackFn);
}
