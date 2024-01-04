
/**
 * [278. First Bad Version](https://leetcode.com/problems/first-bad-version/)
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
 * which causes all the following ones to be bad.
 * 
 * you are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. 
 * You should minimize the number of calls to the API.
 * -----------------
 * Solution: Binary Search
 * it maintains two pointers and each time compares the middle element.
 * If the middle element is bad, it means the first bad one is before middle element.
 * If the middle element is good, it means the first bad one is after middle element.
 * Timex Complexity: O(log N) as it divides the search space in half at every step.
*/

type BadVersionApi = (version: number) => boolean;

export const firstBadVersion = function(badVersionApi: BadVersionApi) {
  return function(numberOfVersions: number): number {
    let left = 1;
    let right = numberOfVersions;

    while(left <= right) {
      const middle = Math.floor((left + right) / 2);
      if(badVersionApi(middle)) {
        right = middle - 1;
      } else {
        left = middle + 1;
      }
    }
    return left;
  };
};