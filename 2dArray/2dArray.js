let arr = [
	[-9, -9, -9, 1, 1, 1],
	[0, -9, 0, 4, 3, 2],
	[-9, -9, -9, 1, 2, 3],
	[0, 0, 8, 6, 6, 0],
	[0, 0, 0, -2, 0, 0],
	[0, 0, 1, 2, 4, 0]
]

let arr2 = [
	[1, 1, 1, 0, 0, 0],
	[0, 1, 0, 0, 0, 0],
	[1, 1, 1, 0, 0, 0],
	[0, 0, 2, 4, 4, 0],
	[0, 0, 0, 2, 0, 0],
	[0, 0, 1, 2, 4, 0]
]

let arr3 = [
	[-1, -1, 0, -9, -2, -2],
	[-2, -1, -6, -8, -2, -5],
	[-1, -1, -1, -2, -3, -4],
	[-1, -9, -2, -4, -4, -5],
	[-7, -3, -3, -2, -9, -9],
	[-1, -3, -1, -2, -4, -5]
]

function hourglassSum(arr) {
	let currRow = 0;
	let currIdx = 0;
	let maxSum = arr[currRow][currIdx] +
		arr[currRow][currIdx + 1] +
		arr[currRow][currIdx + 2] +
		arr[currRow + 1][currIdx + 1] +
		arr[currRow + 2][currIdx] +
		arr[currRow + 2][currIdx + 1] +
		arr[currRow + 2][currIdx + 2];

	while (currRow <= arr.length - 3) {
		// Check index so we don't go out of bounds.
		if (currIdx > arr.length - 3) {
			currIdx = 0;
			currRow = currRow + 1;
		}

		if (currRow > arr.length - 3) {
			break;
		}

		// Get sum of hour glass
		let currSum = arr[currRow][currIdx] +
			arr[currRow][currIdx + 1] +
			arr[currRow][currIdx + 2] +
			arr[currRow + 1][currIdx + 1] +
			arr[currRow + 2][currIdx] +
			arr[currRow + 2][currIdx + 1] +
			arr[currRow + 2][currIdx + 2];

		maxSum = currSum >= maxSum ? currSum : maxSum;
		currIdx++;
	}

	return maxSum;
}

console.log(hourglassSum(arr)); // 28
console.log(hourglassSum(arr2)); // 19
console.log(hourglassSum(arr3)); // -6