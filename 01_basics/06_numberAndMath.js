// https://www.youtube.com/watch?v=_KqpeDc47Ro&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=12

const score = 500
// console.log(score);

const balance = new Number(500)
// console.log(balance);
// console.log(balance.toFixed(2));

const bankBalance = 123.546
// console.log(bankBalance.toPrecision(3));
// console.log(bankBalance.toPrecision(4));

const money = 1000000
// console.log(money.toLocaleString());
// console.log(money.toLocaleString('en-IN'));
// console.log(money.toLocaleString('en-BD'));


// ================ Maths =================
/* 
The JavaScript Math object is a built-in global object that provides properties and methods for 
mathematical constants and functions.  It does not need to be instantiated and can be used directly 
with the 'Math.' prefix. 

Core Mathematical Operations
JavaScript supports standard arithmetic operators:

    + for addition
    - for subtraction
    * for multiplication
    / for division
    % for remainder (modulo)
    ** for exponentiation
*/
//Example:
// let product = 5 * 3; // 15
// let power = 2 ** 4;  // 16


// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.454));
// console.log(Math.ceil(4.1));
// console.log(Math.floor(4.9));
// console.log(Math.min(3, 10, 55, 66,32));
// console.log(Math.max(3, 10, 55, 66,32));

let randomNum = Math.random()
// console.log(randomNum);
// console.log(randomNum * 10);
// console.log((randomNum * 10) + 1);
// console.log(Math.floor((randomNum * 10)) + 1);

// let min = 1
let min = 10
//let max = 10
let max = 19


console.log(Math.floor(Math.random() * (max - min + 1)) + min)

