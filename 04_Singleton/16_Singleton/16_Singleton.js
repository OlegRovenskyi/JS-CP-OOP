let Person = function( firstName ) {
	this.firstName_ = firstName;
};

Person.prototype.setFirstName = function( firstName ) {
	this.firstName_ = firstName;
};

Person.prototype.getFirstName = function() {
	return this.firstName_;
};
// make this class Singleton
addSingletonGeteter( Person );