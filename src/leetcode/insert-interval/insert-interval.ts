/**
 * 57. Insert Interval
 * https://leetcode.com/problems/insert-interval/
 * 
 * Insert newInterval into intervals such that intervals is still sorted in ascending order by starti 
 * and intervals still does not have any overlapping intervals (merge overlapping intervals if necessary).
 * 
 * Example
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * 
 * Time Complexity: O(n)
 */
export function insert(intervals: number[][], newInterval: number[]): number[][] {
  const result: number[][] = [];
  const mergedInterval = [...newInterval];

  let i = 0;
  // add all intervals before newInterval
  while (i < intervals.length && intervals[i][1] < newInterval[0]) {
    result.push(intervals[i]);
    i++;
  }

  // merge overlapping intervals
  while (i < intervals.length && intervals[i][0] <= newInterval[1]) {
    mergedInterval[0] = Math.min(intervals[i][0], mergedInterval[0]);
    mergedInterval[1] = Math.max(intervals[i][1], mergedInterval[1]);
    i++;
  }
  result.push(mergedInterval);

  // add all intervals after newInterval
  while (i < intervals.length) {
    result.push(intervals[i]);
    i++;
  }

  return result;
}

/*
  * Alternative solution
  * Time Complexity: O(n)
*/
export function insert2(intervals: number[][], newInterval: number[]): number[][] {
  const mergedInterval = [...newInterval];
  const leftInterval: number[][] = [];
  const rightInterval: number[][] = [];

  for(let i = 0; i < intervals.length; i++) {
    if (intervals[i][1] < newInterval[0]) {
      leftInterval.push(intervals[i]);
    } else if (intervals[i][0] > newInterval[1]) {
      rightInterval.push(intervals[i]);
    } else {
      mergedInterval[0] = Math.min(intervals[i][0], mergedInterval[0]);
      mergedInterval[1] = Math.max(intervals[i][1], mergedInterval[1]);
    }
  }

  return [...leftInterval, mergedInterval, ...rightInterval];
}