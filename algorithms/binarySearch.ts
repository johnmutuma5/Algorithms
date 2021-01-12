/**
 *
 *
 *   .oPYo.  o                             .oPYo.                            8      
 *   8   `8                                8                                 8      
 *  o8YooP' o8 odYo. .oPYo. oPYo. o    o   `Yooo. .oPYo. .oPYo. oPYo. .oPYo. 8oPYo. 
 *   8   `b  8 8' `8 .oooo8 8  `' 8    8       `8 8oooo8 .oooo8 8  `' 8    ' 8    8 
 *   8    8  8 8   8 8    8 8     8    8        8 8.     8    8 8     8    . 8    8 
 *   8oooP'  8 8   8 `YooP8 8     `YooP8   `YooP' `Yooo' `YooP8 8     `YooP' 8    8 
 *  :......::....::..:.....:..:::::....8 :::.....::.....::.....:..:::::.....:..:::..
 *  ::::::::::::::::::::::::::::::::ooP'.:::::::::::::::::::::::::::::::::::::::::::
 *  ::::::::::::::::::::::::::::::::...:::::::::::::::::::::::::::::::::::::::::::::
 *
 *  Binary search implementation: Feb 2020 Ologn
 *
 */

import { sort as mergeSort } from './mergeSort';

/**
 *
 * A binary search will search for an item in a sorted array. That is important. The array has to be
 * sorted
 *
 *
 */
export function search(term: number, container: number[]): boolean {
  const lower = 0;
  const upper = container.length - 1;
  return binarySearch(term, mergeSort(container), lower, upper);
}

function binarySearch(term: number, container: number[], lower: number, upper:number): boolean {
  const midpoint = Math.floor((lower + upper) / 2);
  const midpointValue = container[midpoint];

  if(midpointValue === term)
    return true;

  if(lower === upper)
    return false;

  if(midpointValue < term) // explore right
    return binarySearch(term, container, midpoint + 1, upper);
  else
    return binarySearch(term, container, lower, midpoint - 1);

}
