const fruits = ['Apple', 'Banana', 'Orange', 'Guava', 'Lemon', 'Pineapple', 'Litchi']

const values = fruits.forEach((item) => {
    // console.log(item);
    return item
})

// console.log(values);


// const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// const newNum = myNums.filter((num)=> num >= 5 )

// const newNum = myNums.filter((num) => {
//     return num >= 5
// })
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const newNum = []
myNums.forEach((num) => {
    if (num >= 5) {
        newNum.push(num)
    }
})

// console.log(newNum);



const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
];

const historyBooks = books.filter((bk) => bk.genre === 'History')

// console.log(historyBooks);

const pblishAfter2000 = books.filter((bk) => bk.publish >= 2000)

// console.log(pblishAfter2000);


const added10 = myNums.map((num) => num + 10)
// console.log(added10);


const newNums = myNums.map((num) => num * 10)
    .map((num) => num + 1)
    .filter((num) => num >= 40)
// console.log(newNums);


// === Reduce ===

const myNumbers = [1, 2, 3]

// const checkingReduce = myNumbers.reduce(function (acc, curval) {
//     console.log(`acc is: ${acc}, curval is: ${curval}`);
//     return acc + curval
// }, 0)

const checkingReduce = myNumbers.reduce((acc, currval) => acc + currval, 0)

// console.log(checkingReduce);


let shoppingCart = [
    {
        item: 'Js Book',
        price: 299
    },
    {
        item: 'T-shirt',
        price: 468
    },
    {
        item: 'Shoe',
        price: 1490
    },
    {
        item: 'Coat',
        price: 5000
    },
    {
        item: 'Pant',
        price: 4300
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(`Total is: ${priceToPay} `);

