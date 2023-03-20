export class SimpleStack {
  constructor(stack = []) {
    this.stack = stack;
  }
  add(value) {
    return this.stack.push(value);
  }

  remove(value) {
    return this.stack.pop();
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.length) {
      this.first = newNode;
      this.last = newNode;
    } else {
      const oldFirst = this.first;
      this.first = newNode;
      this.first.next = oldFirst;
    }

    this.length += 1;
    return this.length;
  }

  pop() {
    if (!this.length) return null;

    const oldFirst = this.first;
    if (this.length === 1) {
      this.first = this.last = null;
    } else {
      this.first = this.first.next;
    }

    this.length--;
    return oldFirst;
  }
}
