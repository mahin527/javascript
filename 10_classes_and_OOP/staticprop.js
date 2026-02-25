class User {
    constructor(username) {
        this.username = username
    }

    logMe() {
        console.log(`${this.username} is logged in!`);
    }

    static createId() {
        return `123`
    }
}


const mahin = new User('Mahin')

console.log(mahin.createId())