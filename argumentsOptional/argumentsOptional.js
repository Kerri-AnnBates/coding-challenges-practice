function addTogether() {

	if (typeof arguments[0] !== "number") {
		return undefined;
	}

	// Get length of arguments
	let argsLength = arguments.length;

	// return sum of args if args length is 2
	if (argsLength > 1) {
		if (typeof arguments[1] !== "number") {
			return undefined;
		}

		return arguments[0] + arguments[1];
	}

	// Store first argument
	let arg = arguments[0];

	function sum() {
		if (typeof arguments[0] !== "number") {
			return undefined;
		}

		// Return first argument with the argument in sum
		return arg + arguments[0];
	}

	return sum;

}

console.log(addTogether(2)(3));
addTogether(2, 3);
console.log(addTogether("http://bit.ly/IqT6zt"));