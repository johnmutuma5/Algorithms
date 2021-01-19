import {alternatingSums} from "../algorithms/alternatingSums";

describe('Alternating Sums', () => {
  it('should evaluate case 1 correctly', () => {
    const arr = [50, 60, 60, 45, 70];
    const expected = [180, 105];
    expect(alternatingSums(arr)).toEqual(expected);
  });

  it('should evaluate case 2 correctly', () => {
    const arr = [100, 50];
    const expected = [100, 50];
    expect(alternatingSums(arr)).toEqual(expected);
  });

  it('should evaluate case 3 correctly', () => {
    const arr = [80];
    const expected = [80, 0];
    expect(alternatingSums(arr)).toEqual(expected);
  });

  it('should evaluate case 4 correctly', () => {
    const arr = [100, 50, 50, 100];
    const expected = [150, 150];
    expect(alternatingSums(arr)).toEqual(expected);
  });
});
