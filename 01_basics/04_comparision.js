/* 
JavaScript Comparison Operators are used to compare two values and return a Boolean result (true or false).  
They are essential for control flow in conditional statements like if, while, and for loops. 

=== Key Comparison Operators ===

== (Equal): Checks if values are equal after type coercion.
Example: 5 == '5' → true (string '5' is converted to number 5).

=== (Strict Equal): Checks if values are equal and of the same type. 
Example: 5 === '5' → false (different types).

!= (Not Equal): Returns true if values are not equal after type coercion. 

!== (Strict Not Equal): Returns true if values are not equal or not of the same type. 

> (Greater than), < (Less than), >= (Greater than or equal), 
<= (Less than or equal): Used for numerical and lexicographical comparisons. 

=== Important Notes ===
Type Coercion: Operators like == and != perform type conversion, which can lead to unexpected results.
Example: null == undefined → true, but 0 == false → true.
NaN Comparison: NaN is not equal to anything, including itself.  Use isNaN() or Number.isNaN() to check.
String Comparison: Compares character codes lexicographically (e.g., 'apple' < 'Banana' → true due to uppercase B having a lower code than lowercase a). 

=== Best Practice ===
Use === and !== to avoid type coercion issues and write more predictable, bug-free code. 
*/


const num = 0;
const obj = new String("0");
const str = "0";

console.log(num === num); // true
console.log(obj === obj); // true
console.log(str === str); // true

console.log(num === obj); // false
console.log(num === str); // false
console.log(obj === str); // false
console.log(null === undefined); // false
console.log(obj === null); // false
console.log(obj === undefined); // false

