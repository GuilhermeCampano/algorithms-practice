export function capitalizeWords(array: string[]): string[] {
  if (array.length < 1) return array;
  const word = array[0];
  const capitilized = word.toUpperCase();
  return [capitilized].concat(capitalizeWords(array.slice(1)));
}
