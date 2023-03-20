export class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

export class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(value) {
    const node = new Node(value);
    if (!this.head) {
      this.head = node;
      this.tail = this.head;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length += 1;
    return this;
  }

  pop() {
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

  shift() {
    if (!this.head) return undefined;
    const currentHead = this.head;
    this.head = this.head.next;
    this.length--;
    if (this.length === 0) {
      this.tail = null;
    }
    return currentHead;
  }

  unshift(value) {
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

  get(index) {
    if (index < 0 || index > this.length - 1 || !this.head) {
      return null;
    }

    let currentNode = this.head;
    while (index > 0) {
      currentNode = currentNode.next;
      index--;
    }
    return currentNode;
  }

  set(index, value) {
    let node = this.get(index);
    if (!node) {
      return false;
    }
    node.value = value;
    return true;
  }

  insert(index, value) {
    if (index < 0 || index > this.length) return false;
    if (index === this.length) return !!this.push(value);
    if (index === 0) return !!this.unshift(value);

    const newNode = new Node(value);
    const previousNode = this.get(index - 1);
    const nextNode = previousNode.next;

    previousNode.next = newNode;
    newNode.next = nextNode;
    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const previousNode = this.get(index - 1);
    const removedNode = previousNode.next;
    previousNode.next = removedNode.next;
    this.length--;
    return removedNode;
  }

  reverse() {
    let node = this.head;
    this.head = this.tail;
    this.tail = node;
    let next;
    let previous = null;
    for (let i = 0; i < this.length; i++) {
      next = node.next;
      node.next = previous;
      previous = node;
      node = next;
    }
    return this;
  }
}
/*

100 -> 200 -> 300 -> 400 -> 500
TAIL                       HEAD

i=0
null    100 -> 200 -> 300 -> 400 -> 500
        TAIL                        HEAD
PREV  <- NODE  <- NEXT

i=1
null    100 -> 200 -> 300 -> 400 -> 500
        TAIL                        HEAD
        PREV<- NODE<- NEXT




[100 200 300 400 500]
head = 100 head.next = 200
tail = 500 tail.next = null
----
reverse()
node = N100
head = N500
tail = N100
next = undefined
previous - null

i=0
next = N100.next = N200
node.next = previous = null
previous = N100
node = N200

N100 -> null
N500 -> null


i=1
previous = N100
node = N200

next = N200.next = N300
node.next = previous = N100
N200 -> N100
previous = N200
next = N300

N500 ... N200 -> N100 -> null

i2
N500 ... N300 -> N200 -> N100 -> null

i3
N500 ... N400 -> N300 -> N200 -> N100 -> null

i4
N500 -> N400 -> N300 -> N200 -> N100 -> null

----
100 -> 200 -> 300 -> 400 -> 500
TAIL                       HEAD

i=0

100 -> 200 -> 300 -> 400 -> 500
TAIL                        HEAD
NODE

*/
