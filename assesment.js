//variable
//assessment--1
/* var string = "Tapushi";
var boolien = true;
var numbers = 120; */

//let vs conts
//assessment---2
/* 
let value = 'item1';
const value1 = 'item';
const value1 = 50;
value = 40; */
//console.log(item, item1);


//jug-biyog-vag
//assessment----3
/* var number1 = 300;
var number2 = 17;
var total = (number1 % number2);
console.log(total); */

/* //comparison
//assessment---4
var number1 = 300;
var number2 = 10000;
if (number1 != number2) {
    console.log('true');   
}
else{
    console.log('false');
} */




/* //Odd number
//assessment---7
var oddNumber = 1;
while (oddNumber <= 19) {
    if (oddNumber % 2 != 0) {
        console.log(oddNumber);
    }
    oddNumber++;
} */

 //array
//assessment---8
/* var array = [17, 35, 76, 98, 54, 58, 66, 99];
array[4] =44;
array.push(22);
array.push(23);
array.pop();
console.log(array);  */



 //assessment---9
//for loop by array
/* var array = [ 'nilu', 'milu', 'billu', 'tilu']
for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
    
}  */


 // assessment---10
//largest Array
/* var array = [17, 35, 76, 98, 54, 58, 66, 99];
 var largest= 0;

for (i = 0; i<=largest;i++){
    if (array[i]>largest) {
        var largest=array[i];
    }
}
console.log(largest);  */


//assessment--11
//function
/* function threeNumberMultiplecation(num1, num2, num3) {
    var result = num1 * num2 *num3;
    return result;  
}
var total = threeNumberMultiplecation(5, 57, 83);
console.log(total); */





//assessment--12
//object
/*  var phones = [
    {name : 'nokia', price:5000, storage : '3gb'},
    {name : 'iphone', price:65000, storage : '53gb'},
    {name : 'oppo', price:15000, storage : '13gb'}
];  */








// problem solving assessment-01

// Feet to inch

/* function feetToInch(feet) {
    if (feet<0 ) {
        return "Inch have no - value"
    }
    var inch = feet * 12;
    return inch;
}
var totalInch = feetToInch(-7);
console.log(totalInch); */




//problem-solving  Assessment--02
//centimeter to meter
/* function centimeterToMeter(cm) {
    if (cm < 0 ) {
        return "Enter Your Positive Value";
    }
    var cm = cm / 100;
    return cm;
}
var meter = centimeterToMeter(-6);
console.log(meter); */


//problem-solving  Assessment--03
//Function

/* function paperRequirements(book1, book2, book3) {
    const firstBookPage = 100;
    const secoundBookPage = 200;
    const thirdBookPage = 300;

    const firstBook = book1 * firstBookPage;
    const secoundBook = book2 * secoundBookPage;
    const thirdBook = book3 * thirdBookPage;

    const totalPage = firstBook + secoundBook + thirdBook;
    return totalPage;
}

var result = paperRequirements(1, 9, 1);
console.log(result);  */

/*  var friends = ["shakib","makib", "rakib", "saif", "sha", "shamima"];
function bestFriend(friend) {
    biggestNames = "";
    for (let i = 0; i < friends.length; i++) {
        const element = friends[i];
        if (element.length>biggestNames.length) {
            biggestNames = element;
        }
    
    }
    return biggestNames;
}
var biggestNames = bestFriend(friends);
console.log(biggestNames);  */

 

/* 
function perfectFriend(friends){
        
    let friend = '';

        
    for(let i = 0; i < friends.length; i++){

          
        if(typeof friends[i] == 'number'){
            return 'No number allowed.';
        }
        else if(friends[i].length == 5){
            friend = friends[i];
            break;
        }
        else{
            bestFriend = 'No friend found.'
        }
    }
    return friend;
}
const friendsSet1 = ['akas', 'tapus', 'azizul', 'rony', 'asif', 'fahad', 'akash'];
const friendsNames = perfectFriend(friendsSet1);
console.log(friendsNames); */





