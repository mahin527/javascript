/*

JavaScript variables are named containers used to store data values that can be referenced and manipulated throughout a program.  
They are essential for holding information like numbers, strings, booleans, objects, or functions. 

Declaration and Keywords
Variables are declared using one of three keywords:

var: Function-scoped and globally-scoped; can be redeclared and hoisted (moved to the top of their scope), 
leading to potential bugs. Not recommended for new code. 

let: Block-scoped (limited to {} blocks), cannot be redeclared in the same scope, and not hoisted. 
Preferred for variables that will change. 

const: Block-scoped, cannot be reassigned after declaration, and must be initialized. Recommended for values that should not change, 
even if the content of objects or arrays can be modified. 
*/

var x;       // undefined
x = 0;       // number
x = true;    // boolean
x = "hello"; // string

let name = "Mahin";     // string
let age = 21;           // number
let isActive = true;    // boolean
const PI = 3.14;        // constant   

/*
=== Scope and Best Practices ===
let and const are block-scoped, reducing errors from unintended variable access. 
var is function-scoped, which can lead to unexpected behavior due to hoisting and global pollution. 
Use const by default unless you need to reassign the variable. 
Avoid var in modern JavaScript; use let or const instead. 
Using Variables in Strings
Variables can be inserted into strings using template literals (backticks `):
*/
let greeting = `Hello, ${name}! You are ${age} years old.`;
console.log(greeting); // "Hello, Alice! You are 25 years old."
/*
This approach is cleaner and more readable than concatenation with +. 
*/