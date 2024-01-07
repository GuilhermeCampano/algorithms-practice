import { climbStairs, climbStairs2 } from './climbing-stairs';

describe('Climbing Stairs Space Complexity O(n)', () => {
  describe('GIVEN a staircase with 1 step', () => {
    it('SHOULD return 1', () => {
      expect(climbStairs(1)).toBe(1);
    });
  });

  describe('GIVEN a staircase with 2 steps', () => {
    it('SHOULD return 2', () => {
      expect(climbStairs(2)).toBe(2);
    });
  });

  describe('GIVEN a staircase with 3 steps', () => {
    it('SHOULD return 3', () => {
      expect(climbStairs(3)).toBe(3);
    });
  });

  describe('GIVEN a staircase with 4 steps', () => {
    it('SHOULD return 5', () => {
      expect(climbStairs(4)).toBe(5);
    });
  });

  describe('GIVEN a staircase with 5 steps', () => {
    it('SHOULD return 8', () => {
      expect(climbStairs(5)).toBe(8);
    });
  });

  describe('GIVEN a staircase with 6 steps', () => {
    it('SHOULD return 13', () => {
      expect(climbStairs(6)).toBe(13);
    });
  });
});

describe('Climbing Stairs Space Complexity O(1)', () => {
  describe('GIVEN a staircase with 1 step', () => {
    it('SHOULD return 1', () => {
      expect(climbStairs2(1)).toBe(1);
    });
  });

  describe('GIVEN a staircase with 2 steps', () => {
    it('SHOULD return 2', () => {
      expect(climbStairs2(2)).toBe(2);
    });
  });

  describe('GIVEN a staircase with 3 steps', () => {
    it('SHOULD return 3', () => {
      expect(climbStairs2(3)).toBe(3);
    });
  });

  describe('GIVEN a staircase with 4 steps', () => {
    it('SHOULD return 5', () => {
      expect(climbStairs2(4)).toBe(5);
    });
  });

  describe('GIVEN a staircase with 5 steps', () => {
    it('SHOULD return 8', () => {
      expect(climbStairs2(5)).toBe(8);
    });
  });

  describe('GIVEN a staircase with 6 steps', () => {
    it('SHOULD return 13', () => {
      expect(climbStairs2(6)).toBe(13);
    });
  });
});