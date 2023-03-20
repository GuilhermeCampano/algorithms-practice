export function maxSubarraySum(arr, num) {
  if (arr.length < num) return null;

  let total = 0;
  for (let i = 0; i < num; i++) {
    total += arr[i];
  }
  let currentTotal = total;
  for (let i = num; i < arr.length; i++) {
    let j = i - num;
    currentTotal += arr[i] - arr[j];
    total = Math.max(total, currentTotal);
  }
  return total;
}
