import { search as binarySearch } from '../algorithms/binary-search'

describe('Binary Search', () => {
  it('should find an existing search term in sorted array', () => {
    const sortedContainerArray = [0,1,2,3,4];
    expect(binarySearch(1, sortedContainerArray)).toBe(true);
  });

  it('should find an existing search term an unsorted array', () => {
    const unsortedContainerArray = [18,10,2,13,4,0,-1,5];
    expect(binarySearch(4, unsortedContainerArray)).toBe(true);
  });

  it('should not find a missing search term', () => {
    const unsortedContainerArray = [1,10,2,3,4,0,-1,5];
    expect(binarySearch(9, unsortedContainerArray)).toBe(false);
  });
});
