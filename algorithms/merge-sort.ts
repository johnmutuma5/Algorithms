export function sort(sortArray: number[]): number[] {
  const lower = 0;
  const upper = sortArray.length - 1;

  const sortedResult = mergeSort(sortArray, lower, upper);
  return sortedResult;
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
  const result = [];
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
