import { Stack } from "./stack";

describe("Stack", () => {
  describe("push", () => {
    it("should have inserted the first node", () => {
      const stack = new Stack();
      stack.push(1);

      expect(stack.first.value).toEqual(1);
      expect(stack.last.value).toEqual(1);
      expect(stack.length).toEqual(1);
    });

    it("should have inserted 3 nodes", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.first.value).toEqual(3);
      expect(stack.first.next.value).toEqual(2);
      expect(stack.last.value).toEqual(1);
      expect(stack.length).toEqual(3);
    });
  });

  describe("pop", () => {
    it("should return undefined if the list has no nodes", () => {
      const stack = new Stack();
      expect(stack.pop()).toEqual(null);
    });

    it("should remove the last node", () => {
      const stack = new Stack();
      stack.push(1);
      stack.push(2);
      stack.push(3);

      expect(stack.pop().value).toEqual(3);
      expect(stack.first.value).toEqual(2);
      expect(stack.last.value).toEqual(1);
      expect(stack.length).toEqual(2);
    });

    it("should remove the only node", () => {
      const stack = new Stack();
      stack.push(1);

      expect(stack.pop().value).toEqual(1);
      expect(stack.first).toEqual(null);
      expect(stack.last).toEqual(null);
      expect(stack.length).toEqual(0);
    });
  });
});
