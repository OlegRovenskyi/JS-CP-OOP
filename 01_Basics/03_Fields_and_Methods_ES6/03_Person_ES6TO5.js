"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Person = (function () {
	function Person(firstName, lastName) {
		_classCallCheck(this, Person);

		this.firstName_ = firstName;
		this.lastName_ = lastName;
	}

	_prototypeProperties(Person, null, {
		getFirstName: {
			value: function getFirstName() {
				return this.firstName_;
			},
			writable: true,
			configurable: true
		},
		setFirstName: {
			value: function setFirstName(firstName) {
				this.firstName_ = firstName;
			},
			writable: true,
			configurable: true
		},
		getLastName: {
			value: function getLastName() {
				return this.lastName_;
			},
			writable: true,
			configurable: true
		},
		myPrivateMethod_: {
			value: function myPrivateMethod_() {},
			writable: true,
			configurable: true
		}
	});

	return Person;
})();