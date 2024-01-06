import { Stack } from './stack';

describe('Stack', () => {
  let stack: Stack;

  beforeEach(() => {
    stack = new Stack();
  });

  describe('push', () => {
    it('should return the stack', () => {
      expect(stack.push(1)).toBe(stack);
    });

    it('should add a new node to the top of the stack', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.first?.value).toBe(3);
      expect(stack.first?.next?.value).toBe(2);
      expect(stack.first?.next?.next?.value).toBe(1);
      expect(stack.length).toBe(3);
    });

    it('should set the first and last properties to the same node if there is only one node', () => {
      stack.push(1);
      expect(stack.first?.value).toBe(1);
      expect(stack.last?.value).toBe(1);
      expect(stack.length).toBe(1);
    });
  });

  describe('pop', () => {
    it('should return null if there are no nodes in the stack', () => {
      expect(stack.pop()).toBe(null);
    });

    it('should remove the first node from the stack and return it', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      expect(stack.pop()?.value).toBe(3);
      expect(stack.pop()?.value).toBe(2);
      expect(stack.pop()?.value).toBe(1);
      expect(stack.length).toBe(0);
    });

    it('should set the first property to be the next property of the old first', () => {
      stack.push(1);
      stack.push(2);
      stack.push(3);
      stack.pop();
      expect(stack.first?.value).toBe(2);
      expect(stack.first?.next?.value).toBe(1);
      expect(stack.length).toBe(2);
    }); 
  });

});