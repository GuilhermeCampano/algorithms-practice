/**
 * [141. Linked List Cycle](https://leetcode.com/problems/linked-list-cycle/)
 *
 * Given `head`, the head of a linked list, determine if the linked list has a cycle in it.
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the `next` pointer. 
 * Internally, `pos` is used to denote the index of the node that tail's `next` pointer is connected to. Note that `pos` is not passed as a parameter.
 * Return `true` if there is a cycle in the linked list. Otherwise, return `false`.
 */
export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}


/**
 * This solution uses Floyd's cycle-finding algorithm, also known as the "tortoise and the hare" algorithm.
 * In this algorithm, two pointers are used: 
 * - The "tortoise" pointer moves one step at a time.
 * - The "hare" pointer moves two steps at a time.
 * If the linked list contains a cycle, the "hare" pointer will eventually meet the "tortoise" pointer, which confirms the existence of a cycle.
 * If there is no cycle, the "hare" pointer will reach the end of the list without meeting the "tortoise" pointer.
 * 
 * Time complexity: O(n)
 */

function floydCycleFindingAlgorithm(tortoise: ListNode | null, hare: ListNode | null): boolean {
  if (!tortoise || !hare) return false;
  if (tortoise === hare) return true;
  return floydCycleFindingAlgorithm(tortoise?.next || null, hare?.next?.next || null);
}


export function hasCycle(head: ListNode | null): boolean {
  if (!head) return false;
  return floydCycleFindingAlgorithm(head, head.next);
}