/*
542. 01 Matrix
https://leetcode.com/problems/01-matrix/
Given an m x n binary matrix mat, return the distance of the nearest 0 for each cell.
The distance between two adjacent cells is 1.

*/
export function updateMatrix(matrix: number[][]): number[][] {
  const numberOfRows = matrix.length, numberOfColumns = matrix[0].length;
  const distanceMatrix: number[][] = Array(numberOfRows).fill(0).map(() => Array(numberOfColumns).fill(Number.MAX_SAFE_INTEGER));
  const queue: [number, number][] = [];

  // First pass: initialize distances and queue.
  for (let rowIndex = 0; rowIndex < numberOfRows; rowIndex++) {
    for (let columnIndex = 0; columnIndex < numberOfColumns; columnIndex++) {
      if (matrix[rowIndex][columnIndex] === 0) {
        distanceMatrix[rowIndex][columnIndex] = 0;
        queue.push([rowIndex, columnIndex]);  // Add all 0s to the queue.
      }
    }
  }

  // Second pass: update distances using BFS.
  const directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];  // Up, down, left, right.
  while (queue.length) {
    const [currentRow, currentColumn] = queue.shift()!;
    for (const [rowOffset, columnOffset] of directions) {
      const neighborRow = currentRow + rowOffset, neighborColumn = currentColumn + columnOffset;
      if (neighborRow >= 0 && neighborRow < numberOfRows && neighborColumn >= 0 && neighborColumn < numberOfColumns && distanceMatrix[currentRow][currentColumn] + 1 < distanceMatrix[neighborRow][neighborColumn]) {
        distanceMatrix[neighborRow][neighborColumn] = distanceMatrix[currentRow][currentColumn] + 1;
        queue.push([neighborRow, neighborColumn]);
      }
    }
  }

  return distanceMatrix;
}