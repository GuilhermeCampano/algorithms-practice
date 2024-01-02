import { ListNode, hasCycle } from './linked-list-cycle';

describe('Liked List Cycle', () => {
  describe('GIVEN the list [3,2,0,-4] with a cycle from position 1', () => {
    const list = new ListNode(3, new ListNode(2, new ListNode(0, new ListNode(-4))));

    list.next.next.next.next = list.next;

    test('THEN it should return true', () => {
      expect(hasCycle(list)).toBe(true);
    });
  });

  describe('GIVEN the list [1,2] with a cycle from position 0', () => {
    const list = new ListNode(1, new ListNode(2));

    list.next.next = list;

    test('THEN it should return true', () => {
      expect(hasCycle(list)).toBe(true);
    });
  });

  describe('GIVEN the list [1] with a cycle from position -1', () => {
    const list = new ListNode(1);

    list.next = list;

    test('THEN it should return true', () => {
      expect(hasCycle(list)).toBe(true);
    });
  });

  describe('GIVEN the list [0,1,2,3,4,5,6,7,8,9] with cycle from position 6', () => {
    const list = new ListNode(0, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6, new ListNode(7, new ListNode(8, new ListNode(9))))))))));

    list.next.next.next.next.next.next.next.next.next = list.next.next.next.next.next.next;

    test('THEN it should return true', () => {
      expect(hasCycle(list)).toBe(true);
    });
  });
});