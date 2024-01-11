export class ListNode {
  val: number;
  next: ListNode | null;
  constructor(val?: number, next?: ListNode | null) {
    this.val = (val === undefined ? 0 : val);
    this.next = (next === undefined ? null : next);
  }
}


export function reverseList(head: ListNode | null): ListNode | null {
  let previousNode: ListNode | null = null;
  let currentNode = head;

  while (currentNode) {
    const nextNode = currentNode.next; // Temporarily store the next node
    currentNode.next = previousNode; // Reverse the link
    previousNode = currentNode; // Move forward in the list
    currentNode = nextNode;
  }

  return previousNode; // At the end of the loop, previousNode is the new head of the reversed list
}


export function reverseListRecursive(head: ListNode | null): ListNode | null {
  if (!head || !head.next) return head;

  function reverse(current: ListNode, parent: ListNode | null): ListNode {
    const next = current.next;
    current = new ListNode(current.val, parent); // Reverse the link

    if (!next) return current;// If there is no next node, we are at the end of the list
    return reverse(next, current); // Move forward in the list
  }

  return reverse(head, null);
}