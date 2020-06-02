function miniMaxSum(arr) {
	arr.sort((a, b) => a - b);
	const smallest = arr.slice(0, 4);

	let min = arr.slice(0, 4).reduce((acc, curr) => acc + curr);
	let max = arr.slice(1).reduce((acc, curr) => acc + curr);

	console.log(min, max);
}

miniMaxSum([1, 2, 3, 4, 5]);