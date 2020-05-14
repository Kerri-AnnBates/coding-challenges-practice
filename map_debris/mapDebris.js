function orbitalPeriod(arr) {
	let GM = 398600.4418;
	let earthRadius = 6367.4447;
	const pi = Math.PI;

	// T = 2*pi*sqrt(r^3/GM)

	let newArr = arr.map((obj) => {
		let r = earthRadius + obj.avgAlt;
		let sqrt = Math.sqrt(Math.pow(r, 3) / GM);
		let result = Math.round(2 * pi * sqrt);

		return {
			name: obj.name,
			orbitalPeriod: result
		}
	});

	return newArr;
}

console.log(orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]));
