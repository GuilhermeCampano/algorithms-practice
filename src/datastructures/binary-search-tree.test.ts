import { BinarySearchTree, Node } from './binary-search-tree';

function covertToNodeArray(nodes: Node[]): number[] {
  return nodes.map((node: Node) => node.value);

}
describe('BinarySearchTree', () => {
  // INSERT
  describe('GIVEN I have a new tree', () => {
    let tree: BinarySearchTree;

    beforeEach(() => {
      tree = new BinarySearchTree();
    });

    describe('WHEN I insert the nodes 2, 1, and 3', () => {
      beforeEach(() => {
        tree.insert(2);
        tree.insert(1);
        tree.insert(3);
      });

      test('THEN the root should be 2', () => {
        expect(tree.root?.value).toBe(2);
      });

      test('THEN the root left should be 1', () => {
        expect(tree.root?.left?.value).toBe(1);
      });

      test('THEN the root right should be 3', () => {
        expect(tree.root?.right?.value).toBe(3);
      });
    });

    describe('WHEN I insert the nodes 5, 3, 7, 2, 4, 6, and 8', () => {
      /**
      *     5
      *    / \
      *   3   7
      *  / \ / \
      * 2  4 6  8
      */
      beforeEach(() => {
        tree.insert(5);
        tree.insert(3);
        tree.insert(7);
        tree.insert(2);
        tree.insert(4);
        tree.insert(6);
        tree.insert(8);
      });

      test('THEN the root should be 5', () => {
        expect(tree.root?.value).toBe(5);
      });

      test('THEN the root left should be 3 and root right should be 7', () => {
        expect(tree.root?.left?.value).toBe(3);
        expect(tree.root?.right?.value).toBe(7);
      });

      test('THEN the left child of root left should be 2 and the right child should be 4', () => {
        expect(tree.root?.left?.left?.value).toBe(2);
        expect(tree.root?.left?.right?.value).toBe(4);
      });

      test('THEN the left child of root right should be 6 and the right child should be 8', () => {
        expect(tree.root?.right?.left?.value).toBe(6);
        expect(tree.root?.right?.right?.value).toBe(8);
      });
    });
  });

  // FIND
  describe('GIVEN I have a tree with [2,5,6]', () => {
    let tree: BinarySearchTree;

    beforeEach(() => {
      tree = new BinarySearchTree();
      tree.insert(2);
      tree.insert(5);
      tree.insert(6);
    });

    test('WHEN I find the node with value 5 THEN it should return the node', () => {
      const node = tree.find(5);
      expect(node).not.toBeNull();
      expect(node?.value).toBe(5);
    });

    test('WHEN I find the node with value 3 THEN it should return null', () => {
      const node = tree.find(3);
      expect(node).toBeNull();
    });

    test('WHEN I find the node with value 6 THEN it should return the node', () => {
      const node = tree.find(6);
      expect(node).not.toBeNull();
      expect(node?.value).toBe(6);
    });
  });

  // CONTAINS
  describe('GIVEN I have a tree with [2,5,6]', () => {
    let tree: BinarySearchTree;

    beforeEach(() => {
      tree = new BinarySearchTree();
      tree.insert(2);
      tree.insert(5);
      tree.insert(6);
    });

    test('WHEN I check if the tree contains 5 THEN it should return true', () => {
      const contains = tree.contains(5);
      expect(contains).toBe(true);
    });

    test('WHEN I check if the tree contains 3 THEN it should return false', () => {
      const contains = tree.contains(3);
      expect(contains).toBe(false);
    });

    test('WHEN I check if the tree contains 6 THEN it should return true', () => {
      const contains = tree.contains(6);
      expect(contains).toBe(true);
    });
  });

  // DFS and BFS TRAVERSAL
  describe('GIVEN I have a tree with [10,6,15,3,8,20]', () => {
    /**
    *     10
    *    /  \
    *   6   15
    *  / \    \
    * 3   8   20
    */
    let tree: BinarySearchTree;
    beforeEach(() => {
      tree = new BinarySearchTree();
      tree.insert(10);
      tree.insert(6);
      tree.insert(15);
      tree.insert(3);
      tree.insert(8);
      tree.insert(20);
    });

    describe('WHEN I traverse with breadth first search (BFS) ', () => {
      test('THEN I should get [10,6,15,3,8,20]', () => {
        const result = covertToNodeArray(tree.bfs());
        expect(result).toEqual([10, 6, 15, 3, 8, 20]);
      });
    });
    describe('WHEN I traverse with depth first search (DFS)', () => {
      test('THEN I should get [10,6,3,8,15,20]', () => {
        const result = covertToNodeArray(tree.dfsPreOrder());
        expect(result).toEqual([10, 6, 3, 8, 15, 20]);
      });
    });

    describe('WHEN I traverse with depth first search  (Post order)', () => {
      test('THEN I should get [3,8,6,20,15,10]', () => {
        const result = covertToNodeArray(tree.dfsPostOrder());
        expect(result).toEqual([3, 8, 6, 20, 15, 10]);
      });
    });

    describe('WHEN I traverse with depth first search (In order)', () => {
      test('THEN I should get [3,6,8,10,15,20]', () => {
        const result = covertToNodeArray(tree.dfsInOrder());
        expect(result).toEqual([3, 6, 8, 10, 15, 20]);
      });
    });

  });



});