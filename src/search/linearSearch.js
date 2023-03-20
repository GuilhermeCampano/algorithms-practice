/**
 * Time complexity O(n)
 * Space Complexity O(1)
 */
export function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) return i;
  }
  return -1;
}
