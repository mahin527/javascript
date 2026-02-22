// let userEmail = 'mahin@site.com'
// let userEmail = ''
// let userEmail;
let userEmail = []

if (userEmail) {
    console.log(`Got user email`);
} else {
    console.log(`Don't have user email`);
}

/** Falsy values
 * false
 * 0
 * -0
 * BIgint
 * 0n
 * ''
 * null
 * undefined
 * NaN  
 */

/** Truthy values
 * true
 * '0'
 * 'false'
 * ' '
 * {}, [], function(){}
 * 
 */

let myArray = []
if (myArray.length === 0) {
    console.log(`Array is empty`);
}

let emptyObject = {}
if (Object.keys(emptyObject).length === 0) {
    console.log(`Object is empty`);
}


// === the nullish coalescing operator (??) ===
/* 

The nullish coalescing operator (??) in JavaScript returns the right-hand operand if 
the left-hand operand is null or undefined, otherwise it returns the left-hand operand.  
It provides a reliable way to assign default values without treating falsy values like 0, '', 
or false as invalid. 

=== Key Features ===
Only handles null and undefined: Unlike the logical OR (||) operator, which treats all falsy values as "empty," ?? only checks for null or undefined. This prevents unintended defaulting of valid values.
const count = 0;
const text = "";
const qty = count ?? 42;        // 0 (not 42)
const message = text ?? "hi!";  // "" (not "hi!")

Short-circuiting: The right-hand side expression is only evaluated if the left-hand side is null or undefined.
function expensive() { console.log("Called"); return "default"; }
null ?? expensive(); // "Called" and "default"
0 ?? expensive();    // No output — returns 0 immediately

Combines well with optional chaining (?.) to safely access nested properties with defaults:
const user = { profile: { name: "Alice" } };
console.log(user.profile?.name ?? "Unknown"); // "Alice"
console.log(user.profile?.age ?? 0);          // 0

*/


let val1;
// val1 = 5 ?? 10

val1 = null ?? 10 ?? undefined ?? 20
console.log(val1);


// === ternary operator ===
/*
The JavaScript ternary operator is a concise conditional operator that evaluates a condition 
and returns one of two values based on whether the condition is truthy or falsy.  
It takes three operands: a condition, an expression to execute if the condition is truthy, 
and an expression to execute if the condition is falsy. 

Syntax
condition ? exprIfTrue : exprIfFalse

condition: An expression that evaluates to true or false. 
exprIfTrue: The value or expression returned if the condition is truthy. 
exprIfFalse: The value or expression returned if the condition is falsy. 

*/

// const bookPrice = 100
const bookPrice = 101
bookPrice == 100 ? console.log(`Book price is 100`) : console.log(`Book price is not 100`);

