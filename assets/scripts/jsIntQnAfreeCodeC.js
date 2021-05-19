//EVENT BUBBLING AND EVENT DELEGATION
// Event bubbling: if ou click on an element then the event takes place in its parent
// event delegation: If you set a listener to the parent then perform an event on the children, the parent also fires up

// target VS currentTarget
//target: it is the exact element that you click
//currentTarget: it is the element where you've coded the event listener

//Why this doesn't work as an IIFE

// function printName() {
//     console.log('Sonam'
// }()

//JAVASCRIPT READS THIS AS
//function printName() {
//code here
// }

//();
//written on separate lines

//this has to do with function statement vs expressions
// What does a function statement do?
//it creates more like a reference tha a value
// what does a function expression do?
// expressions reosolve in a value

//solution
//(functionn foo() {})();
//js interprets whatever is inside the parentheses as expression not a statement

//Why use IIFE
// to avoid polluting the global scope and if we don't want function to be in the scope or poor with naming or is very minor then it's a good choice. It avoids problems with dumb naming conventions.
//IIFE is self-contained

// (function iife() {
// 	return (x = 3);
// })();
// console.log(x);
// console.log(iife); //iife is not defined hence no pollution of the socpe

//5. WHY LEAVE THE GLOBAL SCOPE AS IS
//You can't predict the future and say if we use different libraries then there could be variable name collusion, so use IIFE

//HOISTING
//All the variables(defined with VAR) and function DECLARATIONS are declared at the top of the given function scope
//let and const scope the variables within the block you're in
// if (x === 2) {
// 	let a = 3;
// } else {
// 	const b = 3;
// }

// console.log(a); //a and b are not defined because a and b are scoped to if and else block

//null undefined or undeclared
//undeclared: you used it before you declared it.
//undefined:
// 1.declared but not assigned a value
//2.object/array exists but nothing at key/index
//3.Happens too often in a function to me! you have to return a value.
//4. falsy
//null: having a value with no value, acts as a placeholder like in api

//HUNTING undeclared
//use a linter
//undeclared finds you
//CONST VS LET
//in case of const you have to assign a value with let its not a compulsion
// if you don't use var then the variable presumes it is var
// a = 3;
// // means same as
// // let a = 3
// console.log(a);

//== vs ===
let foo; //foo is undefined
const bar = null; //bar is null
console.log(foo == bar); //both have no value so, it's true with double equal. == is check for equality
console.log(foo === bar); //=== avoids type coercion.b
