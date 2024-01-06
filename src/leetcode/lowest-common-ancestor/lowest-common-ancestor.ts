
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
 * [235. Lowest Common Ancestor of a Binary Search Tree]
 * (https://leetcode.com/problems/lowest-common-ancestor-of-a-binary-search-tree/)
 * 
 * LCA of a BST is the deepest node that has both p and q as descendants
 * 
 * Constraints:
 * - The number of nodes in the tree is in the range [2, 10^5].
 * - -10^9 <= Node.val <= 10^9
 * - All Node.val are unique.
 * - p != q
 * - p and q will exist in the BST.
 */
export function lowestCommonAncestor(root: TreeNode | null, p: TreeNode | null, q: TreeNode | null): TreeNode | null {
  // Base case
  if (root === null || p === null || q === null) {
    return null;
  }

  // Check if both nodes are in the right subtree
  if ( (p.val > root.val) && (q.val > root.val)) {
    return lowestCommonAncestor(root.right, p, q);
  }

  // Check if both nodes are in the left subtree
  if ( (p.val < root.val) && (q.val < root.val)) {
    return lowestCommonAncestor(root.left, p, q);
  } 

  // If both nodes are in different subtrees, then root is the LCA
  // If one of the nodes is the root, then root is the LCA
  return root;
}
