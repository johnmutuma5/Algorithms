import { twoSum } from '../algorithms/twoSums';


describe('twoSum', () => {
  it('should find the indices correctly', () => {
    expect(twoSum([2,7,11,15] , 9)).toEqual([0, 1]);
  });
})
