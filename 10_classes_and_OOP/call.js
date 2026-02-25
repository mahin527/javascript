function setusername(username) {
    this.username = username
    console.log(`Called`);
    
}

function createUser(username, email, passwd) {
    setusername.call(this, username)
    this.email = email
    this.passwd = passwd
}

const user01 = new createUser('Mahin', 'mahin@axample.com', '1234')

console.log(user01);
