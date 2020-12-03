/**
*     _                                           
*    | |___      _____    ___ _   _ _ __ ___  ___ 
*    | __\ \ /\ / / _ \  / __| | | | '_ ` _ \/ __|
*    | |_ \ V  V / (_) | \__ \ |_| | | | | | \__ \
*     \__| \_/\_/ \___/  |___/\__,_|_| |_| |_|___/
*
*    Difficulty: EASY
*
*    Given an array of integers nums and an integer target, return indices of the two numbers such that they
*    add up to target.
*    You may assume that each input would have exactly one solution, and you may not use the same element twice.
*    You can return the answer in any order. 
*          https://leetcode.com/problems/two-sum/ 
*/
                                             
export function twoSum(nums: number[], target: number): number[] {
    for(let i = 0; i < nums.length - 1; ++i) {
        for(let j = i+1; j < nums.length; ++j) {
            if((nums[i] + nums[j]) === target) {
                return [i, j];
            }
        }
    }
};
