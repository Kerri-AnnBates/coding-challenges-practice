function staircase(n) {
	for (let i = 1; i <= n; i++) {
		let spaces = " ";
		let numOfSpaces = n - i;
		let hashStr = "#";

		console.log(`${spaces.repeat(numOfSpaces)}${hashStr.repeat(i)}`);
	}

}

staircase(10);