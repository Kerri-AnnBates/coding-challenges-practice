var Person = function (firstAndLast) {
	// Complete the method below and implement the others similarly

	this.getFullName = function () {
		return firstAndLast;
	};

	this.getFirstName = function () {
		return firstAndLast.split(" ")[0];
	}

	this.getLastName = function () {
		return firstAndLast.split(" ")[1];
	}

	this.setFirstName = function (first) {
		let firstname = this.getFirstName();
		firstAndLast = firstAndLast.replace(firstname, first);
	}

	this.setLastName = function (last) {
		let lastName = this.getLastName();
		firstAndLast = firstAndLast.replace(lastName, last);
	}

	this.setFullName = function (fullName) {
		firstAndLast = fullName;
	}

	return firstAndLast;
};


var bob = new Person('Bob Ross');
bob.setFirstName("Tim");
console.log(bob.getFirstName());
bob.setFullName("Yoshi bates");
console.log(bob.getFullName());