/**
 * 226. Invert Binary Tree
 * https://leetcode.com/problems/invert-binary-tree/
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
