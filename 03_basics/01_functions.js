// Function Declarations: Named functions defined with the function keyword. They are hoisted, meaning they can be called before they are declared.
function greet(name) {
    return "Hello, " + name + "!";
}

// Function Expressions: Functions assigned to variables. They are not hoisted and must be defined before use.
// function add (a, b) {
//     // console.log(a + b);
//     return a + b;
// };

// console.log(add(2, 3 ));
// console.log(add(2, '3' ));
// console.log(add(2, 3, 4 ));

// const result = add(2, 3)
// console.log(result);
// console.log('Result:', result);

function add(num1, num2) {
    const result = num1 + num2
    console.log('Function is end!');
    return result
    console.log('Function is end!'); // never excute

}
// const result = add(5, 6)
// console.log('Resut', result);



// console.log('M');
// console.log('a');
// console.log('h');
// console.log('i');
// console.log('n');


function sayMyName() {
    console.log('M');
    console.log('a');
    console.log('h');
    console.log('i');
    console.log('n');
}

// sayMyName()


function loginMsg(userName = 'Guest') {
    if (!userName) {
        console.log(`Please enter your name!`);
        return
    } else {
        return `${userName} just logged in`
    }
}

// const msg1 = loginMsg('mahin')
// const msg2 = loginMsg('')
// const msg3 = loginMsg()

// console.log(msg1);
// console.log(msg2);
// console.log(msg3);

// console.log(loginMsg('mahin'))
// console.log(loginMsg(''))
// console.log(loginMsg())

// rest operator
function calculateCartPrice(...price){
    return price
}

// console.log(calculateCartPrice(212, 4354, 56,));



const books = {
    bookName: 'JavaScript',
    price: 122
}

function handlingObject(anyObject) {
    console.log(`I am reading ${anyObject.bookName}, its price is ${anyObject.price}`);
}

// handlingObject(books)

// handlingObject(
//     {
//         bookName: 'EysyJs',
//         price: 499
//     }
// )


const fruits = ['Apple', 'Banana', 'Orange', 'Guava']

function returnSecondValue(getArray) {
    return getArray[1]
}

// console.log(returnSecondValue(fruits));
console.log(returnSecondValue(['Lemon', 'Strawberry', 'Pineapple']));

