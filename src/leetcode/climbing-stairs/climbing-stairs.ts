/**
 * [70. Climbing Stairs](https://leetcode.com/problems/climbing-stairs/)
 * You are climbing a staircase. It takes n steps to reach the top.
 * Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?
 * Constraints:
 * 1 <= n <= 45
 * Time complexity: O(n)
*/

export function climbStairs(n: number): number {
  if(n <= 2) return n;
  const possibilities = [1, 2];
  for(let i = 2; i < n; i++) {
    // The possibilities for each step is the sum of the possibilities for the previous two steps (i-1) + (i-2)
    possibilities[i] = possibilities[i - 1] + possibilities[i - 2];
  }
  return possibilities[n - 1];
}


// To reduce the space complexity from O(n) to O(1), it can use two variables to store the previous two steps
export function climbStairs2(n: number): number {
  if(n <= 2) return n;
  let twoStepsBefore = 1;
  let oneStepBefore = 2;

  for (let i = 3; i <= n; i++) {
    const currentStep = twoStepsBefore + oneStepBefore;
    twoStepsBefore = oneStepBefore;
    oneStepBefore = currentStep;
  }
  // the one step before is the total possibilities for n steps
  return oneStepBefore;
}
