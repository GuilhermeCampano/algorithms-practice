export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.prev = null;
  }
}

export class DoubleLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.tail) return undefined;
    const oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail.prev;
      this.tail.next = null;
      oldTail.prev = null;
    }
    this.length--;
    return oldTail;
  }

  shift() {
    if (!this.head) return undefined;
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

  unshift(value) {
    if (!this.head) return this.push(value);

    const newHead = new Node(value);
    this.head.prev = newHead;
    newHead.next = this.head;
    this.head = newHead;
    this.length++;

    return this;
  }

  get(index) {
    if (index < 0 || index > this.length - 1 || !this.length) {
      return null;
    }

    const fromHead = index <= Math.round(this.length / 2);
    let currentNode = fromHead ? this.head : this.tail;

    if (fromHead) {
      let counter = 0;
      while (counter !== index) {
        currentNode = currentNode.next;
        counter++;
      }
    } else {
      let counter = this.length - 1;
      while (counter !== index) {
        currentNode = currentNode.prev;
        counter--;
      }
    }
    return currentNode;
  }

  set(index, value) {
    let node = this.get(index);
    if (!node) return false;
    node.value = value;
    return true;
  }

  /**
    ... <-> a <-> b <-> ...         
    a <-> c
    c <-> b
    ... <-> a <-> c <-> b <-> ...
   */
  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const previousNode = this.get(index - 1);
    const nextNode = previousNode.next;

    previousNode.next = newNode;
    newNode.next = nextNode;
    newNode.prev = previousNode;
    nextNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removedNode = this.get(index);
    const previousNode = removedNode.prev;
    const nextNode = removedNode.next;
    previousNode.next = removedNode.next;
    nextNode.prev = removedNode.prev;
    removedNode.next = removedNode.prev = null;

    this.length--;
    return removedNode;
  }

  reverse() {
    let currentNode = this.tail;
    this.tail = this.head;
    this.head = currentNode;
    for (let i = this.length; i > 0; i--) {
      const previousNode = currentNode.prev;
      const nextNode = currentNode.next;
      currentNode.next = previousNode;
      currentNode.prev = nextNode;
      currentNode = currentNode.next;
    }
    return this;
  }
}
