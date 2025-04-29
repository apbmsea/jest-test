export function isPalindrome(str: string): boolean {
   if (str === '') {
      return false;
    }
  
    const cleanStr = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
  
    return cleanStr === cleanStr.split('').reverse().join('');
  }
  
  