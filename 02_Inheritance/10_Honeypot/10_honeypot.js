let Parent = function() {
	this.field_ = 123;
};
Parent.prototype = {
	getField: function() {
		return this.field_;
	},

	setField: function( value ) {
		this.field_ = value;
	}
};

let Child = function() {
	Parent.call(this);
};

inherits(Child, Parent);

Child.prototype = {
	setField: function( value ) {
		if (value !== null) {
			this.field_ = value;
		}
	}
};