/**
  704. Binary Search
  https://leetcode.com/problems/binary-search/

  Constraints:
  *1 <= nums.length <= 104
  -104 < nums[i], target < 104
  All the integers in nums are unique.
  nums is sorted in ascending order.
*/
export function search(numbers: number[], target: number): number {
  const binarySearch = (startIndex: number, endIndex: number): number => {
    if (startIndex > endIndex) return -1; // not found

    const middleIndex = Math.floor((startIndex + endIndex) / 2);
    const middleValue = numbers[middleIndex];

    if (target > middleValue) {
      return binarySearch(middleIndex + 1, endIndex); // [middleIndex + 1, ..., endIndex]
    }

    if (target < middleValue) {
      return binarySearch(startIndex, middleIndex - 1); // [startIndex, ..., middleIndex - 1]
    }

    // target equal to middle value
    return middleIndex;
  };
  return binarySearch(0, numbers.length - 1);
}