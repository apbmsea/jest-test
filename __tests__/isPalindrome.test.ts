import { isPalindrome } from './../src/isPalindrome';

describe('isPalindrome', () => {
    test('should return true for a palindrome word', () => {
      expect(isPalindrome('madam')).toBe(true);
    });
  
    test('should return false for a non-palindrome word', () => {
      expect(isPalindrome('hello')).toBe(false);
    });
  
    test('should return true for a palindrome phrase with spaces and punctuation', () => {
      expect(isPalindrome('A man, a plan, a canal, Panama')).toBe(true);
    });
  
    test('should return true for a single character', () => {
      expect(isPalindrome('a')).toBe(true);
    });
  
    test('should return false for an empty string', () => {
      expect(isPalindrome('')).toBe(false);
    });
  
    test('should return false for a phrase with different letter case', () => {
      expect(isPalindrome('MadAm')).toBe(true);
    });
  });
  