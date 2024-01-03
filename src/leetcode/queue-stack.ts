/**
 * [232. Implement Queue using Stacks](https://leetcode.com/problems/implement-queue-using-stacks/)
 * Implement a first in first out (FIFO) queue using only two stacks. The implemented queue should support all the functions of a normal queue
 */
export class MyQueue {
  #queue: number[] = [];

  push(x: number): void {
    this.#queue.push(x);
  }

  pop(): number {
    return this.#queue.shift() ?? -1;
  }

  peek(): number {
    return this.#queue[0] ?? -1;
  }

  empty(): boolean {
    return this.#queue.length === 0;
  }

  get queue() {
    return this.#queue;
  }
}
