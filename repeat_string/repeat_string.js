//helper function
function countAs(s) {
	let count = 0;

	for (let i = 0; i < s.length; i++) {
		if (s.charAt(i) === "a") {
			count++;
		}
	}

	return count;
}

function repeatedString(s, n) {
	let count = countAs(s);

	if (count === 0) {
		return count;
	}

	let repeats = (Math.floor(n / s.length) * count);
	let remaining = s.slice(0, n % s.length);

	return repeats + countAs(remaining);
}

console.log(repeatedString("aba", 10))