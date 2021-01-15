import {sortByHeight} from "../algorithms/sortByHeight";

describe('Sort By Height', () => {
  it('should evaluate case 1 correctly', () => {
    const arr = [-1, 150, 190, 170, -1, -1, 160, 180];
    const expected = [-1, 150, 160, 170, -1, -1, 180, 190];
    expect(sortByHeight(arr)).toEqual(expected);
  });

  it('should evaluate case 2 correctly', () => {
    const arr = [-1];
    const expected = [-1];
    expect(sortByHeight(arr)).toEqual(expected);
  });
});
