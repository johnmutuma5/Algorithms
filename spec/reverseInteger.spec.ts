import {reverse} from '../algorithms/reverseInteger';

describe('Reverse Integer', () => {
  it('should reverse positive integers', () => {
    expect(reverse(321)).toEqual(123);
  });

  it('should reverse negative integers', () => {
    expect(reverse(-421)).toEqual(-124);
  });

  it('should return 0 for +ve overflow', () => {
    expect(reverse(Math.pow(2, 31))).toEqual(0);
  });

  it('should return 0 for -ve overflow', () => {
    expect(reverse(Math.pow(-2, 31) - 1)).toEqual(0);
  });
});


