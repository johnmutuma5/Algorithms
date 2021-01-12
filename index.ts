import { sort as mergeSort } from './algorithms/mergeSort';
import { isPalindrome } from './algorithms/palindrome';
import { search as binarySearch } from './algorithms/binarySearch';

const arrayToSort = [4, 39, 84, 9, 3, 3, 2, 1, -1, 5];
const sortedArray: number[] = mergeSort(arrayToSort);
console.log(`Merge sort ${arrayToSort}: `, sortedArray);

const word = 'Deleveled';
const word2 = 'notPalindrome';
console.log(`Is the word \`${word}\` a palindrome? ${isPalindrome(word)}`);
console.log(`Is the word \`${word2}\` a palindrome? ${isPalindrome(word2)}`);

const arrayToSearch = [4, 39, 84, 9, 3, 8, 3, 2, 1, -1, 5];
const term = 1;
console.log(`Is ${term} in ${arrayToSearch}? Binary Search: `, binarySearch(term, arrayToSearch));
