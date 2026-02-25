// ES6


class User {
    constructor(username, email, password) {
        this.username = username
        this.email = email
        this.password = password
    }

    encryptPassword() {
        return `${this.password}abc`
    }

    capitalizeUsename() {
        return `${this.username.toUpperCase()}`
    }
}


// behind the scene

// function User(username, email, password) {
//     this.username = username
//     this.email = email
//     this.password = password
// }

// User.prototype.encryptPassword = function () {
//     return `${this.password}abc`

// }

// User.prototype.capitalizeUsename = function () {
//     return `${this.username.toUpperCase()}`
// }

const id001 = new User('Mahin', 'mahin@example.com', '123456')
console.log(id001.encryptPassword());
console.log(id001.capitalizeUsename());


const id002 = new User('Hasan', 'Hasan@example.com', '5678')
console.log(id002.encryptPassword());
console.log(id002.capitalizeUsename());
