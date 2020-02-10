import { sort } from './mergeSort';
import { isPalindrome } from './palindrome';

const arrayToSort = [4, 39, 84, 9, 3, 3, 2, 1, -1, 5];
const sortedArray: number[] = sort(arrayToSort);
console.log(`Merge sort ${arrayToSort}: `, sortedArray);


// palindrome
const word = 'Deleveled';
const word2 = 'notPalindrome';
console.log(`Is the word \`${word}\` a palindrome? ${isPalindrome(word)}`);
console.log(`Is the word \`${word2}\` a palindrome? ${isPalindrome(word2)}`);
