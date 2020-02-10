import { sort } from './mergeSort';

const arrayToSort = [4, 39, 84, 9, 3, 3, 2, 1, -1, 5];
const sortedArray: number[] = sort(arrayToSort);
console.log(`Merge sort ${arrayToSort}: `, sortedArray);
