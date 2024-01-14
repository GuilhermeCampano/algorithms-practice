export class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.left = (left === undefined ? null : left);
    this.right = (right === undefined ? null : right);
  }
}


/**
 * Problem 543: Diameter of Binary Tree
 * URL: https://leetcode-cn.com/problems/diameter-of-binary-tree/
 * 
 * Given the root of a binary tree, the task is to return the length of the diameter of the tree.
 * The diameter of a binary tree is defined as the length of the longest path between any two nodes in the tree. 
 * This path may or may not pass through the root.
 * The length of a path between two nodes is represented by the number of edges between them.
 * 
 * Example:
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * 
 * Time Complexity: O(n)
 */
export function diameterOfBinaryTree(root: TreeNode | null): number {
  let maximumDiameter = 0;
  
  function calculateSubtreeDiameter(node: TreeNode | null): number {
    if (node === null) return 0;
    const leftSubtreeHeight = calculateSubtreeDiameter(node.left);
    const rightSubtreeHeight = calculateSubtreeDiameter(node.right);
    const currentDiameter = leftSubtreeHeight + rightSubtreeHeight;
    maximumDiameter = Math.max(maximumDiameter, currentDiameter);
    return Math.max(leftSubtreeHeight, rightSubtreeHeight) + 1;
  }
  calculateSubtreeDiameter(root);
  return maximumDiameter;
}