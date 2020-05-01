// DESCRIPTiION
// Given an array nums containing n + 1 integers where each integer is between 1 and n(inclusive), prove that at least one duplicate number must exist.Assume that there is only one duplicate number, find the duplicate one.

/**
 * @param {number[]} nums
 * @return {number}
 */

var findDuplicate = function (nums) {
	const visited = {} // Create a (hash table) to keep track of visited numbers.

	// Loop thru nums array to see if number has been "visited" already, if it has, return that number.
	for (let i = 0; i < nums.length; i++) {

		if (visited.hasOwnProperty(nums[i])) {
			return nums[i];
		}

		visited[nums[i]] = i;
	}

};