/**  
  *                                                                                   
  *  .oPYo.                o     .oPYo.           o    o         o        8        o  
  *  8                     8     8   `8           8    8                  8        8  
  *  `Yooo. .oPYo. oPYo.  o8P   o8YooP' o    o   o8oooo8 .oPYo. o8 .oPYo. 8oPYo.  o8P 
  *      `8 8    8 8  `'   8     8   `b 8    8    8    8 8oooo8  8 8    8 8    8   8  
  *       8 8    8 8       8     8    8 8    8    8    8 8.      8 8    8 8    8   8  
  *  `YooP' `YooP' 8       8     8oooP' `YooP8    8    8 `Yooo'  8 `YooP8 8    8   8  
  *  :.....::.....:..::::::..::::......::....8 :::..:::..:.....::..:....8 ..:::..::..:
  *  :::::::::::::::::::::::::::::::::::::ooP'.::::::::::::::::::::::ooP'.::::::::::::
  *  :::::::::::::::::::::::::::::::::::::...::::::::::::::::::::::::...::::::::::::::
  *
  *  Some people are standing in a row in a park. There are trees between them which cannot be moved. Your task is
  *  to rearrange the people by their heights in a non-descending order without moving the trees. People can be very
  *  tall! 
  *
  *  Example 
  *  For a = [-1, 150, 190, 170, -1, -1, 160, 180],
  *  the output should be sortByHeight(a) = [-1, 150, 160, 170, -1, -1, 180, 190]. 
  *
  *  Dificulty: EASY
  *
  */ 
export function sortByHeight(a: number[]): number[] {
    const nonTrees: number[] = [];
    for(let index = 0; index < a.length; ++index) if(a[index] !== -1) {
      nonTrees.push(a[index])
      a[index] = null;
    } 

   nonTrees.sort((a, b) => a - b);
   return a.map(val => !val ? nonTrees.shift() : val);
}
