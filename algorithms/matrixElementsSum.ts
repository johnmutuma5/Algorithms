/**
  *  __  __       _        _        _____ _                           _         ____                  
  * |  \/  | __ _| |_ _ __(_)_  __ | ____| | ___ _ __ ___   ___ _ __ | |_ ___  / ___| _   _ _ __ ___  
  * | |\/| |/ _` | __| '__| \ \/ / |  _| | |/ _ \ '_ ` _ \ / _ \ '_ \| __/ __| \___ \| | | | '_ ` _ \ 
  * | |  | | (_| | |_| |  | |>  <  | |___| |  __/ | | | | |  __/ | | | |_\__ \  ___) | |_| | | | | | |
  * |_|  |_|\__,_|\__|_|  |_/_/\_\ |_____|_|\___|_| |_| |_|\___|_| |_|\__|___/ |____/ \__,_|_| |_| |_|
  *                                                                                                   
  * After becoming famous, the CodeBots decided to move into a new building together. Each of the rooms has a
  * different cost, and some of them are free, but there's a rumour that all the free rooms are haunted! Since the
  * CodeBots are quite superstitious, they refuse to stay in any of the free rooms, or any of the rooms below any of
  * the free rooms.
  *
  * Given matrix, a rectangular matrix of integers, where each value represents the cost of the
  * room, your task is to return the total sum of all rooms that are suitable for the CodeBots (ie: add up all the
  * values that don't appear below a 0).                                                                                                 
  *
  * Difficulty: EASY
  *
  */
export function matrixElementsSum(matrix: number[][]) {
  let elementsSum = 0;

  for(let col = 0; col < matrix[0].length; ++col) {
    for(let row = 0; row < matrix.length; ++row){
      if(matrix[row][col] === 0) {
        break; // don't bother this and the rows below
      } else {
        elementsSum += matrix[row][col];
      }
    }
  }
  return elementsSum;
}
