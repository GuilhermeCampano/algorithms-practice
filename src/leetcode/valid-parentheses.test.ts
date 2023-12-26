import { isValid } from './valid-parentheses';

describe('isValid', () => {

  it('should return true if the string is empty', () => {
    expect(isValid('')).toBeTruthy();
  });

  it('should return true if the string is ()', () => {
    expect(isValid('()')).toBeTruthy();
  });

  it('should return true if the string is ()[]{} ', () => {
    expect(isValid('()[]{}')).toBeTruthy();
  });

  it('should return false if the string is (]', () => {
    expect(isValid('(]')).toBeFalsy();
  });

  it('should return true if the string is (())[{}]', () => {
    expect(isValid('(())[{}]')).toBeTruthy();
  });
});