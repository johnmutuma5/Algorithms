/**                                      _       _   
*     _ __ _____   _____ _ __ ___  ___  (_)_ __ | |_ 
*    | '__/ _ \ \ / / _ \ '__/ __|/ _ \ | | '_ \| __|
*    | | |  __/\ V /  __/ |  \__ \  __/ | | | | | |_ 
*    |_|  \___| \_/ \___|_|  |___/\___| |_|_| |_|\__|
*
*    Difficulty: EASY
*
*    Given a 32-bit signed integer, reverse digits of an integer.
*    
*    Note:
*    Assume we are dealing with an environment that could only store integers within the 32-bit signed
*    integer range: [−2 ^ 31,  2 ^ 31 − 1]. For the purpose of this problem, assume that your function returns 0 when
*    the reversed integer overflows.*
*       https://leetcode.com/problems/reverse-integer/
*                                                  
*/
export function reverse(x: number): number {
  const maxVal = Math.pow(2, 31) - 1;
  const minVal = Math.pow(-2, 31);
  const k = x < 0 ? -1 : 1;

  let retVal = 0;

  while(x !== 0){
    const remainder = x % 10;
    x = Math.floor(Math.abs(x / 10)) * k;
    
    retVal = retVal * 10 + remainder;
    if(retVal > maxVal || retVal < minVal){
      return 0;
    }
  }

  return retVal;
};

