
// 121. Best Time to Buy and Sell Stock
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

/**
 * Time Complexity: O(n^2) due to nested loops
 */
export function maxProfit(prices: number[]): number {
  let maxProfit = 0;

  for(let buyDay = 0; buyDay < prices.length - 1; buyDay++) {
    for(let sellDay = buyDay + 1; sellDay < prices.length; sellDay++) {
      const temporaryProfit = prices[sellDay] - prices[buyDay];

      if(temporaryProfit > maxProfit) {
        maxProfit = temporaryProfit;
      }
    }
  }
  return maxProfit;
}


/**
 * Time Complexity: O(n) due to single pass approach
 */
export function maxProfit2(prices: number[]): number {
  let maxProfit = 0;
  let minPrice = prices[0];

  for(let buyDay = 0; buyDay < prices.length; buyDay++) {
    if(prices[buyDay] < minPrice) {
      minPrice = prices[buyDay];
    } else {
      const temporaryProfit = prices[buyDay] - minPrice;
      if(temporaryProfit > maxProfit) {
        maxProfit = temporaryProfit;
      }
    }
    console.log({minPrice, maxProfit}); 
  }

  return maxProfit;
}
