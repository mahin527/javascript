// https://www.youtube.com/watch?v=X7hDBhd_L5U&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=6

let score = '33abc' 

// console.log(typeof (score));
// console.log(typeof score); 

let valueInNumber = Number(score)

// console.log(typeof valueInNumber);
// console.log(valueInNumber);

// score = '33abc'

// console.log(valueInNumber);

/* 
    "33" => 33
    "33abc" => NaN
    true => 1,  false => 0
*/


let isLoggedIn = 0
// let isLoggedIn = 1
// let isLoggedIn = 100
// let isLoggedIn = ""
// let isLoggedIn = "Mahin"

let booleanIsLoggedIn = Boolean(isLoggedIn)

// console.log(booleanIsLoggedIn);

/*
    1 => true
    0 => false
    '' => false
    'spmething' => true 
 */


// =============== Operations ==================

let value = 5

let negValue = -value
// console.log(negValue);



/*

JavaScript operators are symbols that perform operations on operands (values or variables).  They are fundamental for manipulating data and controlling program flow. 

=== Arithmetic Operators ===

    Used for mathematical calculations:

    + (Addition): 5 + 3 → 8
    - (Subtraction): 5 - 3 → 2
    * (Multiplication): 5 * 3 → 15
    / (Division): 6 / 2 → 3
    % (Remainder/Modulus): 5 % 2 → 1
    ** (Exponentiation): 2 ** 3 → 8
    ++ (Increment): x++ or ++x increases value by 1
    -- (Decrement): x-- or --x decreases value by 1 

*/
// console.log(4**5);

/* 
=== Exponentiation ====
    Your calculation for 3 ** 6:
    Here the number 3 appears 6 times in total:
    1. 3 (first number)
    2. 3 * 3 = 9 (2 3)
    3. 9 * 3 = 27 (3 3)
    4. 27 * 3 = 81 (4 3)
    5. 81 * 3 = 243 (5 3)
    6. 243 * 3 = 729 (6 3) — Result: 729

    Your calculation for 2 ** 8:
    Here the number 2 appears 8 times in total:
    1. 2
    2. 2 * 2 = 4
    3. 4 * 2 = 8
    4. 8 * 2 = 16
    5. 16 * 2 = 32
    6. 32 * 2 = 64
    7. 64 * 2 = 128
    8. 128 * 2 = 256 — Result: 256
*/

// console.log('1' + 2);
// console.log(1 + '2');
// console.log('1' + 2 + 2);
// console.log(1 + 2 + '2');


/* 
=== difference between x++ and ++x ===

In JavaScript, these two things are called **Increment Operators**. Although they look almost the same, 
their **Timing** is a little different.

Simply put:

* `x++` (Postfix): **Use the value** first, then add 1.

* `++x` (Prefix): **Add 1** first, then use the value.

Let's see through a fun example. Suppose, you have `x = 5`.

1. Postfix (`x++`) — "Work first, add later"

Here JavaScript first finishes working with the current value, then increments the value by 1.

let x = 5;
let y = x++; // Here the value of y will be 5, because x first gave its value 5 to y.

console.log(y); // Output: 5
console.log(x); // Output: 6 (x increased by 6 after the operation)


2. Prefix (`++x`) — "Add first, work later"

Here JavaScript first increments the value by 1, then operates on that new value.

```javascript
let x = 5;
let y = ++x; // Here x was incremented by 6, then assigned that 6 value to y.

console.log(y); // Output: 6
console.log(x); // Output: 6

*/

