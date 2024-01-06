class Node {
  value: number;
  next: Node | null;
  constructor(value: number) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  first: Node | null;
  last: Node | null;
  length: number;
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value: number): Stack {
    const newNode = new Node(value);
    if (this.length === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const temporary = this.first;
      this.first = newNode;
      this.first.next = temporary;
    }
    this.length++;
    return this;
  }

  pop(): Node | null {
    if (this.length === 0) return null;
    const temporary = this.first;
    if (this.length === 1) {
      this.last = null;
    }
    this.first = this.first?.next || null;
    this.length--;
    return temporary;
  }
}