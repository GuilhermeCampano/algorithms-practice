export class Node {
  public value: number;
  public next: Node | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  public head: Node | null;
  public tail: Node | null;
  public length: number;
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: number): SinglyLinkedList | undefined {
    const node = new Node(value);
    this.length += 1;
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
      return this;
    }
    if (this.tail) {
      this.tail.next = node;
      this.tail = node;
      return this;
    }

  }

  pop(): Node | undefined {
    if (!this.head) return undefined;
    let currentNode = this.head;
    let newTail = currentNode;
    while (currentNode.next) {
      newTail = currentNode;
      currentNode = currentNode.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }
    return currentNode;
  }

  shift(): Node | undefined {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value: number): SinglyLinkedList | undefined {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      const oldHead = this.head;
      this.head = node;
      this.head.next = oldHead;
    }
    this.length += 1;
    return this;
  }

  get(index: number): Node | null {
    if (index < 0 || index > this.length - 1 || !this.head) {
      return null;
    }

    let currentNode: Node | null = this.head;
    while (index > 0) {
      currentNode = currentNode?.next || null;
      index--;
    }
    return currentNode;
  }

  set(index: number, value: number): boolean {
    if (index < 0 || index > this.length - 1) return false;
    const node = this.get(index);
    if (!node) {
      return false;
    }
    node.value = value;
    return true;
  }

  insert(index: number, value: number): boolean {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const previousNode = this.get(index - 1);
    const nextNode = previousNode?.next || null;

    if (!previousNode) return false;

    previousNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index: number): Node | boolean {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return !!this.shift();
    if (index === this.length - 1) return !!this.pop();

    const previousNode = this.get(index - 1);
    const removedNode = previousNode?.next;

    if (!previousNode || !removedNode) return false;
    previousNode.next = removedNode?.next;

    this.length--;
    return removedNode;
  }

  reverse(): SinglyLinkedList | null {
    if(!this.head) return null;
    
    let node: Node = this.head as Node;
    this.head = this.tail;
    this.tail = node;
    
    let next: Node | null = null;
    let previous: Node | null = null;
    for (let i = 0; i < this.length; i++) {
      next = node?.next || null;
      node.next = previous;
      previous = node;
      node = next as Node;
    }
    return this;
  }
}