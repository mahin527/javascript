class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`${this.username} is logged in!`);
    }
}


class Teacher extends User {
    constructor(username, email, passwd){
        super(username)
        this.email = email
        this.passwd = passwd
    }

    addCourse(){
        console.log(`a new course was added by ${this.username}!`);
    }

}

const user001 = new User('Khalid')
const teacher001 = new Teacher('Teacher Maruf', 'maruf@gmail.com', '65435')

console.log(user001);
console.log(teacher001);

user001.logMe()
teacher001.addCourse()
teacher001.logMe()

// console.log(user001 === teacher001);
// console.log(User === Teacher);

console.log(teacher001 instanceof Teacher); 
console.log(teacher001 instanceof User);    
console.log(user001 instanceof User);       
console.log(user001 instanceof Teacher);