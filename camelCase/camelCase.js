// Complete the camelcase function below.
function camelcase(s) {
	let words = "";

	for (let i = 0; i < s.length; i++) {
		if (s[i] === s[i].toUpperCase()) {
			words += " ";
		}
		words += s[i]
	}

	const arr = words.split(" ");
	// console.log(arr);
	return arr.length;

}

console.log(camelcase("saveChangesInTheEditor"));