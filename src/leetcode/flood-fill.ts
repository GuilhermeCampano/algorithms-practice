/**
 * [733. Flood Fill](https://leetcode.com/problems/flood-fill/)
 * 
 * The Flood Fill algorithm is similar to the bucket fill tool in paint applications.
 * Starting from a pixel, it changes the color of the pixel and all adjacent (horizontally and vertically) pixels of the same color.
 * Time complexity: O(n)
 */
export function floodFill(image: number[][], row: number, column: number, color: number): number[][] {
  const numberOfRows = image.length;
  const numberOfColumns = image[0].length;
  const originalColor = image[row][column];

  // Don't do anything if the color is the same
  if (originalColor === color) {
    return image;
  }

  function dfs(row: number, column: number) {
    // Base case
    if (row < 0 || row == numberOfRows || column < 0 || column == numberOfColumns || image[row][column] !== originalColor) {
      return;
    }

    // Change the color
    image[row][column] = color;

    // Recursively call the function for the adjacent pixels
    dfs(row + 1, column); // Down
    dfs(row - 1, column); // Up
    dfs(row, column + 1); // Right
    dfs(row, column - 1); // Left
  }

  dfs(row, column);
  return image;
}


/**
 * Input: image = [[1,1,1],[1,1,0],[1,0,1]], sr = 1, sc = 1, color = 2
 * Output: [[2,2,2],[2,2,0],[2,0,1]]
 * 
 * Initial state:
 * 1 1 1
 * 1 1 0
 * 1 0 1
 * -------
 * After interaction at (1,1):
 * 1 1 1
 * 1 2 0
 * 1 0 1
 * -------
 * After interaction at (0,1):
 * 1 2 1
 * 1 2 0
 * 1 0 1
 * -------
 * After interaction at (1,0):
 * 1 2 1
 * 2 2 0
 * 1 0 1
 * -------
 * After interaction at (2,0):
 * 1 2 1
 * 2 2 0
 * 2 0 1
 * -------
 * After interaction at (0,2):
 * 1 2 2
 * 2 2 0
 * 2 0 1
 * -------
 * After interaction at (0,1):
 * 2 2 2
 * 2 2 0
 * 2 0 1
 * -------
 * Final state:
 * 2 2 2
 * 2 2 0
 * 2 0 1
 */


