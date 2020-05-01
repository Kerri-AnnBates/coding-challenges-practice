/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

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