/* ES6 */
class Parent {
	constructor(value) {
		this.value_ = value;
		this.parentValue = "Parent";
	}

	getValue() {
		return this.value_;
	}
}

class Child extends Parent {
	constructor(value) {
		super(value);
		this.childValue = "Child";
	}

	getValue() {
		return `This is child: ${super.getValue()}`;
	}

	getChildValue() {
		return this.childValue;
	}
}

