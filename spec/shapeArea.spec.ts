import {shapeArea, shapeAreaNoRecursive} from "../algorithms/shapeArea";

describe('Shape Area Interesting polygons', () => {
  it('Should return 41 when n = 5', () => {
    expect(shapeArea(5)).toEqual(41);
    expect(shapeAreaNoRecursive(5)).toEqual(41);
  });

  it('Should return 19801 when n = 100', () => {
    expect(shapeArea(100)).toEqual(19801);
    expect(shapeAreaNoRecursive(100)).toEqual(19801);
  });
});

