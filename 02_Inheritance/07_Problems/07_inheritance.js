// Inheritance Problems

let Parent = function() {
	this.value_ = true;
};

Parent.prototype.getValue = function() {
	return this.value_;
};

let Child = function() {
	this.value_ = false;
};

// we can do this here because Parent Class has no paremeters
// but Child.prototype.constructor = Parent
Child.prototype = new Parent();