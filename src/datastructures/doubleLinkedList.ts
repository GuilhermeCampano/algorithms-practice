class Node {
  value: number | string;
  prev: Node | null;
  next: Node | null;

  constructor(value) {
    this.value = value;
    this.prev = null;
    this.next = null;
  }
}

export class DoubleLinkedList {
  head: Node | null;
  tail: Node | null;
  length: number;

  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value: number | string) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else if (this.tail) {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop(): Node | null {
    if (!this.head) return null;
    const poppedNode = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;
    return poppedNode;
  }

  shift(): Node | null {
    if (!this.head) return null;
    const oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head.prev = null;
      oldHead.next = null;
    }
    this.length--;
    return oldHead;
  }

  unshift(value: number | string): DoubleLinkedList {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index: number): Node | null {
    if (index < 0 || index >= this.length) return null;
    const middle = Math.floor(this.length / 2);
    let count, current;
    if (index < middle) {
      count = 0;
      current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
    } else {
      count = this.length - 1;
      current = this.tail;
      while (count !== middle) {
        current = current.prev;
        count--;
      }
    }
    return current;
  }

  set(index:number, value: number | string): boolean {
    const foundNode = this.get(index);
    if (foundNode) {
      foundNode.value = value;
      return true;
    }
    return false;
  }

  insert(index:number, value: number | string): boolean {
    if (index < 0 || index >= this.length) return false;
    if (index === 0) return this.unshift(value);
    if (index === this.length) return this.push(value);

    const newNode = new Node(value);
    const beforeNode = this.get(index - 1);
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return this;
  }

  remove(index: number): Node | null {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();
    const removedNode = this.get(index);
    const beforeNode = removedNode.prev;
    const afterNode = removedNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;
    removedNode.prev = null;
    removedNode.next = null;
    this.length--;
    return removedNode;
  }

  reverse(): DoubleLinkedList {
    if (!this.head) return null;
    let currentNode = this.head;
    this.tail = currentNode;

    while (currentNode !== null) {
      let prev = currentNode.prev;
      currentNode.prev = currentNode.next;
      currentNode.next = prev;

      if (currentNode.prev) {
        currentNode = currentNode.prev;
      } else {
        this.head = currentNode;
        break;
      }
    }
    return this;
  }
}
