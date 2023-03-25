import { power } from './power';

describe('power', () => {
  it('should return the power of a number', () => {
    expect(power(2, 0)).toBe(1);
  });
  it('should return the power of a number', () => {
    expect(power(2, 2)).toBe(4);
  }); 
});
