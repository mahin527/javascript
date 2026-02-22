const user = {
    username: 'Mahin',
    price: 999,

    welcomeMsg: function () {
        console.log(`Hello ${this.username}, welcome to our site!`);
        console.log(this);
    }
}
// user.welcomeMsg()
// user.username = 'Hadi'
// user.welcomeMsg()

// console.log(this);

// function checkingThis(){
//     let username = 'Mahin'
//     console.log(this.username);
// }

// checkingThis()

const checkingThis = () => {
    let username = 'Mahin'
    console.log(this.username);
}

// checkingThis()

// const addTwo = (num1, num2) => {
//     return num1+ num2
// }

// const addTwo = (num1, num2) => num1 + num2

// const addTwo = (num1, num2) => (num1 + num2)

const addTwo = (num1, num2) => ({username: 'Mahin'})


console.log(addTwo(2, 3));




