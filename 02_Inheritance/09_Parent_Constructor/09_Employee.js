
let Employee = function(firstName, lastName, jobName) {
	// call the Parent Constructor
	Person.call(this, firstName, lastName);

	this.jobName_ = jobName;
};

// Inheritance
inherits(Employee, Person);
// or
// __extends(Employee, Person)

// add new methods
Employee.prototype.getJobName = function() {
	return this.jobName_;
};





// Inheritance with IIFE
/*
let Employee = (function(_super) {

	// Inheritance
	// inherits(Employee, _super);
	// or 
	__extends(Employee, _super)

	// Constructor
	function Employee(firstName, lastName, jobName) {
		// call the Super Constructor
		_super.call(this, firstName, lastName);

		this.jobName_ = jobName;
	};


	// add new methods
	Employee.prototype.getJobName = function() {
		return this.jobName_;
	};

	return Employee;
})(Person);
*/
