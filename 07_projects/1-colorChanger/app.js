const body = document.querySelector('body')
const buttons = document.querySelectorAll('.button')

// console.log(buttons);

buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
        // console.log(event);
        // console.log(event.target);
        // console.log(event.target.id);
        body.style.backgroundColor = event.target.id
    })
})

