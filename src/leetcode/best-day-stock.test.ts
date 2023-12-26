import {maxProfit} from './best-day-stock';

describe('Best Day to Buy and Sell Stock', () => {

  describe('GIVEN prices = [7,1,5,3,6,4]', () => {
    const prices = [7, 1, 5, 3, 6, 4];
    test('THEN max profit is 5', () => {
      expect(maxProfit(prices)).toEqual(5);
    });
  });

  describe('GIVEN prices = [7,6,4,3,1]', () => {
    const prices = [7, 6, 4, 3, 1];
    test('THEN max profit is 0', () => {
      expect(maxProfit(prices)).toEqual(0);
    });
  });
});