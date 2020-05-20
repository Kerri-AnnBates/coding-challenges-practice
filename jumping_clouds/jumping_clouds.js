function jumpingOnClouds(c) {

	let i = 0;
	let count = 0;

	while (i !== c.length - 1) {
		if (c[i + 2] === 0) {
			i += 2;
			count++;
		} else {
			i += 1;
			count++;
		}
	}

	return count;

}

const clouds = [0, 0, 0, 0, 1, 0];
console.log(jumpingOnClouds(clouds)) // => 3