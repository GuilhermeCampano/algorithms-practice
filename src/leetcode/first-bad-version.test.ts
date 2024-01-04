import { firstBadVersion } from './first-bad-version';
describe('first-bad-version', () => {

  describe('GIVEN the first bad version is 4', () => {
    const isBadVersionApi = (n: number) => n >= 4;

    describe('WHEN there are 5 versions', () => {
      it('THEN returns 4', () => {
        expect(firstBadVersion(isBadVersionApi)(5)).toBe(4);
      });
    });
  });

  describe('GIVEN the first bad version is 1', () => {
    const isBadVersionApi = (n: number) => n >= 1;

    describe('WHEN there are 1 version', () => {
      it('THEN returns 1', () => {
        expect(firstBadVersion(isBadVersionApi)(1)).toBe(1);
      });
    });
  });


  describe('GIVEN the first bad version is 50', () => {
    const isBadVersionApi = (n: number) => n >= 50;

    describe('WHEN there are 100 versions', () => {
      it('THEN returns 1', () => {
        expect(firstBadVersion(isBadVersionApi)(100)).toBe(50);
      });
    });
  });
});