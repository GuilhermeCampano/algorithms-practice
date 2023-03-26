describe('Built in sort method', () => {
  it('Should return an array alphabetically sorted', () => {
    const array = ['Aba', 'Caca', 'Fafa', 'Baba', 'Jaja'];
    const expected = ['Aba', 'Baba', 'Caca', 'Fafa', 'Jaja'];
    expect(array.sort()).toEqual(expected);
  });

  it('should NOT return the numbers sorted', () => {
    const array = [1, 3, 15, 19, 2, 5];
    const expected = [1, 15, 19, 2, 3, 5];
    expect(array.sort()).toEqual(expected);
  });

  it('should  return the numbers sorted', () => {
    const array = [1, 3, 15, 19, 2, 5];
    const expected = [1, 2, 3, 5, 15, 19];
    expect(array.sort((a, b) => a - b)).toEqual(expected);
  });
});
