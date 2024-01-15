import {middleNode, ListNode} from './middle-of-the-linked-list';

describe('Middle of the Linked List', () => {
  it('should return the node 3 in the list [1,2,3,4,5]', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5)))));
    const result = middleNode(head);
    expect(result?.val).toEqual(3);
  });

  it('should return the node 4 in the list [1,2,3,4,5,6]', () => {
    const head = new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5, new ListNode(6))))));
    const result = middleNode(head);
    expect(result?.val).toEqual(4);
  });
  

  it('should return the node 2 in the list [1,2]', () => {
    const head = new ListNode(1, new ListNode(2));
    const result = middleNode(head);
    expect(result?.val).toEqual(2);
  });

  it('should return the node 1 in the list [1]', () => {
    const head = new ListNode(1);
    const result = middleNode(head);
    expect(result?.val).toEqual(1);
  });

  it('should return null in the list []', () => {
    const head = null;
    const result = middleNode(head);
    expect(result).toEqual(null);
  });
});