// javascript and classes

// OOP

// Object

// constructor function
// protype
// classes
// instances (new , this)

// pillars
/* 

The term "JavaScript pillars" can refer to different concepts depending on context. The most commonly referenced pillars are the four pillars of Object-Oriented Programming (OOP), which apply to JavaScript as a multi-paradigm language:

- Abstraction: Hiding complex implementation details and exposing only essential features. 
- Encapsulation: Bundling data and methods within a single unit (like an object) and restricting access to internal state. 
- Inheritance: Allowing one object to acquire properties and methods from another, promoting code reuse. 
- Polymorphism: Enabling objects of different types to be treated as instances of the same type through a common interface. 

*/



// object literal

const user = {
    userName: 'Mahin',
    loginCount: 8,
    signedIn: true,

    getUserDetails: function () {
        console.log(`Got user details.`);
        console.log(`user name: ${this.userName}`);
        
    }
}

// console.log(user.userName);
// console.log(user.getUserDetails());


// constructor function

function userInfo(userName, loginCount, isLoggedIn) {
    this.userName = userName
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn
    this.greeting = function () {
        console.log(`Welcome ${this.userName}`);
    }
    // return this
}

const userOne = new userInfo('Hasan', 21, false)

const userTwo = new userInfo('Romjan', 13, true)


// console.log(userOne);
// console.log(userTwo);
console.log(userOne.constructor);
