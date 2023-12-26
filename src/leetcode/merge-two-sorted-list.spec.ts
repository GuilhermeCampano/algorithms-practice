import { ListNode, mergeTwoLists, mergeTwoListsRecursive } from './merge-two-sorted-list';

describe('Merge Two Sorted Lists', () => {

  describe('GIVEN the list 1 is [1,2,4]', () => {
    const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
    describe('AND the list 2 is [1,3,4]', () => {
      const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
      it('THEN the result is [1,1,2,3,4,4]', () => {
        const result = mergeTwoLists(list1, list2);
        expect(result).toEqual(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))));
      });
    });
  });

  describe('GIVEN the list 1 is []', () => {
    const list1 = null;
    describe('AND the list 2 is []', () => {
      const list2 = null;
      it('THEN the result is []', () => {
        const result = mergeTwoLists(list1, list2);
        expect(result).toEqual(null);
      });
    });
  });

  describe('GIVEN the list 1 is []', () => {
    const list1 = null;
    describe('AND the list 2 is [0]', () => {
      const list2 = new ListNode(0);
      it('THEN the result is [0]', () => {
        const result = mergeTwoLists(list1, list2);
        expect(result).toEqual(new ListNode(0));
      });
    });
  });
});


describe('Merge Two Sorted Lists Recursive', () => {
    describe('GIVEN the list 1 is [1,2,4]', () => {
      const list1 = new ListNode(1, new ListNode(2, new ListNode(4)));
      describe('AND the list 2 is [1,3,4]', () => {
        const list2 = new ListNode(1, new ListNode(3, new ListNode(4)));
        it('THEN the result is [1,1,2,3,4,4]', () => {
          const result = mergeTwoListsRecursive(list1, list2);
          expect(result).toEqual(new ListNode(1, new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4)))))));
        });
      });
    });
  
    describe('GIVEN the list 1 is []', () => {
      const list1 = null;
      describe('AND the list 2 is []', () => {
        const list2 = null;
        it('THEN the result is []', () => {
          const result = mergeTwoListsRecursive(list1, list2);
          expect(result).toEqual(null);
        });
      });
    });
  
    describe('GIVEN the list 1 is []', () => {
      const list1 = null;
      describe('AND the list 2 is [0]', () => {
        const list2 = new ListNode(0);
        it('THEN the result is [0]', () => {
          const result = mergeTwoListsRecursive(list1, list2);
          expect(result).toEqual(new ListNode(0));
        });
      });
    });
});