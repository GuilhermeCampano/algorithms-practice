import { MyQueue } from './queue-stack'; // replace with the actual path to your MyQueue class

describe('Queue using stack', () => {
  let myQueue: MyQueue;

  beforeEach(() => {
    myQueue = new MyQueue();
  });

  test('should push 1 to the queue', () => {
    myQueue.push(1);
    expect(myQueue.peek()).toBe(1);
  });

  test('should peek the front of the queue', () => {
    myQueue.push(1);
    myQueue.push(2);
    expect(myQueue.peek()).toBe(1);
  });

  test('should pop the front of the queue', () => {
    myQueue.push(1);
    myQueue.push(2);
    expect(myQueue.pop()).toBe(1);
    expect(myQueue.peek()).toBe(2);
  });

  test('should check if the queue is empty', () => {
    myQueue.push(1);
    myQueue.push(2);
    expect(myQueue.empty()).toBe(false);
  });

  test('should pop the last element and check if the queue is empty', () => {
    myQueue.push(1);
    myQueue.pop();
    expect(myQueue.empty()).toBe(true);
  });

  test('enqueue 1, 2, 3, 4, 5 and dequeue two items', () => {
    myQueue.push(1);
    myQueue.push(2);
    myQueue.push(3);
    myQueue.push(4);
    myQueue.push(5);
    expect(myQueue.pop()).toBe(1);
    expect(myQueue.pop()).toBe(2);
    expect(myQueue.peek()).toBe(3);
  });
});