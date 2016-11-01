let Person = function( firstName, lastName, opt_age ) {
	this.firstName_ = firstName;
	this.lastName_ = lastName;
	
	// optional parameter
	if(opt_age) {
		this.age_ = opt_age;
	}
};

// default values
Person.prototype.age_ = 1;

// methods
Person.prototype.getFirstName = function() {
	return this.firstName_;
};

Person.prototype.setFirstName = function( firstName ) {
	this.firstName_ = firstName;
};

Person.prototype.getLastName = function() {
	return this.lastName_;
};

Person.prototype.getAge = function() {
	// if we don't find this field in the object 
	// we go to the prototype and find it in Person.prototype.age_ 
	return this.age_;
};

Person.prototype.setAge = function( age ) {
	this.age_ = age;
};
