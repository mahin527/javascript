// https://www.youtube.com/watch?v=cejBux2gtEE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=14

// Array
const myNumber = [1, 2, 3, 4, 5, 6, 7]

// console.log(myNumber);
// console.log(myNumber[2]);

const heros = ['Hulk', 'Ironman', 'Batman', 'Superman', 'captain America', 'Thor']

const fruits = new Array('Apple', 'Mango', 'Strawberry', 'Litchi', 'Pineapple', 'Guava', 'Orange', 'Lemon')

// console.log(fruits);
// console.log(fruits[5]);


// Array methods
myNumber.push(8, 9, 10)
// console.log(myNumber);

myNumber.pop()
// console.log(myNumber);

myNumber.unshift(0)
// console.log(myNumber);

myNumber.shift()
// console.log(myNumber);

myNumber.shift()
// console.log(myNumber);

// console.log(myNumber.includes(11));
// console.log(myNumber.indexOf(2));

const newArr = myNumber.join()
// console.log(newArr);

// slice & splice
console.log('A ', myNumber);

const myNewArr = myNumber.slice(1, 3)
console.log(myNewArr);

/* 
=== JavaScript Array splice vs slice ===

splice() changes the original array whereas slice() doesn't but both of them returns array object.

See the examples below:
*/

var array=[1,2,3,4,5];
console.log(array.splice(2));

/*
This will return [3,4,5]. The original array is affected resulting in array being [1,2].
*/
var array=[1,2,3,4,5]
console.log(array.slice(2));

/*
This will return [3,4,5]. The original array is NOT affected with resulting in array being [1,2,3,4,5].

Below is simple fiddle which confirms this:
*/

//splice
var array=[1,2,3,4,5];
console.log(array.splice(2));

//slice
var array2=[1,2,3,4,5]
console.log(array2.slice(2));


console.log("----after-----");
console.log(array);
console.log(array2);   



// =========== Part 2 ===========

const marvelHeros = ['Hulk', 'Ironman', 'captain America', 'Thor', 'Loki', 'Vision', 'Wanda']
const DCHeros = ['Batman', 'Superman', 'Flash', 'Aquaman']

// marvelHeros.push(DCHeros)
// const allHeros = marvelHeros.concat(DCHeros)

// console.log(allHeros);

const allNewHeros = [...marvelHeros, ...DCHeros]
// console.log(allNewHeros);

const myNum = [1, 2, 3, [4, 5, 6, 7], [8, 9, [10, 11, 12, 13]]]
console.log(myNum);

const anotherNum = myNum.flat(Infinity)
console.log(anotherNum);

console.log(Array.isArray('MAhin'));
console.log(Array.from('MAhin'));

console.log(Array.from({name:'MAhin'}));

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1, score2, score3));


