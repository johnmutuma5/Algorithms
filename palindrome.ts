export function isPalindrome(word: string): boolean {

  const right = word.length - 1; 
  const left = 0;

  function isCongruent(right: number, left: number): boolean {
    if(right <= left)
      return true;
    if(word[left].toLowerCase() !== word[right].toLowerCase())
      return false;

    return isCongruent(--right, ++left)
  }
  return isCongruent(right, left);
}

