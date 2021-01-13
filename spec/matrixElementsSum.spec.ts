import {matrixElementsSum} from "../algorithms/matrixElementsSum";

describe('Matrix Elements Sum', () => {
  it('should return 9 for case 1', () => {
    const matrix = [[0,1,1,2], 
                    [0,5,0,0], 
                    [2,0,3,3]];

    expect(matrixElementsSum(matrix)).toBe(9);
  });


  it('should return 15 for case 2', () => {
    const matrix = [[4,0,1], 
                    [10,7,0], 
                    [0,0,0], 
                    [9,1,2]];

    expect(matrixElementsSum(matrix)).toBe(15);
  });
});
