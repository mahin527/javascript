// https://www.youtube.com/watch?v=tGLCuoumaGY&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=13

/* 

=== Creating and Getting Current Date/Time ===
To get the current date and time in JavaScript, use new Date() without arguments:

const now = new Date();
console.log(now); // Outputs current date and time (e.g., Mon Feb 21 2026 10:30:45 GMT+0000)

For a faster, performance-optimized way to get the current timestamp (in milliseconds since January 1, 1970), use Date.now():

const timestamp = Date.now();
console.log(timestamp); // e.g., 1740187845000

Accessing Date and Time Components
Use getter methods to extract individual components from a Date object:

getFullYear() – 4-digit year (e.g., 2026)
getMonth() – 0-based month (0 = January, 11 = December)
getDate() – day of the month (1–31)
getHours(), getMinutes(), getSeconds() – time components
getDay() – day of the week (0 = Sunday, 6 = Saturday) 

*/

// const now = new Date()
// console.log(now);

// const timestamp = Date.now();
// console.log(timestamp);


let myDate = new Date()
// console.log(myDate);
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleString());
// console.log(myDate.toLocaleTimeString());
// console.log(typeof myDate);


// let myCreatedDate = new Date(2027, 0, 20) 
// console.log(myCreatedDate);
// console.log(myCreatedDate.toDateString());

// let myCreatedDate = new Date(2027, 0, 20, 5, 50) 
// console.log(myCreatedDate.toLocaleString());

let myCreatedDate = new Date('2026-02-21')
// console.log(myCreatedDate.toLocaleString());
 
const myTimeStamp = Date.now()
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());

// console.log(Date.now());
// console.log(Math.floor(Date.now()/1000));


const newDate = new Date()
// console.log(newDate);
// console.log(newDate.getDate());
// console.log(newDate.getDay());
// console.log(newDate.getFullYear());
// console.log(newDate.getHours());
// console.log(newDate.getMilliseconds());
// console.log(newDate.getMinutes());

newDate.toLocaleString('default', {
    weekday: 'long'
})