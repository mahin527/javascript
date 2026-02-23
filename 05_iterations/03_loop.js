// === for of ===
let arr = [1, 2, 3, 4, 5, 6, 7]

for (const num of arr) {
    // console.log(num);
}

let greetings = 'Welcome dear!'

for (const greet of greetings) {
    // console.log(greet);   
}



// === map ===
const map = new Map()

map.set('BD', 'Bangladesh')
map.set('IN', 'India')
map.set('UK', 'United Kingdom')
map.set('BD', 'Bangladesh')

// console.log(map);

for (const [key, value] of map) {
    // console.log(key, ':', value );
}

// === for in ===


let myObject = {
    js: 'Javascript',
    py: 'Python',
    cpp: 'C++',
    rb: 'Ruby'
}

for (const key in myObject) {
    // console.log(`${key} : ${myObject[key]}`);  
}

let computerLanguage = ['py', 'java', 'c++', 'ruby', 'swift']

for (const key in computerLanguage) {
    // console.log(computerLanguage[key]);
}

for (const key in map) {
    // console.log(map[key]);   
}

// === for each ===

const fruits = ['Apple', 'Banana', 'Orange', 'Guava', 'Lemon', 'Pineapple', 'Litchi']

fruits.forEach(function (item, index, arr) {
    // console.log(item, index, arr);    
});


const coding = [
    {
        langName: 'Javascript',
        fileExt: 'js'
    },
    {
        langName: 'Python',
        fileExt: 'py'
    },
    {
        langName: 'Ruby',
        fileExt: 'rb'
    }
]

coding.forEach((item)=>{
    console.log(item.langName);
    console.log(item.fileExt);
})

