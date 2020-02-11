/**
 *
 *                                                                     
 *   .oPYo.        8  o            8                                    
 *   8    8        8               8                                    
 *  o8YooP' .oPYo. 8 o8 odYo. .oPYo8 oPYo. .oPYo. ooYoYo. .oPYo. .oPYo. 
 *   8      .oooo8 8  8 8' `8 8    8 8  `' 8    8 8' 8  8 8oooo8 Yb..   
 *   8      8    8 8  8 8   8 8    8 8     8    8 8  8  8 8.       'Yb. 
 *   8      `YooP8 8  8 8   8 `YooP' 8     `YooP' 8  8  8 `Yooo' `YooP' 
 *  :..::::::.....:..:....::..:.....:..:::::.....:..:..:..:.....::.....:
 *  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 *  ::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
 *  
 *  A word is a palindrome if it reads the same left-right and right-left
 *
 */
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

