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

  insert(val: number): BinarySearchTree | undefined {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current: Node | null = this.root;
    while (current) {
      if (val === current.value) return undefined;
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