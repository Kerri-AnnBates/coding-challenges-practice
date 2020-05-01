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