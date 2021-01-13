import {allLongestStrings} from "../algorithms/allLongestStrings";

describe('All Longest Strings', () => {
  it('should evaluate case 1 correctly', () => {
    const inputArray = ["aba", "aa", "ad", "vcd", "aba"];
    const expectedResult = ["aba", "vcd", "aba"];
    expect(allLongestStrings(inputArray)).toEqual(expectedResult);
  });

  it('should evaluate case 2 correctly', () => {
    const inputArray = ["abacaba", "abacab", "abac", "xxxxxx"];
    const expectedResult = ["abacaba"];
    expect(allLongestStrings(inputArray)).toEqual(expectedResult);
  });
});
