
/**
 *     _    _ _   _                                _     ____  _        _                 
 *    / \  | | | | |    ___  _ __   __ _  ___  ___| |_  / ___|| |_ _ __(_)_ __   __ _ ___ 
 *   / _ \ | | | | |   / _ \| '_ \ / _` |/ _ \/ __| __| \___ \| __| '__| | '_ \ / _` / __|
 *  / ___ \| | | | |__| (_) | | | | (_| |  __/\__ \ |_   ___) | |_| |  | | | | | (_| \__ \
 * /_/   \_\_|_| |_____\___/|_| |_|\__, |\___||___/\__| |____/ \__|_|  |_|_| |_|\__, |___/
 *                                 |___/                                        |___/     
 *
 * Given an array of strings, return another array containing all of its longest strings.
 * Example For inputArray = ["aba", "aa", "ad", "vcd", "aba"],
 * the output should be allLongestStrings(inputArray) = ["aba", "vcd", "aba"].
 *
 * Difficulty: EASY
 *
 */
export function allLongestStrings(inputArray: string[]): string[] {
  let returnValue = [];
  let longestLength = inputArray[0].length;
    
  for(let item of inputArray) {
    if(item.length === longestLength) {
      returnValue.push(item);
    } else if(item.length > longestLength) {
      returnValue = [];
      returnValue.push(item);
      longestLength = item.length;
    }
  }

  return returnValue;
}
