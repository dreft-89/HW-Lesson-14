let x = parseInt(prompt("Please enter a number"));
let n = parseInt(prompt("Please enter the degree in which you need to raise the number"));

if (Number.isNaN(x) || Number.isNaN(n)) {
    alert('Write only number');
} else {
    let resultOfPower = Math.pow(x, n);
    let secondNumber = document.querySelector('.number').innerText = x;
    let secondPower = document.querySelector('.power').innerText = n;
    let equal = document.querySelector('.equal').innerText = resultOfPower;

    alert('Result of x = ' + x + ', ' + 'in power of n = ' + n + ', ' + 'equals = ' + resultOfPower);
}
