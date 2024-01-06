export function reverse(string: string): string {
  const size = string.length;
  if (string.length <= 1) return string;
  return string[size - 1] + reverse(string.substr(0, size - 1));
}
