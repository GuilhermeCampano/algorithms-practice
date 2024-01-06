
/**
 * 20. Valid Parentheses
 * https://leetcode.com/problems/valid-parentheses/
 * Time Complexity: O(n)
*/

export function isValid(text: string): boolean {
  const stack: string[] = [];
  const map: { [key: string]: string } = {
    '(': ')',
    '[': ']',
    '{': '}',
  };

  for (const char of text) {
    const closingBracket = map[char];
    if (closingBracket) {
      stack.push(closingBracket);
    } else {
      const charPopped = stack.pop();
      if (charPopped !== char) {
        return false;
      }
    }
  }

  return stack.length === 0;
}
