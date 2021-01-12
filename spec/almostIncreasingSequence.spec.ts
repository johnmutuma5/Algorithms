import {almostIncreasingSequence} from "../algorithms/almostIncreasingSequence";

describe('Almost increasing sequence', () => {
  it('should be false for case 1', () => {
    const sequence = [1, 3, 2, 1];
    expect(almostIncreasingSequence(sequence)).toBe(false);
  });


  it('should be true for case 2', () => {
    const sequence = [1, 3, 2];
    expect(almostIncreasingSequence(sequence)).toBe(true);
  });   

  it('should be true for a single element sequence', () => {
    const sequence = [3];
    expect(almostIncreasingSequence(sequence)).toBe(true);
  });

  it('should be true when only first element is misplaced', () => {
    const sequence = [10, 1, 2, 3, 4, 5];
    expect(almostIncreasingSequence(sequence)).toBe(true);
  });

  it('should be true when the current index can be skipped', () => {
    const sequence = [1, 2, 5, 3, 5];
    expect(almostIncreasingSequence(sequence)).toBe(true);
  });

  it('should be true when the next index can be skipped', () => {
    const sequence = [1, 2, 3, 4, 3, 6];
    expect(almostIncreasingSequence(sequence)).toBe(true);
  });
});
