import { DoubleLinkedList } from "./doubleLinkedList";

describe("Double Linked List", () => {
  describe("push", () => {
    it("should have inserted the first node", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push("first node");

      expect(doubleLinkedList.head.value).toEqual("first node");
      expect(doubleLinkedList.tail.value).toEqual("first node");
    });

    it("should have inserted 3 nodes", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push("first node");
      doubleLinkedList.push("second node");
      doubleLinkedList.push("third node");

      expect(doubleLinkedList.head.value).toEqual("first node");
      expect(doubleLinkedList.head.next.value).toEqual("second node");

      expect(doubleLinkedList.tail.value).toEqual("third node");
      expect(doubleLinkedList.tail.prev.value).toEqual("second node");
    });
  });

  describe("pop", () => {
    it("should return undefined if the list has no nodes", () => {
      const doubleLinkedList = new DoubleLinkedList();
      expect(doubleLinkedList.pop()).toEqual(undefined);
    });

    it("should remove the last node", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push(1);
      doubleLinkedList.push(2);
      doubleLinkedList.push(3);

      expect(doubleLinkedList.pop().value).toEqual(3);
      expect(doubleLinkedList.tail.value).toEqual(2);
    });

    it("should remove the only node", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push(1);
      doubleLinkedList.pop();

      expect(doubleLinkedList.head).toEqual(null);
      expect(doubleLinkedList.tail).toEqual(null);
    });
  });

  describe("shift", () => {
    it("should return undefined if the list has no nodes", () => {
      const doubleLinkedList = new DoubleLinkedList();
      expect(doubleLinkedList.shift()).toEqual(undefined);
    });

    it("should remove the last node", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push(1);
      doubleLinkedList.push(2);
      doubleLinkedList.push(3);

      expect(doubleLinkedList.shift().value).toEqual(1);
      expect(doubleLinkedList.head.value).toEqual(2);
    });

    it("should remove the only node", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push(1);
      doubleLinkedList.shift();

      expect(doubleLinkedList.head).toEqual(null);
      expect(doubleLinkedList.tail).toEqual(null);
    });
  });

  describe("unshift", () => {
    it("should have inserted the first node", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.unshift(1);

      expect(doubleLinkedList.head.value).toEqual(1);
      expect(doubleLinkedList.tail.value).toEqual(1);
    });

    it("should have inserted the second node at the beggining", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push(1);
      doubleLinkedList.push(2);
      doubleLinkedList.unshift(100);

      expect(doubleLinkedList.head.value).toEqual(100);
      expect(doubleLinkedList.head.next.value).toEqual(1);
      expect(doubleLinkedList.head.next.prev.value).toEqual(100);
      expect(doubleLinkedList.tail.value).toEqual(2);
      expect(doubleLinkedList.length).toEqual(3);
    });
  });

  describe("get", () => {
    it("should return null if there is no node", () => {
      const doubleLinkedList = new DoubleLinkedList();
      expect(doubleLinkedList.get(10)).toEqual(null);
    });

    it("should return null if there the node does not exist", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push(1);
      expect(doubleLinkedList.get(100)).toEqual(null);
    });

    it("should return the correspoding node of the index", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push(1);
      doubleLinkedList.push(2);
      doubleLinkedList.push(3);
      doubleLinkedList.push(4);
      doubleLinkedList.push(5);

      expect(doubleLinkedList.get(0).value).toEqual(1);
      expect(doubleLinkedList.get(1).value).toEqual(2);
      expect(doubleLinkedList.get(2).value).toEqual(3);
      expect(doubleLinkedList.get(3).value).toEqual(4);
      expect(doubleLinkedList.get(4).value).toEqual(5);
      expect(doubleLinkedList.get(50)).toEqual(null);
    });
  });

  describe("set", () => {
    it("should return false the given node is not found", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push(1);
      expect(doubleLinkedList.set(100, 2)).toEqual(false);
    });

    it("should update the value of a given node", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push("first node");
      doubleLinkedList.push("second node");
      expect(doubleLinkedList.set(1, "updated second node")).toEqual(true);
      expect(doubleLinkedList.get(1).value).toEqual("updated second node");
    });
  });

  describe("insert", () => {
    it("should return false if index is less than 0", () => {
      const doubleLinkedList = new DoubleLinkedList();
      expect(doubleLinkedList.insert(-5, 100)).toEqual(false);
    });

    it("should return false if index is greater than the length", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push("first node");
      expect(doubleLinkedList.insert(5, 100)).toEqual(false);
    });

    it("should return true if the inserted node is the last one", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push("first node");
      expect(doubleLinkedList.insert(1, "last node")).toEqual(true);
      expect(doubleLinkedList.tail.value).toEqual("last node");
    });

    it("should return true if the inserted node is the first one", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push("first node");
      expect(doubleLinkedList.insert(0, "new first node node")).toEqual(true);
      expect(doubleLinkedList.head.value).toEqual("new first node node");
    });

    it("should return true if the new node is inserted in the middel", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push("first node");
      doubleLinkedList.push("second node");

      expect(doubleLinkedList.insert(1, "middle node")).toEqual(true);

      expect(doubleLinkedList.get(0).value).toEqual("first node");
      expect(doubleLinkedList.get(0).next.value).toEqual("middle node");

      expect(doubleLinkedList.get(1).value).toEqual("middle node");
      expect(doubleLinkedList.get(1).next.value).toEqual("second node");
      expect(doubleLinkedList.get(1).prev.value).toEqual("first node");

      expect(doubleLinkedList.get(2).value).toEqual("second node");
      expect(doubleLinkedList.get(2).prev.value).toEqual("middle node");
    });
  });

  describe("remove", () => {
    it("should return null if index is less than 0", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push("node");
      expect(doubleLinkedList.remove(-1)).toEqual(null);
    });

    it("should return null if index is greater than list length", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push("node");
      expect(doubleLinkedList.remove(100)).toEqual(null);
    });

    it("should remove the first node", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push("node");
      expect(doubleLinkedList.remove(0).value).toEqual("node");
    });

    it("should remove the last node", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push("node");
      doubleLinkedList.push("last node");
      expect(doubleLinkedList.remove(1).value).toEqual("last node");
    });

    it("should remove a node in the middle", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push("first node");
      doubleLinkedList.push("middle node");
      doubleLinkedList.push("last node");

      expect(doubleLinkedList.remove(1).value).toEqual("middle node");

      expect(doubleLinkedList.get(0).value).toEqual("first node");
      expect(doubleLinkedList.get(0).next.value).toEqual("last node");

      expect(doubleLinkedList.get(1).value).toEqual("last node");
      expect(doubleLinkedList.get(1).prev.value).toEqual("first node");

      expect(doubleLinkedList.length).toEqual(2);
    });
  });

  describe("reverse", () => {
    it("should have reverse the order of nodes", () => {
      const doubleLinkedList = new DoubleLinkedList();
      doubleLinkedList.push(100);
      doubleLinkedList.push(200);
      doubleLinkedList.push(300);
      doubleLinkedList.push(400);

      doubleLinkedList.reverse();

      expect(doubleLinkedList.head.prev).toEqual(null);
      expect(doubleLinkedList.head.value).toEqual(400);
      expect(doubleLinkedList.head.next.value).toEqual(300);

      expect(doubleLinkedList.get(1).value).toEqual(300);
      expect(doubleLinkedList.get(2).value).toEqual(200);

      expect(doubleLinkedList.tail.prev.value).toEqual(200);
      expect(doubleLinkedList.tail.value).toEqual(100);
      expect(doubleLinkedList.tail.next).toEqual(null);
    });
  });
});
