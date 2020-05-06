// Complete the countingValleys function below.
function countingValleys(n, s) {
	// Need to know if we're in a valley -> maybe set a flag.
	// we're in a valley if our steps take us below sealevel
	// if our steps are level with sea level, we've have travelled either a valley or a mountain.

	let seaLevel = 0;
	let valleyCount = 0;
	let stepLevels = 0;
	let isInValley = false;

	for (let i = 0; i < n; i++) {
		if (s.charAt(i) == "D") {
			stepLevels -= 1
		} else if (s.charAt(i) == "U") {
			stepLevels += 1
		}

		if (stepLevels < seaLevel) {
			isInValley = true;
		}

		if (isInValley && (stepLevels === seaLevel)) {
			valleyCount += 1;
			isInValley = false;
		}

	}

	return valleyCount;

}