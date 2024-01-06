/**
 * [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/

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


function subtreeHeight(node: TreeNode | null): number {
  if (!node) return 0; // base case
  
  const leftHeight = subtreeHeight(node.left);
  const rightHeight = subtreeHeight(node.right);
  const heightDiff = Math.abs(leftHeight - rightHeight);

  if (leftHeight === -1 || rightHeight === -1 || heightDiff > 1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
}

export function isBalanced(root: TreeNode | null): boolean {
  return subtreeHeight(root) !== -1;
}