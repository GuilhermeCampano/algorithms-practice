import { reverse } from './reverse';

describe('reverse', () => {
  it('should reverse a string', () => {
    expect(reverse('sentence')).toBe('ecnetnes');
  });
});