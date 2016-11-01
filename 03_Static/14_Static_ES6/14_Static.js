/* *ES6 */
class Person {
	constructor(firstName) {
		this.firstName_ = firstName;
	}

	getFirstName() {
		return this.firstName_;
	}

	// static property
	// babel converts it to ES5, 
	// but original code doesn't work.
	//static MIN_AGE = 16;

	// static method
	static error(msg) {
		console.log(msg)
	}
}
