
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}
/* 
  Problem 876: Middle of the Linked List
  Url: https://leetcode.com/problems/middle-of-the-linked-list/
  Given the head of a singly linked list, return the middle node of the linked list.
  If there are two middle nodes, return the second middle node.
  
  Solution:
    Using the Slow and Fast Pointer Technique
    The Fast advances two nodes at a time, while the Slow advances one node at a time.

    For example in the list [1,2,3,4,5,6]
    Slow will be at 1, 2, and 3
    Fast will be at 2, 4, and 6

    When Fast reaches the end of the list, Slow will be at the middle node.

  Time Complexity: O(n/2) => O(n)
*/
export function middleNode(head: ListNode | null): ListNode | null {
  if(!head) return null;
  if(!head.next) return head;

  let slow: ListNode = head;
  let fast: ListNode | null = head.next;

  while(fast) {
    slow = <ListNode>slow.next;
    fast = <ListNode | null>fast?.next?.next;
  }
  return slow;
}

