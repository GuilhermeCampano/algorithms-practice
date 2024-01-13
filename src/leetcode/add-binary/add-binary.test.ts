import { addBinary, lazySolution } from './add-binary';

describe('Add Binary', () => {
  it('should return 100 when a is 11 and b is 1', () => {
    expect(addBinary('11', '1')).toBe('100');
    expect(lazySolution('11', '1')).toBe('100');
  });

  it('should return 10101 when a is 1010 and b is 1011', () => {
    expect(addBinary('1010', '1011')).toBe('10101');
    expect(lazySolution('1010', '1011')).toBe('10101');
  });

  it('should return 10000000000 when a is 1111111111 and b is 1', () => {
    expect(addBinary('1111111111', '1')).toBe('10000000000');
    expect(lazySolution('1111111111', '1')).toBe('10000000000');
  });
});