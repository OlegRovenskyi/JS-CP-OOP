let Parent = function( value ) {
	this.value_ = value;
  this.parentValue = "Parent";
};

Parent.prototype.getValue = function() {
	return this.value_;
};

let Child = function( value ) {
	// It was
	// Parent.call(this, value);

	// It is
	Child.superClass_.constructor.call(this, value);
  this.childValue = "Child";
};
inherits(Child, Parent);

Child.prototype.getValue = function() {
	return `This is child: ${Child.superClass_.getValue.call(this)}`;
}
Child.prototype.getChildValue = function() {
  return this.childValue;
}