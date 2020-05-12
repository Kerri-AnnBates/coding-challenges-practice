function joinedLogger(level, sep) {
	// write your code here
	function checkLevels(...args) {
		let arr = []

		args.forEach((msg) => {
			if (msg.level >= level) {
				arr.push(msg.text);
			}
		});


		return arr.join(sep);
		// console.log(arr.join(sep));
	}

	return checkLevels;
}

const myLog = joinedLogger(21, ";");
messages = [
	{ level: 40, text: 'foo' },
	{ level: 90, text: 'bar' },
	{ level: 20, text: 'baz' },
	{ level: 21, text: 'bax' }
]

console.log(myLog(...messages));