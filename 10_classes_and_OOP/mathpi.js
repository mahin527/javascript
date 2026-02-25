let descriptor = Object.getOwnPropertyDescriptor(Math, 'PI')
// console.log(descriptor);


// Math.PI = 5
// let mathpiVal = Math.PI

// console.log(mathpiVal);


let tea = {
    name: 'Ginger',
    price: 230,
    isAvailable: true,

    orderTea: function () {
        console.log(`Do you want ${this.name}`);
    }
}

// console.log(tea);
// console.log(Object.getOwnPropertyDescriptor(tea, 'name'));

// Object.defineProperty(tea, 'name', {
//     writable: false,
//     enumerable: false,
//     configurable: false
// })

// console.log(Object.getOwnPropertyDescriptor(tea, 'name'));

// tea.name = 'flavour of black'

// console.log(tea.name);


for (const [key, value] of Object.entries(tea)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
}