/**
 *
 *
 *                                                                
 *  o     o                              .oPYo.                o  
 *  8b   d8                              8                     8  
 *  8`b d'8 .oPYo. oPYo. .oPYo. .oPYo.   `Yooo. .oPYo. oPYo.  o8P 
 *  8 `o' 8 8oooo8 8  `' 8    8 8oooo8       `8 8    8 8  `'   8  
 *  8     8 8.     8     8    8 8.            8 8    8 8       8  
 *  8     8 `Yooo' 8     `YooP8 `Yooo'   `YooP' `YooP' 8       8  
 *  ..::::..:.....:..:::::....8 :.....::::.....::.....:..::::::..:
 *  :::::::::::::::::::::::ooP'.::::::::::::::::::::::::::::::::::
 *  :::::::::::::::::::::::...::::::::::::::::::::::::::::::::::::
 *
 *
 *  A divide and conquer sorting algorithm Onlogn
 *
 */
export function sort(sortArray: number[]): number[] {
  const lower = 0;
  const upper = sortArray.length - 1;
  return mergeSort(sortArray, lower, upper);
}


function mergeSort(array: number[], lower: number, upper: number): number[] {
  if(upper === lower){
    return [array[upper]];
  }
  const midpoint = Math.floor((upper + lower) / 2);

  const right = mergeSort(array, lower, midpoint);
  const left = mergeSort(array, midpoint + 1, upper);
  return  merge(right, left);
}

function merge(right: number[], left: number[]) {
  const result: number[] = [];
  let leftIndex = 0;
  let rightIndex = 0;

  while(rightIndex < right.length && leftIndex < left.length){
    if(right[rightIndex] <= left[leftIndex]) {
      result.push(right[rightIndex])
      rightIndex++;
    } else {
      result.push(left[leftIndex]);
      leftIndex++;
    }
  }
  while(leftIndex < left.length) {
    result.push(left[leftIndex])
    leftIndex++;
  }
  while(rightIndex < right.length) {
    result.push(right[rightIndex])
    rightIndex++;
  }
  return result;
}
