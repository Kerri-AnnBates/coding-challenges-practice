function funnyString(s) {

	let asciiArr = s.split("").map((str, i) => s.charCodeAt(i));
	let absArr = [];
	let revAbsArr = [];

	for (let i = 0; i < asciiArr.length - 1; i++) {
		let absDiff = asciiArr[i] - asciiArr[i + 1];
		absArr.push(Math.abs(absDiff));
	}

	for (let i = asciiArr.length - 1; i > 0; i--) {
		let absDiff = asciiArr[i] - asciiArr[i - 1];
		revAbsArr.push(Math.abs(absDiff));
	}

	for (let i = 0; i < absArr.length; i++) {
		if (absArr[i] !== revAbsArr[i]) {
			return "Not Funny";
		}
	}

	return "Funny";

}

console.log(funnyString("acxz"));
