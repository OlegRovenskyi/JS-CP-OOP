"use strict";

var _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

var Person = (function () {
	function Person(firstName) {
		_classCallCheck(this, Person);

		this.firstName_ = firstName;
	}

	Person.MIN_AGE = 16;

	_prototypeProperties(Person, {
		// static
		error: {
			value: function error(msg) {
				console.log(msg);
			},
			writable: true,
			configurable: true
		}
	}, { // prototype
		getFirstName: {
			value: function getFirstName() {
				return this.firstName_;
			},
			writable: true,
			configurable: true
		}
	});

	return Person;
})();