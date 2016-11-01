// Classical Pattern Preconditions

// 1. Function is an object
let SomeFunc = function() {};

// 2. It has property prototype - object
console.log( "SomeFunc.prototype:" );
console.log( SomeFunc.prototype );

// 2.1. Exception: Arrow Function
let noPrototype = () => {};
console.log(noPrototype.prototype);

// 3. Prototype has property constructor
console.log( "SomeFunc.prototype.constructor:" );
console.log( SomeFunc.prototype.constructor );

// 4. Constructor is a function and links on SomeFunc
console.log( "SomeFunc.prototype.constructor === SomeFunc" );
console.log( SomeFunc.prototype.constructor === SomeFunc );

// 5. Endless chain 
console.log( "SomeFunc.prototype.constructor.prototype.constructor === SomeFunc" );
console.log( SomeFunc.prototype.constructor.prototype.constructor === SomeFunc );
