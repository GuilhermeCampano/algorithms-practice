
/**
 * [278. First Bad Version](https://leetcode.com/problems/first-bad-version/)
 * Suppose you have n versions [1, 2, ..., n] and you want to find out the first bad one,
 * which causes all the following ones to be bad.
 * 
 * you are given an API bool isBadVersion(version) which returns whether version is bad. Implement a function to find the first bad version. 
 * You should minimize the number of calls to the API.
 */

type BadVersionApi = (version: number) => boolean;

export const firstBadVersion = function(badVersionApi: BadVersionApi) {
  return function(numberOfVersions: number): number {
    for(let i = 1; i <= numberOfVersions; i++) {
      if(badVersionApi(i)) {
        return i;
      }
    }
    return -1;
  };
};