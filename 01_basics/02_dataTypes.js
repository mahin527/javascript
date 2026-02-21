// https://www.youtube.com/watch?v=-9knnv97wSc&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=6
// https://tc39.es/ecma262/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript

"use strict"; // treat all js code as newer version

// alert('something...'); // we are using nodejs, not browser!

/*
JavaScript has seven primitive data types and non-primitive (reference) data types.  
The primitive types are immutable and stored directly in memory, 
while non-primitive types are mutable and stored by reference. 


=== Primitive Data Types ===
String: Textual data enclosed in quotes ("hello", 'world', or `template`). 
Number: Integers and floating-point numbers (e.g., 42, 3.14, 1e5). 
BigInt: Large integers with arbitrary precision (e.g., 9007199254740992n). 
Boolean: Logical values true or false. 
undefined: A variable declared but not assigned a value. 
null: Represents intentional absence of any object value. 
Symbol: Unique and immutable identifiers, often used as object property keys (introduced in ES6). 


=== Non-Primitive Data Types ===
Object: Key-value pairs used to store collections of data (e.g., { name: "John" }). 
Array: Ordered lists of values, which are a special type of object (e.g., [1, 2, 3]). 
Function: Blocks of code designed to perform a specific task (e.g., function greet() { }). 
Date, RegExp, Map, Set, Promise, and Typed Arrays (e.g., Int32Array) are also built-in non-primitive types. 

JavaScript is dynamically typed, meaning variables can hold different types at different times.  The 'typeof' operator helps identify a value's type.
*/


let name = 'Mahin Hasan';
let age = 21;
let isLoggedIn = true; // or false
let state;

// console.log(typeof true);
// console.log(typeof (age));



// https://www.youtube.com/watch?v=suMvZWjjKbo&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=9

// ================ Data Types Summary ================

// Arrray, Object, Functioln
const heros = ['Hulk', 'Ironman', 'Batman', 'Superman', 'captain America', 'Thor']

let myId = {
    name: 'Mahin',
    age: 22,
    gmail: 'hasan.mahin527@gmail.com'
}

// function name(params) {
    
// }

/* 
== The typeof Operator ===
//https://262.ecma-international.org/5.1/#sec-11.4.3

The production UnaryExpression : typeof UnaryExpression is evaluated as follows:

Let val be the result of evaluating UnaryExpression.
If Type(val) is Reference, then
If IsUnresolvableReference(val) is true, return "undefined".
Let val be GetValue(val).
Return a String determined by Type(val) according to Table 20.
Table 20 — typeof Operator Results
Type of val	Result
Undefined	"undefined"
Null	"object"
Boolean	"boolean"
Number	"number"
String	"string"
Object (native and does not implement [[Call]])	"object"
Object (native or host and does implement [[Call]])	"function"
Object (host and does not implement [[Call]])	Implementation-defined except may not be "undefined", "boolean", "number", or "string".

*/


//=== Stack and Heap memory in javascript ===
// https://www.youtube.com/watch?v=7gwc-1czolw&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=10

// stack => premitive
// heap => non premitive

let myFullName = 'Mahin Hasan'

let anotherName = myFullName

// console.log(anotherName);

anotherName = 'Romjan'

console.log(anotherName);
console.log(myFullName);


let user1 = {
    name: 'Hasan',
    mail: 'hasan.mahin527@'
}

let user2 = user1

user2.mail = 'mdmahin@gmail.com'

console.log(user2.mail);
console.log(user1.mail);

