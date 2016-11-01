let Person = function( firstName ) {
	this.firstName_ = firstName;
};

// method
Person.prototype.getFirstName = function() {
	return this.firstName_;
};

// Static field
Person.MIN_AGE = 16;

// Static method 
Person.error = function ( msg ) {
	console.log( msg );
};

