// Abstract Class
let AbstractPerson = (function() {
	
	// Constructor
	function AbstractPerson() { };

	// Methods
	AbstractPerson.prototype.setFirstName = function( firstName ) {
		throw Error("Unimplemented abstract method - setFirstName");
	};

	AbstractPerson.prototype.getFirstName = function() {
		throw Error("Unimplemented abstract method - getFirstName");
	};

	return AbstractPerson;
})(); 



// Class Person
let Person = (function(_super) {
	inherits(Person, _super);

	function Person( firstName ) {
		_super.call(this);
		this.firstName = firstName;
	}

	// Unimplemeneted method
	// Person.prototype.getFirstName = function() {
	// 	return this.firstName_;
	// };
	
	Person.prototype.setFirstName = function( firstName ) {
		this.firstName_ = firstName;
	};

	return Person;

})(AbstractPerson);








