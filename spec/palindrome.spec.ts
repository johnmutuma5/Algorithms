import "jasmine";
import { isPalindrome } from '../algorithms/palindrome';

describe('Palindromes', () => {
  it('should mark `Deleveled` as a palindrome', () => {
    expect(isPalindrome('Deleveled')).toBe(true);
  });

  it('should mark `notApalindrome` as false', () => {
    expect(isPalindrome('notApalindrome')).toBe(false);
  });
})
