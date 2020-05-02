function truthCheck(collection, pre) {
	// Loop through collection.
	// For each object, check if the key "pre" is truthy. Also need to check if that object has the key "pre".

	let falseys = collection.filter(obj => {
		return !obj.hasOwnProperty(pre) || !obj[pre];
	})

	// If falsey array have items in it, return false.
	return falseys.length == 0;
}

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy", "sex": "male" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex"); // true

truthCheck([{ "user": "Tinky-Winky", "sex": "male" }, { "user": "Dipsy" }, { "user": "Laa-Laa", "sex": "female" }, { "user": "Po", "sex": "female" }], "sex") // false

truthCheck([{ "name": "Pete", "onBoat": true }, { "name": "Repeat", "onBoat": true }, { "name": "FastForward", "onBoat": null }], "onBoat") // false