export function areThereDuplicates() {
  if (arguments.length <= 1) {
    return false;
  }
  let i = 0;
  for (let j = arguments.length - 1; j > i; j--) {
    if (arguments[i] === arguments[j]) {
      return true;
    }
    i++;
    if (arguments[i] === arguments[j]) {
      return true;
    }
  }

  return false;
}
