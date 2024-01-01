import { isBalanced } from './balanced-tree';
import { TreeNode } from '../datastructures/binary-search-tree';

describe('Balanced Binary Tree', () => {

  /**
   *     3
   *    / \
   *   9  20
   *     /  \
   *    15   7
   */
  describe('GIVEN the tree [3,9,20,null,null,15,7]', () => {
    const tree = new TreeNode(3,
      new TreeNode(9),
      new TreeNode(20,
        new TreeNode(15),
        new TreeNode(7)
      )
    );
    test('THEN the tree should be balanced', () => {
      expect(isBalanced(tree)).toBe(true);
    });
  });

  /**
   *       1
   *      / \
   *     2   2
   *    / \
   *   3   3
   *  / \
   * 4   4
   */
  describe('GIVEN the tree [1,2,2,3,3,null,null,4,4]', () => {
    const tree = new TreeNode(1,
      new TreeNode(2,
        new TreeNode(3,
          new TreeNode(4),
          new TreeNode(4)
        ),
        new TreeNode(3)
      ),
      new TreeNode(2)
    );
    test('THEN the tree should not be balanced', () => {
      expect(isBalanced(tree)).toBe(false);
    });
  });

  describe('GIVEN the tree []', () => {
    const tree = new TreeNode();
    test('THEN the tree should be balanced', () => {
      expect(isBalanced(tree)).toBe(true);
    });
  });

});