let Person = function( firstName ) {
	
	// if there is object in static field then return it
	if (typeof Person.instance_ === 'object') {
		return Person.instance_;
	}

	// write object to the static field
	Person.instance_ = this;

	// fields
	this.firstName_ = firstName;
};

Person.prototype.setFirstName = function( firstName ) {
	this.firstName_ = firstName;
};

Person.prototype.getFirstName = function() {
	return this.firstName_;
};



