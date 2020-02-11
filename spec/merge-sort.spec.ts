import { sort as mergeSort } from '../algorithms/merge-sort'

describe('Merge sort', () => {
  it('should sort an array with even length', () => {
    const arrayToSort = [2, 5, 1, 0];

    const expectedResult = [0, 1, 2, 5];
    const sortedArray = mergeSort(arrayToSort);
    expect(sortedArray).toEqual(expectedResult);
  });

  it('should sort an array with odd length', () => {
    const arrayToSort = [2, 5, 1, 0, -1];

    const expectedResult = [-1, 0, 1, 2, 5];
    const sortedArray = mergeSort(arrayToSort);
    expect(sortedArray).toEqual(expectedResult);
  });
})
