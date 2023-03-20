import { SinglyLinkedList } from "./singlyLinkedList";

describe("Singly Linked List", () => {
  describe("push", () => {
    it("should have inserted the first node", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(1);

      expect(singlyLinkedList.head.value).toEqual(1);
      expect(singlyLinkedList.tail.value).toEqual(1);
    });

    it("should have inserted the second node", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(1);
      singlyLinkedList.push(2);

      expect(singlyLinkedList.head.value).toEqual(1);
      expect(singlyLinkedList.head.next.value).toEqual(2);

      expect(singlyLinkedList.tail.value).toEqual(2);
    });

    it("should have inserted 5 nodes", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(1);
      singlyLinkedList.push(2);
      singlyLinkedList.push(3);
      singlyLinkedList.push(4);
      const result = singlyLinkedList.push(5);

      expect(result.head.value).toEqual(1);
      expect(result.head.next.value).toEqual(2);
      expect(result.head.next.next.value).toEqual(3);
      expect(result.head.next.next.next.value).toEqual(4);
      expect(result.head.next.next.next.next.value).toEqual(5);
      expect(result.tail.value).toEqual(5);
    });
  });

  describe("pop", () => {
    it("should return undefined if the list has no nodes", () => {
      const singlyLinkedList = new SinglyLinkedList();
      expect(singlyLinkedList.pop()).toEqual(undefined);
    });

    it("should remove the last node", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(1);
      singlyLinkedList.push(2);
      singlyLinkedList.push(3);

      expect(singlyLinkedList.pop().value).toEqual(3);
      expect(singlyLinkedList.tail.value).toEqual(2);
    });

    it("should remove the only node", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(1);

      expect(singlyLinkedList.pop().value).toEqual(1);
      expect(singlyLinkedList.head).toEqual(null);
      expect(singlyLinkedList.tail).toEqual(null);
    });
  });

  describe("shift", () => {
    it("should return undefined if the list has no nodes", () => {
      const singlyLinkedList = new SinglyLinkedList();
      expect(singlyLinkedList.shift()).toEqual(undefined);
      expect(singlyLinkedList.length).toEqual(0);
    });

    it("should remove the first node", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(1);
      singlyLinkedList.push(2);

      expect(singlyLinkedList.shift().value).toEqual(1);
      expect(singlyLinkedList.head.value).toEqual(2);
      expect(singlyLinkedList.length).toEqual(1);
    });

    it("should remove the only node", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(1);

      expect(singlyLinkedList.shift().value).toEqual(1);
      expect(singlyLinkedList.head).toEqual(null);
      expect(singlyLinkedList.tail).toEqual(null);
    });
  });

  describe("unshift", () => {
    it("should have inserted the first node", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.unshift(1);

      expect(singlyLinkedList.head.value).toEqual(1);
      expect(singlyLinkedList.tail.value).toEqual(1);
    });

    it("should have inserted the second node at the beggining", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(1);
      singlyLinkedList.push(2);
      singlyLinkedList.unshift(100);

      expect(singlyLinkedList.head.value).toEqual(100);
      expect(singlyLinkedList.head.next.value).toEqual(1);
      expect(singlyLinkedList.tail.value).toEqual(2);
      expect(singlyLinkedList.length).toEqual(3);
    });
  });

  describe("get", () => {
    it("should return null if there is no node", () => {
      const singlyLinkedList = new SinglyLinkedList();
      expect(singlyLinkedList.get(10)).toEqual(null);
    });

    it("should return null if there the node does not exist", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(1);
      expect(singlyLinkedList.get(100)).toEqual(null);
    });

    it("should return the correspoding node of the index", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(1);
      singlyLinkedList.push(2);
      singlyLinkedList.push(3);
      singlyLinkedList.push(4);

      expect(singlyLinkedList.get(0).value).toEqual(1);
      expect(singlyLinkedList.get(1).value).toEqual(2);
      expect(singlyLinkedList.get(2).value).toEqual(3);
      expect(singlyLinkedList.get(3).value).toEqual(4);
      expect(singlyLinkedList.get(50)).toEqual(null);
    });
  });

  describe("set", () => {
    it("should return false the given node is not found", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(1);
      expect(singlyLinkedList.set(100, 2)).toEqual(false);
    });

    it("should update the value of a given node", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push("first node");
      singlyLinkedList.push("second node");
      expect(singlyLinkedList.set(1, "updated second node")).toEqual(true);
      expect(singlyLinkedList.get(1).value).toEqual("updated second node");
    });
  });

  describe("insert", () => {
    it("should return false if index is less than 0", () => {
      const singlyLinkedList = new SinglyLinkedList();
      expect(singlyLinkedList.insert(-5, 100)).toEqual(false);
    });

    it("should return false if index is greater than the length", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push("first node");
      expect(singlyLinkedList.insert(5, 100)).toEqual(false);
    });

    it("should return true if the inserted node is the last one", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push("first node");
      expect(singlyLinkedList.insert(1, "last node")).toEqual(true);
      expect(singlyLinkedList.tail.value).toEqual("last node");
    });

    it("should return true if the inserted node is the first one", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push("first node");
      expect(singlyLinkedList.insert(0, "new first node node")).toEqual(true);
      expect(singlyLinkedList.head.value).toEqual("new first node node");
    });

    it("should return true if the new node is inserted in the middel", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push("first node");
      singlyLinkedList.push("second node");

      expect(singlyLinkedList.insert(1, "middle node")).toEqual(true);
      expect(singlyLinkedList.get(0).value).toEqual("first node");
      expect(singlyLinkedList.get(1).value).toEqual("middle node");
      expect(singlyLinkedList.get(2).value).toEqual("second node");
    });
  });

  describe("remove", () => {
    it("should return null if index is less than 0", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push("node");
      expect(singlyLinkedList.remove(-1)).toEqual(null);
    });

    it("should return null if index is greater than list length", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push("node");
      expect(singlyLinkedList.remove(100)).toEqual(null);
    });

    it("should remove the first node", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push("node");
      expect(singlyLinkedList.remove(0).value).toEqual("node");
    });

    it("should remove the last node", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push("node");
      singlyLinkedList.push("last node");
      expect(singlyLinkedList.remove(1).value).toEqual("last node");
    });

    it("should remove a node in the middle", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push("first node");
      singlyLinkedList.push("middle node");
      singlyLinkedList.push("last node");

      expect(singlyLinkedList.remove(1).value).toEqual("middle node");
      expect(singlyLinkedList.length).toEqual(2);
    });
  });

  describe("reverse", () => {
    it("should have reverse the order of nodes", () => {
      const singlyLinkedList = new SinglyLinkedList();
      singlyLinkedList.push(100);
      singlyLinkedList.push(200);
      singlyLinkedList.push(300);
      singlyLinkedList.push(400);

      singlyLinkedList.reverse();

      expect(singlyLinkedList.head.value).toEqual(400);
      expect(singlyLinkedList.get(1).value).toEqual(300);
      expect(singlyLinkedList.get(2).value).toEqual(200);
      expect(singlyLinkedList.tail.value).toEqual(100);
    });
  });
});
