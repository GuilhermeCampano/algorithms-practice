export class Node {
  value: number;
  left: Node | null;
  right: Node | null;

  constructor(val: number) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

export class BinarySearchTree {
  root: Node | null;

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
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current: Node | null = this.root;
    while (current) {
      if (val === current.value) return this;
      if (val < current.value) {
        if (!current.left) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else if (val > current.value) {
        if (!current.right) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
    return this;
  }

  find(val: number): Node | null {
    if (!this.root) return null;
    let current: Node | null = this.root;
    let found = false;
    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
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
    let current: Node | null = this.root;
    const found = false;
    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
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
  bfs(): Node[] {
    const data: Node[] = [];
    const queue: Node[] = [];
    let node = this.root;
    if (node) queue.push(node);
    while (queue.length) {
      node = <Node>queue.shift()!;
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
  dfsPreOrder(): Node[] {
    const data: Node[] = [];
    const current = this.root;
    function traverse(node: Node | null) {
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
  dfsPostOrder(): Node[] {
    const data: Node[] = [];
    const current = this.root;
    function traverse(node: Node | null) {
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
  dfsInOrder(): Node[] {
    const data: Node[] = [];
    const current = this.root;
    function traverse(node: Node | null) {
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