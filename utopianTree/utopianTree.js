function utopianTree(n) {
	let height = 1;
	let spring = true;

	// tree plant at beginning of spring so first cycle will always add 2 to height, then it will be summer in the next cycle, and we add 1 to height.
	if (n === 0) {
		return height;
	} else {
		for (let i = 0; i < n; i++) {
			console.log("height:", height)
			if (spring) {
				height *= 2;
				// console.log("After Srping height:", height)
				spring = !spring;
			} else {
				height += 1;
				// console.log("after summer height:", height)
				spring = !spring;
			}
		}
	}

	return height;

}

console.log(utopianTree(5));