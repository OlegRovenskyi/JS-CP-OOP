// if we call constructor without new: 
//	1. constructor return undefined, 
//	2. this in the function will be global object and add some properties to it.

let obj1 = Person("Anna", "Vasileva");

console.log("obj1");
console.log(obj1);

console.log("this");
console.log(this);

console.log("this.firstName_");
console.log(this.firstName_);

// add additional check to the constructor
// we omit let because this variable has been already declared in 05_Person.js
Person = function( firstName, lastName, opt_age ) {

	// check
	if ( !(this instanceof Person) ) {
		return new Person( firstName, lastName, opt_age );
	}

	// fields are after check
	this.firstName_ = firstName;
	this.lastName_ = lastName;
	if(opt_age) {
		this.age_ = opt_age;
	}
};

// methods
Person.prototype.getFirstName = function() {
	return this.firstName_;
}

// call constructor with out new, but we have check in the constructor
let obj2 = Person("Mariia", "Vasileva");
console.log(obj2);
console.log("obj2.getFirstName()");
console.log(obj2.getFirstName());


