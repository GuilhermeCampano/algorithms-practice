import { capitalizeWords } from './capitalize-words';

describe('capitalizeWords', () => {
  it( 'should return an array of capitalized words', () => {
    expect(capitalizeWords(['i', 'am', 'using', 'recursion'])).toEqual(['I', 'AM', 'USING', 'RECURSION']);
  });
  it( 'should return an empty array', () => {
    expect(capitalizeWords([])).toEqual([]);
  });
});
