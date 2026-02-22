// let a = 10
// const b = 20
// var c = 30

if (true) {
    let a = 10
    const b = 20
    var c = 30
}

// console.log(a);
// console.log(b);
// console.log(c);


// ============ Part 2 =============

function one() {
    const username = 'Mahin'
    
    function two() {
        const website = 'Youtube'

        console.log(username);
    }
    // console.log(website);
    two()
}
// one()


if (true) {
    const username = 'Mahin'

    if(username === 'Mahin'){
        const website = ' Youtube'
        // console.log(username + website);
    }
    // console.log(website);
    
}

// console.log(username);


// ========== interesting concept ===========

console.log(addOne(5));

function addOne(num) {
    return num + 1
}


// console.log(addTwo(5));

const addTwo = function (num) {
    return num + 2
}

// console.log(addTwo(5));
