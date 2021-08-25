function getPin() {
    const pin = Math.round(Math.random() * 10000);
    const pinString = pin + '';
    if (pinString.length == 4) {
        return pin;
    }
    else{
        return getPin();
    }
}
function genaratePin(){
    const pin = getPin();
    document.getElementById('display-pin').value = pin;
}

document.getElementById('key-pad').addEventListener('click', function(event) {
    const number = event.target.innerText;
    const calcInput = document.getElementById('type-numbers');
    if (isNaN(number)) {
        if (number == 'C') {
            calcInput.value = '';
        }
    }
    else{
        const previousCalc = calcInput.value;
        const newNumber = previousCalc + number;
        calcInput.value = newNumber;
    }
    
});

function veryfyPin() {
    const pin = document.getElementById('display-pin').value;
    const typeNumbers = document.getElementById('type-numbers').value;
    const sucessNitification = document.getElementById('notify-success');
    const failNitification = document.getElementById('notify-fail');

    if (pin == typeNumbers) {
        failNitification.style.display = 'none';
       sucessNitification.style.display = 'block';
    }
    else{
        sucessNitification.style.display = 'none';
        failNitification.style.display = 'block';
    }
}