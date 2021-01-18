import {reverseInParentheses} from "../algorithms/reverseInParentheses";

describe('Reverse in Parentheses', () => {
  it('should evaluate case 1 correctly', () => {
    const inputString = 'foo(bar)baz';
    const expected = 'foorabbaz';
    expect(reverseInParentheses(inputString)).toBe(expected);
  });

  it('should evaluate case 2 correctly', () => {
    const inputString = '(bar)';
    const expected = 'rab';
    expect(reverseInParentheses(inputString)).toBe(expected);
  });

  it('should evaluate case 3 correctly', () => {
    const inputString = '(bar)';
    const expected = 'rab';
    expect(reverseInParentheses(inputString)).toBe(expected);
  });

  it('should evaluate case 4 correctly', () => {
    const inputString = 'foo(bar(baz))blim';
    const expected = 'foobazrabblim';
    expect(reverseInParentheses(inputString)).toBe(expected);
  });
})
