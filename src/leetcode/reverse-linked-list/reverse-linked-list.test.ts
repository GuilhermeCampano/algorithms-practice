import {reverseList, reverseListRecursive, ListNode} from './reverse-linked-list';

describe('Reverse Linked List', () => {
  it('should return null if head is null', () => {
    expect(reverseList(null)).toBeNull();
  });

  it('should return head if head.next is null', () => {
    const head = new ListNode(1);
    expect(reverseList(head)).toBe(head);
  });

  it('should return reversed list of [1,2]', () => {
    const head = new ListNode(1, new ListNode(2));
    const reversedHead = new ListNode(2, new ListNode(1));
    expect(reverseList(head)).toEqual(reversedHead);
  });

  it('should return reversed list [1,2,3,4,5]', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    const reversedHead = new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))));
    expect(reverseList(head)).toEqual(reversedHead);
  });
});

describe('Reverse Linked List Recursive', () => {
  it('should return null if head is null', () => {
    expect(reverseListRecursive(null)).toBeNull();
  });

  it('should return head if head.next is null', () => {
    const head = new ListNode(1);
    expect(reverseListRecursive(head)).toBe(head);
  });

  it('should return reversed list of [1,2]', () => {
    const head = new ListNode(1, new ListNode(2));
    const reversedHead = new ListNode(2, new ListNode(1));
    expect(reverseListRecursive(head)).toEqual(reversedHead);
  });

  it('should return reversed list [1,2,3,4,5]', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    const reversedHead = new ListNode(5, new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1)))));
    expect(reverseListRecursive(head)).toEqual(reversedHead);
  });
});