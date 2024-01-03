/**
 * [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue
 */
export class MyQueue {
  #inbox: Stack<number>;
  #outbox: Stack<number>;

  constructor() {
    this.#inbox = new Stack<number>();
    this.#outbox = new Stack<number>();
  }

  push(x: number): void {
    this.enqueue(x);
  }

  pop(): number {
    return this.dequeue();
  }

  peek(): number {
    if (this.#outbox.empty()) {
      while (!this.#inbox.empty()) {
        const item = <number>this.#inbox.pop();
        this.#outbox.push(item);
      }
    }
    return <number>this.#outbox.peek();
  }

  empty(): boolean {
    return this.#inbox.empty() && this.#outbox.empty();
  }

  private enqueue(item: number): void {
    this.#inbox.push(item);
  }

  private dequeue(): number  {
    if(this.#outbox.empty()) {
      while(!this.#inbox.empty()) {
        const item = <number>this.#inbox.pop();
        this.#outbox.push(item);
      }
    }
    return <number>this.#outbox.pop();
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