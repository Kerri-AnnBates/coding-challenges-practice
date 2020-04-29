/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */


// DESCRIPTION
// Given an array of integers, return indices of the two numbers such that they add up to a specific target.
// You may assume that each input would have exactly one solution, and you may not use the same element twice.
// Given nums = [2, 7, 11, 15], target = 9, Because nums[0] + nums[1] = 2 + 7 = 9, return [0, 1]


// Loop thru array of nums.
// Starting with first index, find next operand by subtracting index from target
// Check if that operand is in array and it is not itself, if it is return i and the index of the operand
// Else do the same with the next index

var twoSum = function (nums, target) {

	for (let i = 0; i < nums.length; i++) {
		let operand = target - nums[i];

		if (nums.indexOf(operand) != -1 && nums.indexOf(operand) != i) {
			return [i, nums.indexOf(operand)];
		}

	}
};