/* function deliveryCost(quantity){

    //Assigning Essenial Variables
    const fristPrice = 100 * 100;

    const secoundPrice = fristPrice + (quantity - 100) * 80;

    const thirdPrice = fristPrice + 100 * 80 + (quantity - 200) * 50;

        //Conditions for unwanted input and the functions condition
    if(quantity < 0 ){

        return 'Input cannot be negative number or a string';

    }
    else if(quantity <= 100){

        return quantity * 100;

    }
    else if(quantity > 100 && quantity <= 200){

        return secoundPrice;

    }
    else{

    return thirdPrice;

    }

    }

    var Price = deliveryCost(-1);
    console.log(Price);  */






function deliveryCoast(quantity) {

    const tShirtFristPrice = 100;
    const tShirtSecoundPrice = 80;
    const tShirtThirdPrice = 50;

    if (quantity <= 100) {
        const tShirtPrice = quantity * tShirtFristPrice;
        return tShirtPrice;
    }
    else if (quantity <=200) {
        const frist100Price = 100 * tShirtFristPrice;
        const restPrice = quantity - 100;
        const secound200Price = restPrice * tShirtSecoundPrice;
        const totalSecound200Price = frist100Price + secound200Price;
        return totalSecound200Price;
    }
    else{
        const frist100Price = 100 * tShirtFristPrice;
        const secound200Price = 100 * tShirtSecoundPrice;
        const restPrice = quantity - 200;
        const thirdPrice = restPrice * tShirtThirdPrice;
        const totalPrice = frist100Price + secound200Price + thirdPrice;
        return totalPrice;

    }
    
}

const totalPrice = deliveryCoast(500);
console.log(totalPrice);





//assignment----5
const memoryCost = document.getElementById('memory-cost');
const storageCost = document.getElementById('storage-cost');
const deliveryCost = document.getElementById('delivery-cost');
const totalPrice = document.getElementById('total-price');
const discountPrice = document.getElementById('discount-price');
function updateMemory(id, amount) {
    document.getElementById(id).addEventListener('click', function () {
        if (amount == 0) {
            memoryCost.innerText = 0;
        }
        else if (amount == 180) {
            memoryCost.innerText = 180;
        }
        updateTotal()
    })
}

updateMemory('8gb-memory', 0);
updateMemory('16gb-memory', 180);

function updateStorage(id, amount) {
    document.getElementById(id).addEventListener('click', function () {
        if (amount == 0) {
            storageCost.innerText = 0;
        }
        else if (amount == 100) {
            storageCost.innerText = 100;
        }
        else if (amount == 180) {
            storageCost.innerText = 180;
        }
        updateTotal()
    })
}
updateStorage('storage-first', 0);
updateStorage('storage-second', 100);
updateStorage('storage-third', 180);

function updateDeliverCost(id, amount) {
    document.getElementById(id).addEventListener('click', function () {
        if (amount == 0) {
            deliveryCost.innerText = 0;
        }
        else if (amount == 20) {
            deliveryCost.innerText = 20;
        }
        updateTotal()

    })
}
updateDeliverCost('delivery-first', 0);
updateDeliverCost('delivery-second', 20);

function updateTotal() {
    const bestPrice = document.getElementById('best-price');
    const parseBestPrice = parseFloat(bestPrice.innerText);
    const memoryCostText = document.getElementById('memory-cost').innerText;
    const storageCostText = document.getElementById('storage-cost').innerText;
    const deliveryCostText = document.getElementById('delivery-cost').innerText;
    const parseMemoryCost = parseFloat(memoryCostText);
    const parseStorageCost = parseFloat(storageCostText);
    const parseDeliveryCost = parseFloat(deliveryCostText);
    const grandTotal = parseBestPrice + parseMemoryCost + parseStorageCost + parseDeliveryCost;
    totalPrice.innerText = grandTotal;
    discountPrice.innerText = grandTotal;
    return grandTotal;
}
document.getElementById('p-btn').addEventListener('click', function () {
    const pBtn = document.getElementById('p-btn');
    const disInput = document.getElementById('input').value;
    const inputVale = disInput.value;
    const discountTotal = updateTotal();
    if (inputVale == 'discount') {
        const promoValue = discountTotal / 100 * 25;
        discountPrice.innerText = discountTotal - promoValue;
        pBtn.style.display = 'none';
    }


    disInput.value = "";
})


// document.getElementById('16gb-memory').addEventListener('click', function () {
//     console.log("16gb button Clicked")
//     const memoryCost = document.getElementById('memory-cost');
//     memoryCost.innerText = 180;
// })