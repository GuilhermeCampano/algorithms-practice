import { BinarySearchTree, Node } from './binary-search-tree';

function covertToNodeArray(nodes: Node[]): number[] {
  return nodes.map((node: Node) => node.value);

}
describe('BinarySearchTree', () => {
  let tree: BinarySearchTree;

  beforeEach(() => {
    tree = new BinarySearchTree();
  });

  // INSERT
  describe('GIVEN I have an empty tree', () => {
    describe('WHEN I insert the node 1', () => {
      beforeEach(() => tree.insert(1));
      test('THEN the root should be 1', () => {
        expect(tree.root?.value).toBe(1);
      });
    });

    describe('WHEN I insert the node 2', () => {
      beforeEach(() => {
        tree.insert(1);
        tree.insert(2);
      });
      test('THEN the root right should be 2', () => {
        expect(tree.root?.right?.value).toBe(2);
      });
    });

    describe('WHEN I insert the node 3', () => {
      beforeEach(() => {
        tree.insert(1);
        tree.insert(2);
        tree.insert(3);
      });
      test('THEN the root right right should be 3', () => {
        expect(tree.root?.right?.right?.value).toBe(3);
      });
    });
  });

  // FIND
  describe('GIVEN I have a tree with [2,5,6] ', () => {
    beforeEach(() => {
      tree.insert(2);
      tree.insert(5);
      tree.insert(6);
    });
    describe('WHEN I search for the node 5', () => {
      test('THEN I should get the node with value 5', () => {
        expect(tree.find(5)?.value).toBe(5);
      });
    });
    describe('WHEN I search for the node 7', () => {
      test('THEN I should get null', () => {
        expect(tree.find(7)).toBeNull();
      });
    });
  });

  // contains
  describe('GIVEN I have a tree with [2,5,6] ', () => {
    beforeEach(() => {
      tree.insert(2);
      tree.insert(5);
      tree.insert(6);
    });
    describe('WHEN I search for the node 5', () => {
      test('THEN I should get true', () => {
        expect(tree.contains(5)).toBe(true);
      });
    });
    describe('WHEN I search for the node 7', () => {
      test('THEN I should get false', () => {
        expect(tree.contains(7)).toBe(false);
      });
    });
  });

  // BFS - breadth first search
  describe('GIVEN I have a tree with [10,6,15,3,8,20]', () => {
    beforeEach(() => {
      tree.insert(10);
      tree.insert(6);
      tree.insert(15);
      tree.insert(3);
      tree.insert(8);
      tree.insert(20);
    });
    describe('WHEN I traverse the tree', () => {
      test('THEN I should get [10,6,15,3,8,20]', () => {
        const result = covertToNodeArray(tree.bfs());
        expect(result).toEqual([10, 6, 15, 3, 8, 20]);
      });
    });
  });

  // DFS - depth first search
  describe('GIVEN I have a tree with [10,6,15,3,8,20]', () => {
    beforeEach(() => {
      tree.insert(10);
      tree.insert(6);
      tree.insert(15);
      tree.insert(3);
      tree.insert(8);
      tree.insert(20);
    });
    describe('WHEN I traverse the tree', () => {
      test('THEN I should get [10,6,3,8,15,20]', () => {
        const result = covertToNodeArray(tree.dfsPreOrder());
        expect(result).toEqual([10, 6, 3, 8, 15, 20]);
      });
    });
  });

  // DFS - depth first search - post order
  describe('GIVEN I have a tree with [10,6,15,3,8,20]', () => {
    beforeEach(() => {
      tree.insert(10);
      tree.insert(6);
      tree.insert(15);
      tree.insert(3);
      tree.insert(8);
      tree.insert(20);
    });
    describe('WHEN I traverse the tree', () => {
      test('THEN I should get [3,8,6,20,15,10]', () => {
        const result = covertToNodeArray(tree.dfsPostOrder());
        expect(result).toEqual([3, 8, 6, 20, 15, 10]);
      });
    });
  });

  // DFS - depth first search - in order
  describe('GIVEN I have a tree with [10,6,15,3,8,20]', () => {
    beforeEach(() => {
      tree.insert(10);
      tree.insert(6);
      tree.insert(15);
      tree.insert(3);
      tree.insert(8);
      tree.insert(20);
    });
    describe('WHEN I traverse the tree', () => {
      test('THEN I should get [3,6,8,10,15,20]', () => {
        const result = covertToNodeArray(tree.dfsInOrder());
        expect(result).toEqual([3, 6, 8, 10, 15, 20]);
      });
    });
  });
});