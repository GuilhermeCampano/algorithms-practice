import { SinglyLinkedList } from './singlyLinkedList';

describe('Singly Linked List', () => {
  describe('push', () => {
    it('should add a node as the head and tail if the list is empty', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);
    });
    it('should add a node as the tail if the list is not empty', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(2);
    });
    it('should increment the length of the list', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      expect(list.length).toBe(2);
    });
    it('should have a set next property on the head node', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      expect(list.head?.next?.value).toBe(2);
    });
  });
  describe('pop', () => {
    it('should return undefined if the list is empty', () => {
      const list = new SinglyLinkedList();
      expect(list.pop()).toBeUndefined();
    });
    it('should return the tail node if the list has one node', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      expect(list.pop()?.value).toBe(1);
    });
    it('should return the tail node if the list has more than one node', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      expect(list.pop()?.value).toBe(2);
    });
    it('should set the tail to the second to last node', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.pop();
      expect(list.tail?.value).toBe(1);
    });
    it('should set the next property of the new tail to null', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.pop();
      expect(list.tail?.next).toBeNull();
    });
    it('should decrement the length of the list', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.pop();
      expect(list.length).toBe(1);
    });
    it('should set the head and tail to null if the list is empty', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.pop();
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });
  });
  describe('shift', () => {
    it('should return undefined if the list is empty', () => {
      const list = new SinglyLinkedList();
      expect(list.shift()).toBeUndefined();
    });
    it('should return the head node if the list has one node', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      expect(list.shift()?.value).toBe(1);
    });
    it('should return the head node if the list has more than one node', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      expect(list.shift()?.value).toBe(1);
    });
    it('should set the head to the second node', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.shift();
      expect(list.head?.value).toBe(2);
    });
    it('should decrement the length of the list', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.shift();
      expect(list.length).toBe(1);
    });
    it('should set the head and tail to null if the list is empty', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.shift();
      expect(list.head).toBeNull();
      expect(list.tail).toBeNull();
    });
  });
  describe('unshift', () => {
    it('should add a node as the head and tail if the list is empty', () => {
      const list = new SinglyLinkedList();
      list.unshift(1);
      expect(list.head?.value).toBe(1);
      expect(list.tail?.value).toBe(1);
    });
    it('should add a node as the head if the list is not empty', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.unshift(2);
      expect(list.head?.value).toBe(2);
      expect(list.tail?.value).toBe(1);
    });
    it('should increment the length of the list', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.unshift(2);
      expect(list.length).toBe(2);
    });
    it('should have a set next property on the new head node', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.unshift(2);
      expect(list.head?.next?.value).toBe(1);
    });
  });
  describe('get', () => {
    it('should return null if the index is less than zero', () => {
      const list = new SinglyLinkedList();
      expect(list.get(-1)).toBeNull();
    });
    it('should return node at a given index', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.get(1)?.value).toBe(2);
    });
  });

  describe('set', () => {
    it('should return false if the index is greater than or equal to the length of the list', () => {
      const list = new SinglyLinkedList();
      expect(list.set(1, 1)).toBeFalsy();
    });
    it('should return false if the index is less than zero', () => {
      const list = new SinglyLinkedList();
      expect(list.set(-1, 1)).toBeFalsy();
    });
    it('should update the value of the node at the given index', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.set(1, 4);
      expect(list.get(1)?.value).toBe(4);
    });
    it('should return true if the value is updated', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.set(1, 4)).toBeTruthy();
    });
  });

  describe('insert', () => {
    it('should return false if the index is greater than the length of the list', () => {
      const list = new SinglyLinkedList();
      expect(list.insert(1, 1)).toBeFalsy();
    });
    it('should return true if the index is equal to the length of the list', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      expect(list.insert(1, 2)).toBeTruthy();
    });
    it('should return true if the index is zero', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      expect(list.insert(0, 2)).toBeTruthy();
    });
    it('should insert a node at the given index', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.insert(1, 4);
      const insertedNode = list.get(1);
      expect(insertedNode?.value).toBe(4);
      expect(insertedNode?.next?.value).toBe(2);
    });
    it('should increment the length of the list', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.insert(1, 4);
      expect(list.length).toBe(4);
    });
    it('should return true if the node is inserted', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      expect(list.insert(1, 4)).toBeTruthy();
    });
    it('should set the tail to the new node if the index is equal to the length of the list', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.insert(3, 4);
      expect(list.tail?.value).toBe(4);
    });
  });

  describe('remove', () => {
    it('should return false if the index is less than zero', () => {
      const list = new SinglyLinkedList();
      expect(list.remove(-1)).toBeFalsy();
    });
    it('should return false if the index is greater than or equal to the length of the list', () => {
      const list = new SinglyLinkedList();
      expect(list.remove(1)).toBeFalsy();
    });
    it('should remove the node at the given index', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.remove(1);
      expect(list.get(1)?.value).toBe(3);
    });
    it('should decrement the length of the list', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.remove(1);
      expect(list.length).toBe(2);
    });
  });

  describe('reverse', () => {
    it('should retunr null if the list is empty', () => {
      const list = new SinglyLinkedList();
      expect(list.reverse()).toBeNull();
    });
    it('should reverse the list', () => {
      const list = new SinglyLinkedList();
      list.push(1);
      list.push(2);
      list.push(3);
      list.reverse();
      expect(list.get(0)?.value).toBe(3);
      expect(list.get(1)?.value).toBe(2);
      expect(list.get(2)?.value).toBe(1);
    });
  });

});
