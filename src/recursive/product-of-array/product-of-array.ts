/* eslint-disable @typescript-eslint/no-explicit-any */
export function productOfArray(array: any): any {
  if (array.length <= 0) return null;
  if (array.length === 1) return array[0];
  return array[0] * productOfArray(array.slice(1));
}
