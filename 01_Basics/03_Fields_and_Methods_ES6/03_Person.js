// Class Person
// https://babeljs.io/repl/

class Person {

	constructor(firstName, lastName) {
		this.firstName_ = firstName;
		this.lastName_ = lastName;
	}

	getFirstName() {
		return this.firstName_;
	}

	setFirstName( firstName ) {
		this.firstName_ = firstName;
	}

	getLastName() {
		return this.lastName_;
	}

	myPrivateMethod_() {
		/* code */
	}
}