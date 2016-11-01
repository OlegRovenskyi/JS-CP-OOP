
/**
 * 1. When we call function with operator new, 
 * the new object has been constructed and returned from the function
 */
let simpleClassThis;

let SimpleClass = function() {
	simpleClassThis = this;

	// implicitly returns this

	// or
	// explicitly returns this  
	// return this;

	// or
	// return {
	//	a: "a"
	// };

	// ignores primitive type
	// return "some string"; 
};

let simpleInst = new SimpleClass();

console.log("simpleInst");
console.log(simpleInst);

/**
 * 2. this will be the link to this object in a body of a function
 */
console.log("simpleInst === simpleClassThis");
console.log(simpleInst === simpleClassThis);


/**
 * 3. The Prototype of the function will be the protoype of the new object
 */
console.log("SimpleClass.prototype.isPrototypeOf(simpleInst)");
console.log(SimpleClass.prototype.isPrototypeOf(simpleInst));


