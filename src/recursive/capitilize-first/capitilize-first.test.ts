import {capitalizeFirst} from './capitilize-first';

describe('capitalizeFirst', () => {
  it('should return an array of capitalized words', () => {
    expect(capitalizeFirst(['i', 'am', 'using', 'recursion'])).toEqual(['I', 'Am', 'Using', 'Recursion']);
  });
  it('should return an empty array', () => {
    expect(capitalizeFirst([])).toEqual([]);
  });
});