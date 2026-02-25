// function User(email, passwrd) { 
//     this.email = email;
//     this.passwrd = passwrd;

//     Object.defineProperty(this, 'email', {
//         get: function () {
//             return this._email.toUpperCase()
//         },
//         set: function (value) {
//             this._email = value
//         }
//     })

//     Object.defineProperty(this, 'passwrd', {
//         get: function () {
//             return this._passwrd.toUpperCase()
//         },
//         set: function (value) {
//             this._passwrd = value
//         }
//     })
// }

// const coffee = new User('coffee@coffee.com', 'abcde')
// console.log(coffee.email);  
// console.log(coffee.passwrd); 


function User(email, passwrd) {
    // ১. আগে প্রোপার্টি ডিফাইন করো
    Object.defineProperty(this, 'email', {
        get: function () {
            return this._email.toUpperCase()
        },
        set: function (value) {
            this._email = value
        }
    });

    Object.defineProperty(this, 'passwrd', {
        get: function () {
            return this._passwrd.toUpperCase()
        },
        set: function (value) {
            this._passwrd = value
        }
    });

    // ২. সবশেষে ভ্যালু অ্যাসাইন করো
    this.email = email;
    this.passwrd = passwrd;
}

const coffee = new User('coffee@coffee.com', 'abcde')
console.log(coffee.email);
console.log(coffee.passwrd);