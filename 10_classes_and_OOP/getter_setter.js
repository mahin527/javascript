class User {
    constructor(passwrd, email) {
        this.passwrd = passwrd
        this.email = email
    }

    get email() {
        return this._email.toUpperCase()
    }

    set email(value) {
        return this._email = value
    }

    get passwrd() {
        return this._passwrd_.toUpperCase()
    }

    set passwrd(value) {
        return this._passwrd_ = value
    }
}

const user001 = new User('sdfgg', 'mahin@example.com')
console.log(user001.passwrd);
console.log(user001.email);
// console.log(user001._email);
