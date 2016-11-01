function inherits(Child, Parent) {
	// create empty proxy-function
	let F = function() {};
	
	// assign Parent.prototype to prototype of this empty proxy-function
	F.prototype = Parent.prototype;

	// create new object and assign it to the Child.prototy
	// Child.prototype is empty object
	Child.prototype = new F();

	// Child.prototype.constructor set to Child
	Child.prototype.constructor = Child;
}

// Alternate 1
let __extends = this.__extends || function (Child, Parent) {
	
	function __() { 
		this.constructor = Child;
	}
	
	__.prototype = Parent.prototype;

	Child.prototype = new __();
}

// Alternate 2
function inherit(Child, Parent) {
	Child.prototype = Object.create(Parent.prototype);
	Child.prototype.constructor = Child;
}
