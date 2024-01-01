/**
 * 226. Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/
 */

import { TreeNode } from '../datastructures/binary-search-tree';

function depthFirstSearch(root: TreeNode | null): void {
  if (!root?.left && !root?.right) return;
  const temporary = root.left;
  root.left = root.right;
  root.right = temporary;
  depthFirstSearch(root.left);
  depthFirstSearch(root.right);
}

export function invertTree(root: TreeNode | null): TreeNode | null {
  if (!root) return null;
  depthFirstSearch(root);
  return root;
}
