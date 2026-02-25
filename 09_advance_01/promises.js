const promise1 = new Promise(function (resolve, reject) {
    // Do an async task
    // DB calls, cryptography, network

    setTimeout(function () {
        console.log(`1. Async task is completed!`);
        resolve()
    }, 1000)
})

promise1.then(function () {
    console.log(`Promise 1 consumed`);

})

new Promise(function (resolve, reject) {
    setTimeout(function () {
        console.log(`2. Async task is completed!`);
        resolve()
    }, 1000)
}).then(function () {
    console.log('Promise 2 resolved!');
})

const promise3 = new Promise(function (resolve, reject) {
    setTimeout(function () {
        resolve({
            userName: 'Mahin',
            mail: 'Hasan.mahin527@gmail.com'
        })
    }, 1000)
})

promise3.then(function (data) {
    console.log(data);
})


promise4 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = true
        if (!error) {
            resolve({ userName: 'Mahin', password: '123456' })
        } else {
            reject(`ERROR: somthing went wrong!`)
        }
    }, 1000);
})

promise4.then((user) => {
    console.log(user);
    return user.userName
}).then((userName) => {
    console.log(userName);
}).catch((error) => {
    console.error(error);
}).finally(() => console.log('The promise is either resolved or rejected!'));



promise5 = new Promise((resolve, reject) => {
    setTimeout(() => {
        let error = false
        if (!error) {
            resolve({ userName: 'JavaScript', password: 'jsjsjsjs' })
        } else {
            reject(`ERROR: JS went wrong!`)
        }
    }, 1000);
})

async function consumePromise5() {
    try {
        const response = await promise5
        console.log(response);
    }
    catch (error) {
        console.error(error);
    }
}

consumePromise5()


// async function getAllUsers() {
//     try {
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data);
//     }
//     catch (err) {
//         console.error('E:', err);
//     }
// }

// getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users').then((response) => {
    return response.json()
}).then((data) => {
    console.log(data);
    
})
.catch((err) => console.error(err))