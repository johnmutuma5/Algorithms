/**  
  *     _   _ _                        _   _               __                     
  *    /_\ | | |_ ___ _ __ _ __   __ _| |_(_)_ __   __ _  / _\_   _ _ __ ___  ___ 
  *   //_\\| | __/ _ \ '__| '_ \ / _` | __| | '_ \ / _` | \ \| | | | '_ ` _ \/ __|
  *  /  _  \ | ||  __/ |  | | | | (_| | |_| | | | | (_| | _\ \ |_| | | | | | \__ \
  *  \_/ \_/_|\__\___|_|  |_| |_|\__,_|\__|_|_| |_|\__, | \__/\__,_|_| |_| |_|___/
  *                                                |___/                          
  * 
  *  Several people are standing in a row and need to be divided into two teams. The first person goes into team 1,
  *  the second goes into team 2, the third goes into team 1 again, the fourth into team 2, and so on.  You are given
  *  an array of positive integers - the weights of the people. Return an array of two integers, where the first
  *  element is the total weight of team 1, and the second element is the total weight of team 2 after the division
  *  is complete.
  *
  *  Example
  *  For a = [50, 60, 60, 45, 70], the output should be alternatingSums(a) = [180, 105].
  *
  *  Difficulty: EASY
  *
  */
export function alternatingSums(a: number[]): number[] {
    return a.reduce((accum, currentVal, index) => {
        accum[(index % accum.length)] += currentVal;
        return accum;
    }, [0, 0])
}

