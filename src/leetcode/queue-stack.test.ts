import { MyQueue } from './queue-stack'; // replace with the actual path to your MyQueue class

describe('Queue using stack', () => {
  let myQueue: MyQueue;

  beforeEach(() => {
    myQueue = new MyQueue();
  });

  test('should push 1 to the queue', () => {
    myQueue.push(1);
    expect(myQueue.queue).toEqual([1]);
  });

  test('should push 2 to the queue', () => {
    myQueue.push(1);
    myQueue.push(2);
    expect(myQueue.queue).toEqual([1, 2]);
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
    expect(myQueue.queue).toEqual([2]);
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
});