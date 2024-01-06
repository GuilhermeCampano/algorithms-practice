import { searchDivideConquer } from './searchDivideConquer';

describe('searchDivideConquer', () => {
  it('should return 4 if array is [1, 2, 3, 4, 5, 6] and target is 5', () => {
    expect(searchDivideConquer([1, 2, 3, 4, 5, 6], 5)).toEqual(4);
  });
  it('should return 2 if array is [1, 2, 3, 4, 5, 6] and target is 3', () => {
    expect(searchDivideConquer([1, 2, 3, 4, 5, 6], 3)).toEqual(2);
  });
  it('should return -1 if array is [1, 2, 3, 4, 5, 6] and target is 10', () => {  
    expect(searchDivideConquer([1, 2, 3, 4, 5, 6], 10)).toEqual(-1);
  });
  it('should return -1 if array is [1, 2, 3, 4, 5, 6] and target is 0', () => {
    expect(searchDivideConquer([1, 2, 3, 4, 5, 6], 0)).toEqual(-1);
  });
  it('should return 0 if array is [1, 2, 3, 4, 5, 6] and target is 1', () => {
    expect(searchDivideConquer([1, 2, 3, 4, 5, 6], 1)).toEqual(0);
  });
});