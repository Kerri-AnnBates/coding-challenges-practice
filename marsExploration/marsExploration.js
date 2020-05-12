function marsExploration(s) {
	const messages = s.length / 3;
	const expected = 'SOS'.repeat(messages);
	let changes = 0;

	for (let i = 0; i < s.length; i++) {
		if (s[i] !== expected[i]) {
			changes++;
		}
	}

	return changes;

}

console.log(marsExploration('SOSSPSSQSSOR')); // => 3