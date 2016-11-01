// Class Person

let Person = function( firstName, lastName ) {

	// Public Fields (by Google JavaScript Style Guide private fields)
	this.firstName_ = firstName;
	this.lastName_ = lastName;
	
	// or
	// this._firstName = firstName;
	// this._lastName = lastName;

	// Private Fields as a local variable
	let f1 = 10;

	// Private Method
	let myPrivateMethod_ = function() {
		/* code */
	};
};

/* 
	FirstObj   ---|
					|
					|-----> Prototype
					|
	SecondObj  ---|
*/

// Public Methods
Person.prototype.getFirstName = function() {
	return this.firstName_;
};

Person.prototype.setFirstName = function( firstName ) {
	this.firstName_ = firstName;
};

Person.prototype.getLastName = function() {
	return this.lastName_;
};

