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

export class BinarySearchTree {
  root: TreeNode | null;

  constructor() {
    this.root = null;
  }

  /**
   * When inserting a node, the value of the node is compared to the value of the current node
   * If the value is less than the current node, the value is inserted to the left of the current node
   * If the value is greater than the current node, the value is inserted to the right of the current node
   * 
   * For example, inserting the values 5, 3, and 7 in that order would result in the following tree:
   *  5
   * / \
   * 3  7
   * ---------------------------------------
   * Time complexity: O(log n)
   * This is because the tree is divided in half each time a node is compared, for instance:
   * a tree with 16 nodes will take 4 steps to find the node (log2(16) = 4 or 2^4 = 16)
   */
  insert(val: number): BinarySearchTree {
    const newTreeNode = new TreeNode(val);
    if (!this.root) {
      this.root = newTreeNode;
      return this;
    }
    let current: TreeNode | null = this.root;
    while (current) {
      if (val === current.val) return this;
      if (val < current.val) {
        if (!current.left) {
          current.left = newTreeNode;
          return this;
        }
        current = current.left;
      } else if (val > current.val) {
        if (!current.right) {
          current.right = newTreeNode;
          return this;
        }
        current = current.right;
      }
    }
    return this;
  }

  find(val: number): TreeNode | null {
    if (!this.root) return null;
    let current: TreeNode | null = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return null;
    return current;
  }

  contains(val: number): boolean {
    if (!this.root) return false;
    let current: TreeNode | null = this.root;
    const found = false;
    while (current && !found) {
      if (val < current.val) {
        current = current.left;
      } else if (val > current.val) {
        current = current.right;
      } else {
        return true;
      }
    }
    return false;
  }

  /**
   * Breadth-First Search (BFS)
   * The algorithm begins at the root of the tree,
   * and explores all its neighboring nodes at the current depth level before progressing to nodes at the next depth level.
   *
   * Consider the following binary tree:
   *     10
   *    /  \
   *   6   15
   *  / \    \
   * 3   8   20
   *          \
   *          30
   * Therefore, the BFS traversal of this tree would be:
   * [10, 6, 15, 3, 8, 20, 30]
   */
  bfs(): TreeNode[] {
    const data: TreeNode[] = [];
    const queue: TreeNode[] = [];
    let node = this.root;
    if (node) queue.push(node);
    while (queue.length) {
      node = <TreeNode>queue.shift()!;
      data.push(node);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  /**
   * Depth-First Search (DFS) - Pre Order
   * The algorithm starts at the root node and explores as far as possible along each branch before backtracking.
   * For example, the following tree:
   *     10
   *    /  \
   *   6   15
   *  / \    \
   * 3   8   20
   *          \
   *          30
   *
   * Would be traversed in the following order:
   * [10, 6, 3, 8, 15, 20, 30]  
   */
  dfsPreOrder(): TreeNode[] {
    const data: TreeNode[] = [];
    const current = this.root;
    function traverse(node: TreeNode | null) {
      if (node) {
        data.push(node);
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }

  /**
   * Depth-First Search (DFS) - Post Order
   * Similar to DFS Pre Order, except the root node is visited last.
     For example, the following tree:
   *     10
   *    /  \
   *   6   15
   *  / \    \
   * 3   8   20
   *          \
   *          30
   *
   * Would be traversed in the following order:
   * [3, 8, 6, 30, 20, 15, 10]
   **/
  dfsPostOrder(): TreeNode[] {
    const data: TreeNode[] = [];
    const current = this.root;
    function traverse(node: TreeNode | null) {
      if (node) {
        if (node.left) traverse(node.left);
        if (node.right) traverse(node.right);
        data.push(node);
      }
    }
    traverse(current);
    return data;
  }

  /**
   * Depth-First Search (DFS) - In Order
   * Similar to DFS Pre Order, except the root node is visited in the middle.
   * For example, the following tree:
   *     10
   *    /  \
   *   6   15
   *  / \    \
   * 3   8   20
   *          \
   *          30
   * 
   * Would be traversed in the following order:
   * [3, 6, 8, 10, 15, 20, 30]
   */
  dfsInOrder(): TreeNode[] {
    const data: TreeNode[] = [];
    const current = this.root;
    function traverse(node: TreeNode | null) {
      if (node) {
        if (node.left) traverse(node.left);
        data.push(node);
        if (node.right) traverse(node.right);
      }
    }
    traverse(current);
    return data;
  }

}