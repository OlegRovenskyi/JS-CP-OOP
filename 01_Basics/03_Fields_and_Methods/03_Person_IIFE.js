// Class Person with IIFE

let Person = (function() {
	
	// Constructor
	function Person( firstName, lastName ) {
		// Private
		let f1 = 10;

		// Public
		this.firstName = firstName;
		this.lastName = lastName;

		// Private Method
		let myPrivateMethod_ = function() {
			/* code */
		};
	}

	// Public Methods
	Person.prototype.getFirstName = function() {
		return this.firstName;
	};

	Person.prototype.setFirstName = function( firstName ) {
		this.firstName = firstName;
	};

	Person.prototype.getLastName = function() {
		return this.lastName;
	};

	return Person;
})();


