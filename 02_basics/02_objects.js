// singelton
// object.create


// object literals

const sym1 = Symbol('key1')

const user = {
    name: 'Mahin',
    'full name': 'Mahin Hasan',
    [sym1]: 'pass1234',
    age: 21,
    location: 'Bangladesh',
    isLoggedIn: false,
    lastLogInParts: ['MonPart', 'SunPart']
}
// console.log(user.name);
// console.log(user['name']);

// console.log(user['full name']);
// console.log(user[sym1]);
// console.log(typeof user[sym1]);

// Object.freeze(user)
user.name = 'Hasan'
// console.log(user.name);
// console.log(user);

user.greeting = function () {
    console.log('Hello user!');
}

user.greeting2 = function () {
    console.log(`Hello user, ${this.name}`);
}

// console.log(user.greeting);
// console.log(user.greeting());
// console.log(user.greeting2());


// ========= Part 2 ==========
// https://www.youtube.com/watch?v=4lb2pXWWXJI&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=17

// const tinderUser = {}
const tinderUser = new Object()

tinderUser.id = '12345'
tinderUser.name = 'Captain'
tinderUser.isLoggedIn = true

// console.log(tinderUser);

const regularUser = {
    email: 'myEmail@google.com',
    fullName: {
        userFullName: {
            firstName: 'Mahin',
            lastName: 'Hasan'
        }
    }
}
// console.log(regularUser.fullName.userFullName);


const obj1 = { 1: 'a', 2: 'b', 3: 'c' }
const obj2 = { 4: 'd', 5: 'e', 6: 'f' }

const obj4 = { 7: 'g', 8: 'h', 9: 'i' }

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = { ...obj1, ...obj2, ...obj4 }

// console.log(obj3);

const employee = [
    {
        id: 1,
        mail: 'shahadat@nook.com'
    },
    {
        id: 2,
        mail: 'arafat@roy.com'
    },
    {
        id: 3,
        mail: 'bayzid@busan.com'
    }
]

employee[1].mail

// console.log(tinderUser);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('location'));



// ========= Part 3 ==========
// https://www.youtube.com/watch?v=AViTh83k-IE&list=PLu71SKxNbfoBuX3f4EOACle2y-tRC5Q37&index=18

const course = {
    courseName: 'Javascript advanced',
    price: 999,
    instractor: 'Mahin Hasan'
}

// course.courseName
// const {courseName} = course
const { courseName: Cname } = course
// console.log(courseName);
console.log(Cname);

// random user me api
// json bewtifier

/*
{
  "results": [
    {
      "gender": "female",
      "name": {
        "title": "Miss",
        "first": "Åsne",
        "last": "Ottersen"
      },
      "location": {
        "street": {
          "number": 5165,
          "name": "Lille Grensen"
        },
        "city": "Tomteråsen",
        "state": "Buskerud",
        "country": "Norway",
        "postcode": "7047",
        "coordinates": {
          "latitude": "45.3034",
          "longitude": "23.5193"
        },
        "timezone": {
          "offset": "-10:00",
          "description": "Hawaii"
        }
      },
      "email": "asne.ottersen@example.com",
      "login": {
        "uuid": "fa1188d2-80c4-41d1-b6ea-de094d58738a",
        "username": "purpleswan888",
        "password": "thor",
        "salt": "dVqf2gSy",
        "md5": "036f5a859555509a3657aceb25f84b11",
        "sha1": "8144b181be04af1172113644a8c48f24f79df002",
        "sha256": "e026e6c9e53b3b7cfaedef6e1329b893445e7d9d281e9f39e1116c0b351ff6d4"
      },
      "dob": {
        "date": "1945-01-10T17:51:20.378Z",
        "age": 81
      },
      "registered": {
        "date": "2014-01-26T21:07:52.643Z",
        "age": 12
      },
      "phone": "73542566",
      "cell": "48435766",
      "id": {
        "name": "FN",
        "value": "10014510899"
      },
      "picture": {
        "large": "https://randomuser.me/api/portraits/women/27.jpg",
        "medium": "https://randomuser.me/api/portraits/med/women/27.jpg",
        "thumbnail": "https://randomuser.me/api/portraits/thumb/women/27.jpg"
      },
      "nat": "NO"
    }
  ],
  "info": {
    "seed": "5fb0d73a469d25da",
    "results": 1,
    "page": 1,
    "version": "1.4"
  }
}
*/