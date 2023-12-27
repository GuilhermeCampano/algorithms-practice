import { TreeNode, invertTree } from './invert-binary-tree';

describe('Invert Binary Tree', () => {

  describe('GIVEN the tree [2,1,3]', () => {
    const tree = new TreeNode(2,
      new TreeNode(1),
      new TreeNode(3)
    );
    test('THEN the tree should be [2,3,1]', () => {
      const result = invertTree(tree);
      const expectedTree  = new TreeNode(2, new TreeNode(3), new TreeNode(1));
      expect(result).toEqual(expectedTree);
    });
  });

  describe('GIVEN the tree [4,2,7,1,3,6,9]', () => {
    const tree = new TreeNode(4,
      new TreeNode(2,
        new TreeNode(1),
        new TreeNode(3)
      ),
      new TreeNode(7,
        new TreeNode(6),
        new TreeNode(9)
      )
    );
    test('THEN the tree should be [4,7,2,9,6,3,1]', () => {
      const result = invertTree(tree);
      const expectedTree  = new TreeNode(4, new TreeNode(7, new TreeNode(9), new TreeNode(6)), new TreeNode(2, new TreeNode(3), new TreeNode(1)));
      expect(result).toEqual(expectedTree);
    });
  });



  describe('GIVEN the tree []', () => {
    const tree = new TreeNode();
    test('THEN the tree should be []', () => {
      const result = invertTree(tree);
      const expectedTree  = new TreeNode();
      expect(result).toEqual(expectedTree);
    });
  });
});