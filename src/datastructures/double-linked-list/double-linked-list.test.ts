import { DoubleLinkedList } from './double-linked-list';

describe('Double Linked List', () => {
  describe('push', () => {
    it('should add a node to an empty list', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      expect(list.head?.value).toBe('first');
      expect(list.tail?.value).toBe('first');
      expect(list.length).toBe(1);
    });
    it('should add a node to the end of the list', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      expect(list.tail?.value).toBe('second');
      expect(list.length).toBe(2);
    });
  });

  describe('pop', () => {
    it('should remote the last node from the list', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.pop();
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });
    it('should return the removed node', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      const removed = list.pop();
      expect(removed?.value).toBe('first');
    });
    it('should return null if the list is empty', () => {
      const list = new DoubleLinkedList();
      const removed = list.pop();
      expect(removed).toBe(null);
    });
    it('should update the tail to the previous node', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      list.pop();
      expect(list.tail?.value).toBe('second');
      expect(list.tail?.next).toBe(null);
    });
    it('should update the length', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      list.pop();
      expect(list.length).toBe(2);
    });
  });

  describe('shift', () => {
    it('should remove the first node from the list', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.shift();
      expect(list.head?.value).toBe('second');
    });
    it('should return the removed node', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      const removed = list.shift();
      expect(removed?.value).toBe('first');
    });
    it('should return null if the list is empty', () => {  
      const list = new DoubleLinkedList();
      const removed = list.shift();
      expect(removed).toBe(null);
    });
    it('should update the head to the next node', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      list.shift();
      expect(list.head?.value).toBe('second');
      expect(list.head?.prev).toBe(null);
    });
  });

  describe('unshift', () => {
    it('should add a node to the beginning of the list', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.unshift('second');
      expect(list.head?.value).toBe('second');
      expect(list.head?.next?.value).toBe('first');
    });
    it('should return the list', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      const newList = list.unshift('second');
      expect(newList).toBe(list);
    });
    it('should update the length', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.unshift('second');
      expect(list.length).toBe(2);
    });
    it('should update the tail if the list is empty', () => {
      const list = new DoubleLinkedList();
      list.unshift('first');
      expect(list.tail?.value).toBe('first');
    });
    it('should update the head if the list is empty', () => {
      const list = new DoubleLinkedList();
      list.unshift('first');
      expect(list.head?.value).toBe('first');
    });
    it('should update the head and tail if the list is empty', () => {
      const list = new DoubleLinkedList();
      list.unshift('first');
      expect(list.head?.value).toBe('first');
      expect(list.tail?.value).toBe('first');
    });
  });

  describe('get', () => {
    it('should return the node at the given index', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      expect(list.get(1)?.value).toBe('second');
    });
    it('should return null if the index is out of bounds', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      expect(list.get(3)).toBe(null);
    });
    it('should return null if the list is empty', () => {
      const list = new DoubleLinkedList();
      expect(list.get(0)).toBe(null);
    });
  });
  describe('set', () => {
    it('should update the value of the node at the given index', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      list.set(1, 'updated');
      expect(list.get(1)?.value).toBe('updated');
    });
    it('should return false if the index is out of bounds', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      expect(list.set(3, 'updated')).toBe(false);
    });
  });
  describe('insert', () => {
    it('should retunr false if the index is out of bounds', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      expect(list.insert(4, 'fourth')).toBe(false);
    });
    it('should add a node at position 0', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      list.insert(0, 'zero');
      expect(list.get(0)?.value).toBe('zero');
    });
    it('should add a node in the middle of the list', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      list.insert(1, 'middle');
      expect(list.get(1)?.value).toBe('middle');
    });
  });
  describe('remove', () => {
    it('should return null if the index is out of bounds', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      expect(list.remove(3)).toBe(null);
    });
    it('should remove the node at the given index', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      list.remove(1);
      expect(list.get(1)?.value).toBe('third');
    });
    it('should update the length', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      list.remove(1);
      expect(list.length).toBe(2);
    });
    it('should update the head if the first node is removed', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      list.remove(0);
      expect(list.head?.value).toBe('second');
    });
    it('should update the tail if the last node is removed', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      list.remove(2);
      expect(list.tail?.value).toBe('second');
    });
    it('should update the head and tail if the only node is removed', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.remove(0);
      expect(list.head).toBe(null);
      expect(list.tail).toBe(null);
    });
    it('should a node in the middle of the list', () => {
      const list = new DoubleLinkedList();
      list.push('first');
      list.push('second');
      list.push('third');
      list.remove(1);
      expect(list.get(1)?.value).toBe('third');
    });
  });
});
