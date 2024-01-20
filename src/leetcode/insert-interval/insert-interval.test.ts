import {insert, insert2} from './insert-interval';

describe('insert', () => {
  describe('when intervals is [[1,3],[6,9]] and newInterval is [2,5]', () => {
    const intervals = [[1,3],[6,9]];
    const newInterval = [2,5];
    it('should return [[1,5],[6,9]]', () => {
      const expected = [[1,5],[6,9]];
      expect(insert(intervals, newInterval)).toEqual(expected);
      expect(insert2(intervals, newInterval)).toEqual(expected);
    });
  });

  describe('when intervals is [[1,2],[3,5],[6,7],[8,10],[12,16]] and newInterval is [4,8]', () => {
    const intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]];
    const newInterval = [4,8];
    it('should return [[1,2],[3,10],[12,16]]', () => {
      const expected = [[1,2],[3,10],[12,16]];
      expect(insert(intervals, newInterval)).toEqual(expected);
      expect(insert2(intervals, newInterval)).toEqual(expected);
    });
  });
});