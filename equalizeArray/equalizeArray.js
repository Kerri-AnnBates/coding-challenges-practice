// Complete the equalizeArray function below.
function equalizeArray(arr) {
	let numbersMap = {};
	let maxCount = 1;
	let maxOccurence = arr[0];

	// Get max occurence of number from array
	for (let i = 0; i < arr.length; i++) {
		let key = arr[i].toString();

		if (numbersMap[key] === undefined) {
			numbersMap[key] = 1;
		} else {
			numbersMap[key] += 1;
		}

		if (numbersMap[key] > maxCount) {
			maxOccurence = arr[i];
			maxCount = numbersMap[key];
		}
	}

	const minRemovals = arr.filter(num => {
		if (num !== maxOccurence) {
			return num;
		}
	});

	return minRemovals.length;

}

const arr1 = [1, 2, 3, 1, 2, 3, 3, 3];
console.log(equalizeArray(arr1));

