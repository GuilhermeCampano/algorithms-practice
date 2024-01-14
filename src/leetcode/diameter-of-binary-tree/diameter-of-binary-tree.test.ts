import {diameterOfBinaryTree, TreeNode} from './diameter-of-binary-tree';

describe('Diameter of Binary Tree', () => {

  /**
   *     1
   *    / \
   *   2    3
   *  / \
   * 4  5
   */
  it('should return 3 for [1,2,3,4,5]', () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3));
    expect(diameterOfBinaryTree(root)).toBe(3);
  });

  it('should return 1 for [1,2]', () => {
    const root = new TreeNode(1, new TreeNode(2));
    expect(diameterOfBinaryTree(root)).toBe(1);
  });

  it('should return 3 for [1,2,3,5]', () => {
    const root = new TreeNode(1, new TreeNode(2, new TreeNode(5)), new TreeNode(3));
    expect(diameterOfBinaryTree(root)).toBe(3);
  });
});