/* eslint-disable @typescript-eslint/no-explicit-any */
export function someRecursive(array: number[], callbackFn: (val: number) => boolean): boolean {
  if (!array.length) return false;
  return callbackFn(array[0]) || someRecursive(array.splice(1), callbackFn);
}
