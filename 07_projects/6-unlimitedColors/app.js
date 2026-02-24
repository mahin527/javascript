let intervalId;
let showHexCode = document.querySelector('#showHexCode')

const randomColor = function () {
    const hex = '0123456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}

// console.log(randomColor());

const startChangingColor = function () {
    const changeBgColor = function () {
        const generatedColor = randomColor();
        document.body.style.backgroundColor = generatedColor
        showHexCode.innerHTML = `<p>${generatedColor}</p>`
        showHexCode.classList.add('activeColor')
        console.log('Started...');
    }
    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null
    console.log('Stopped...');
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)
