/* 

Control flow in JavaScript refers to the order in which statements are executed in a program.  
By default, JavaScript runs code from top to bottom and left to right in sequence. However, 
control flow statements allow you to alter this default behavior based on conditions, loops, or 
jump instructions. 

=== Conditional Statements ===
These statements execute code based on whether a condition is true or false:

if: Executes a block if a condition is true. 
if...else: Provides an alternative block if the condition is false. 
if...else if...else: Handles multiple conditions in sequence. 
Ternary operator (? :): A concise way to write binary decisions: condition ? exprIfTrue : exprIfFalse. 

=== Loops ===
These repeat code while a condition remains true:

for: Runs a block a fixed number of times, using an initializer, condition, and increment. 
while: Continues while a condition is true; used when the number of iterations is unknown. 
do...while: Executes the block at least once before checking the condition. 

=== Jump Statements ===
These abruptly change the flow:

break: Exits a loop or switch statement. 
continue: Skips the current iteration of a loop. 
return: Exits a function.
throw: Throws an exception, triggering error handling. 

=== Switch Statement === 
Evaluates an expression and executes code based on matching case labels, providing an alternative to long 
chains of if...else if statements. 

=== Error Handling ===
try...catch: Catches and handles exceptions thrown by throw. 
finally: Executes code after try and catch, regardless of whether an exception occurred.
These control flow mechanisms are essential for making decisions, repeating tasks, 
and managing program logic dynamically. 


*/
const isLoggedIn = true

/* 
=== Key Comparison Operators ===
== (Equal): Checks equality with type coercion. Converts operands to the same type before comparing.
Example: 5 == '5' → true
=== (Strict Equal): Checks both value and type. No type coercion.
Example: 5 === '5' → false
!= (Not Equal): Checks inequality with type coercion.
Example: 5 != '6' → true
!== (Strict Not Equal): Checks inequality by value and type.
Example: 5 !== '5' → true
> (Greater Than): Returns true if left operand is greater than right. 
>= (Greater Than or Equal To): Returns true if left operand is greater than or equal to right. 
< (Less Than): Returns true if left operand is less than right. 
<= (Less Than or Equal To): Returns true if left operand is less than or equal to right. 

*/


// if (2 == '2') {
//     console.log(`Excuted`);
// }


let score = 300

// if (score > 200) {
//     let power = 'fly'
//     console.log(`User Power: ${power}`);
// }

let balance = 1000

// if (balance => 500) console.log(`Balance is ${balance}`);

let userLoggedIn = true
let hasDebitCard = true

if (userLoggedIn && hasDebitCard) {
    console.log(`Allow to buy`);
}

let count = 2
switch (true) {
    case (count == 2):
        console.log("hi");
        break;
    case (count > 3):
        console.log("bye");
        break;
    case (count >= 4):
        console.log("lol");
        break;
}


let day;
let date = new Date().getDay();
 
switch (date) {
  case 0:
    day = "Sunday";
    break;
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case  6:
    day = "Saturday";
}
console.log("Today is " + day)




