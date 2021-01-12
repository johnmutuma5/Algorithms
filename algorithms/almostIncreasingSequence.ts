
/**
  *     _    _                     _     ___                               _             
  *    / \  | |_ __ ___   ___  ___| |_  |_ _|_ __   ___ _ __ ___  __ _ ___(_)_ __   __ _ 
  *   / _ \ | | '_ ` _ \ / _ \/ __| __|  | || '_ \ / __| '__/ _ \/ _` / __| | '_ \ / _` |
  *  / ___ \| | | | | | | (_) \__ \ |_   | || | | | (__| | |  __/ (_| \__ \ | | | | (_| |
  * /_/   \_\_|_| |_| |_|\___/|___/\__| |___|_| |_|\___|_|  \___|\__,_|___/_|_| |_|\__, |
  *                                                                               |___/ 
  *
  * Difficulty: EASY
  *
  * Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing
  * sequence by removing no more than one element from the array.
  * 
  * Note:
  *
  * Sequence a0, a1, ..., an is considered to be a strictly increasing if a0 < a1 < ... < an.
  * Sequence containing only one element is also considered to be strictly increasing.
  *
  */

let hasSkippedIndex = false;

export function almostIncreasingSequence(sequence: number[]): boolean {
  for(let i = 0; i < sequence.length; ++i) {
    if(i+1 === sequence.length) {
      return true;
    }
    
    if(sequence[i+1] > sequence[i]) {
      continue;
    } else if(!hasSkippedIndex ) {
      hasSkippedIndex = true;
      return willBeIncreasingBySkippingCurrentIndex(sequence, i)
          || willBeIncreasingBySkippingNextIndex(sequence, i);
    } else {
      return false;
    }
  }
}

function willBeIncreasingBySkippingCurrentIndex(sequence: number[], index: number): boolean {
  const withSkippedCurrentIndex = sequence.slice(index+1);
  if(index > 0) {
    withSkippedCurrentIndex.unshift(sequence[index-1]);
  }
  return almostIncreasingSequence(withSkippedCurrentIndex);
}

function willBeIncreasingBySkippingNextIndex(sequence: number[], index: number): boolean {
  const withSkippedNextIndex = sequence.slice(index+2);
  withSkippedNextIndex.unshift(sequence[index]);
  return almostIncreasingSequence(withSkippedNextIndex);
}
