/**
 * [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue
 
* inbox stack: Used for enqueueing elements, where each new element is pushed onto this stack.
 * outbox stack: Used for dequeueing elements, where elements are popped from this stack, and if it's empty, all elements from inbox are transferred to it, reversing their order to achieve queue behavior.
 * This strategy makes the pop() operation O(n), in the worst case, but the amortized cost is O(1)
 * 
 * Example:
 * inbox   outbox
 * | 1 |    | - |
 * | 2 |    | - |
 * | - |
 * 
 * push(3)
 * inbox   outbox
 * | 1 |    | - |
 * | 2 |    | - |
 * | 3 |    | - |
 * 
 * 
 * pop()
 * inbox   outbox
 * | 1 |    | 3 |
 * | 2 | -> | 2 |
 * | 3 |    | 1 |
 * inbox   outbox
 * | - |    | 3 |
 * | - |    | 2 |
 * | - |    | - |
 * returns 1
*/
export class MyQueue {
  private inbox = new Stack<number>();
  private outbox = new Stack<number>();

  push(x: number): void {
    this.enqueue(x);
  }

  pop(): number {
    this.transferFromInboxToOutbox();
    return this.dequeue();
  }

  peek(): number {
    this.transferFromInboxToOutbox();
    return <number>this.outbox.peek();
  }

  empty(): boolean {
    return this.inbox.empty() && this.outbox.empty();
  }

  private enqueue(item: number): void {
    this.inbox.push(item);
  }

  private dequeue(): number {
    this.transferFromInboxToOutbox();
    return <number>this.outbox.pop();
  }

  private transferFromInboxToOutbox(): void {
    if (this.outbox.empty()) {
      while (!this.inbox.empty()) {
        const item = <number>this.inbox.pop();
        this.outbox.push(item);
      }
    }
  }
}


export class Stack<T> {
  #stack: T[] = [];

  push(x: T): void {
    this.#stack.push(x);
  }

  pop(): T | undefined {
    return this.#stack.pop();
  }

  peek(): T {
    return this.#stack[this.#stack.length - 1];
  }

  empty(): boolean {
    return this.#stack.length === 0;
  }

  get stack() {
    return this.#stack;
  }
}