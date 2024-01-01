/**
 * [110. Balanced Binary Tree](https://leetcode.com/problems/balanced-binary-tree/)
 * A height-balanced binary tree is a binary tree in which the depth of the two subtrees of every node never differs by more than one.
*/

import { TreeNode } from '../datastructures/binary-search-tree';


function subtreeHeight(node: TreeNode | null): number {
  if (!node) return 0;
  
  const leftHeight = subtreeHeight(node.left);
  if (leftHeight === -1) return -1; // left subtree is not balanced

  const rightHeight = subtreeHeight(node.right);
  if (rightHeight === -1) return -1; // right subtree is not balanced

  if (Math.abs(leftHeight - rightHeight) > 1) return -1;

  return Math.max(leftHeight, rightHeight) + 1;
}

export function isBalanced(root: TreeNode | null): boolean {
  return subtreeHeight(root) !== -1;
}