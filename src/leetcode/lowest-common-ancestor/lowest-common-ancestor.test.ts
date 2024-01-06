import { lowestCommonAncestor, TreeNode } from './lowest-common-ancestor';

describe('Lowest Common Ancestor', () => {
  let tree: TreeNode;


 /**
   *     6
   *    / \
   *   2   8
   *  / \ / \
   * 0  4 7  9
   *   / \
   *  3   5
  */
  describe('GIVEN a tree [6,2,8,0,4,7,9,null,null,3,5]', () => {
    beforeEach(() => {
      tree = new TreeNode(6, new TreeNode(2, new TreeNode(0), new TreeNode(4, new TreeNode(3), new TreeNode(5))), new TreeNode(8, new TreeNode(7), new TreeNode(9)));
    });
    describe('WHEN p = 2 and q = 8', () => {
      const p = new TreeNode(2);
      const q = new TreeNode(8);
      it('THEN the lowest common ancestor is 6', () => {
        const expected = new TreeNode(6);
        expect(lowestCommonAncestor(tree, p, q)?.val).toEqual(expected.val);
      });
    });

    describe('WHEN p = 2 and q = 4', () => {
      const p = new TreeNode(2);
      const q = new TreeNode(4);
      it('THEN the lowest common ancestor is 2', () => {
        const expected = new TreeNode(2);
        expect(lowestCommonAncestor(tree, p, q)?.val).toEqual(expected.val);
      });
    });
  });

  describe('GIVEN a tree [2,1]', () => {
    beforeEach(() => {
      tree = new TreeNode(2, new TreeNode(1));
    });
    describe('WHEN p = 2 and q = 1', () => {
      const p = new TreeNode(2);
      const q = new TreeNode(1);
      it('THEN the lowest common ancestor is 2', () => {
        const expected = new TreeNode(2);
        expect(lowestCommonAncestor(tree, p, q)?.val).toEqual(expected.val);
      });
    });
  });
});