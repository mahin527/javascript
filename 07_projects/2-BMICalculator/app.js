const form = document.querySelector('form');

form.addEventListener('submit', (event) => {
    event.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector("#weight").value);
    const results = document.querySelector('#results');

    if (isNaN(height) || height <= 0) {
        results.innerHTML = `Correct Height input!`;
        results.style.color = "red";
    } else if (isNaN(weight) || weight <= 0) {
        results.innerHTML = `Correct weight input!`;
        results.style.color = "red";
    } else {
        const bmi = (weight / ((height * height) / 10000)).toFixed(2);

        // show result with category
        let message = '';
        if (bmi < 18.6) message = ' (Under Weight)';
        else if (bmi >= 18.6 && bmi <= 24.9) message = ' (Normal Range)';
        else message = ' (Overweight)';

        results.innerHTML = `<span>${bmi}</span><br><small style="font-size: 20px">${message}</small>`;
        results.style.color = "#fff";
    }
});