/*
  * [21] Merge Two Sorted Lists
  https://leetcode.com/problems/merge-two-sorted-lists/
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
 * Iterative solution
 * Time complexity: O(n + m)
 * 
 * [1,2,4]
 * [1,3,4]
 * 
 * Iteration 1:
 * 
 */
export function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const mergeList = new ListNode();
  let current = mergeList;

  // while both lists have values
  while (list1 && list2) {
    if (list1.val < list2.val) { 
      current.next = list1;
      list1 = list1.next; // moves list1 to the next node
    } else {
      current.next = list2;
      list2 = list2.next; // moves list2 to the next node
    }
    current = current.next;
  }

  current.next = list1 || list2;  // gets the remaining list


  return mergeList.next; // returns the next node because the first node is empty
}

export function mergeTwoListsRecursive(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  if (!list1) return list2;
  if (!list2) return list1;

  if (list1.val < list2.val) {
    list1.next = mergeTwoListsRecursive(list1.next, list2); // moves list1 to the next node
    return list1;
  } else {
    list2.next = mergeTwoListsRecursive(list1, list2.next); // moves list2 to the next node
    return list2;
  }
}