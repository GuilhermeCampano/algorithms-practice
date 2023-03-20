export function capitalizeFirst(array) {
  if (array.length <= 0) return array;
  const word = array[0];
  const capitilized = word.charAt(0).toUpperCase() + word.slice(1);
  return [capitilized].concat(capitalizeFirst(array.slice(1)));
}
