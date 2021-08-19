
// function numb(taka){
//     console.log('your nbr', taka);
//     var num2 = 20;
//     var num3 = num2 / taka;
//     console.log(num3);
// }
// var money = 10;
// numb(money);



// function addTwoNumber(number1, number2){
//     console.log(number1, number2);
//     var total = number1 * number2;
//     return total;
// }
// var firstNumber = 30;
// var secoundNumber = 2;
// var result = addTwoNumber(firstNumber, secoundNumber);
// console.log(result);



// var computer = {
//     price : 30000,
//     storage : '26gb',
//     processor : 'intel'
// }
// computer.'storage'= "love";
//  console.log(computer);
// console.log(computer.storage);




// function addNumbers(num1, num2, num3){
//     console.log(num1, num2, num3);

//     var total = num1 + num3 / num2;

//     return total;
// }

// var firstNumber = 50;

// var secoundNumber = 30;

// var thirdNumber = 60;

// var result = addNumbers(firstNumber, thirdNumber, secoundNumber);

// console.log(result);




// var i = 50;
// while (i >= 10) {
//     console.log(i);
//     i--;
    
// }


 


// function inchToFeet(inches){
//     var feet = inches / 12;
//     return feet;
// }
// var myInches = 144;
// var feet = inchToFeet(myInches);
// console.log(feet);

// var dadiInches = 156;
// var feet = inchToFeet(dadiInches);
// console.log(feet);

// var dadaInches = 199;
// var feet = inchToFeet(dadaInches);
// console.log(feet);


// var nanaInches = 168;
// var result = nanaInches / 12;
// console.log(result);




// function evenNumber(number){
//     if(number % 2 == 0){
//         return true;
//     }
//     return false;
// }

// var evenInNumber = 120;
// var result = evenNumber(evenInNumber);
// console.log(result);


/* var  fectorial = 1;
for (var i = 1; i <= 5; i++){
    fectorial = fectorial * i;
    
}
console.log(fectorial); */

// for (let i = 10; i>= 1; i--) {
//     console.log(i);
    
// }
// var celcious = 1;
// var farenhide = (celcious * 9/5) + 32;
// console.log(farenhide);

// var celcious = 1;
// var celcious1 = 5;
// function celciousToFerenheit(celcious){
//     var farenhide = (celcious * 9/5) + 32;
//     return farenhide;
// }
// var farenhide = celciousToFerenheit(celcious);
// var farenhide1 = celciousToFerenheit(celcious1);
// console.log(farenhide);
// console.log(farenhide1);


// var celcious = prompt("Inter your number");

// var farenhide = (celcious * 9/5) + 32;
// // document.write(farenhide);
// document.getElementById("demo") .innerHTML = celcious;
// document.getElementById("demo1") .innerHTML = farenhide;

// // Grading---------
// var mark = 75;
// if (mark >= 80) {
//     console.log("Grade :A");
// }
// else if(mark >= 70){
//     console.log("Grade :A-");
// }


// var a = 80;
// var b = 70;
// var c = 60;
// var total = a+b+c;
// var ave = total/3;
// console.log(total);
// console.log(ave);


// const match = 15.0001;
// const output = Math.random();
// console.log(output);


//swap----
// var first = 10;
// var secound = 40;
// console.log(first, secound);
// var temp = first;
// first = secound;
// secound = temp;
// console.log(first, secound);



////Find max of two values, find max of three values//
/*
var army = 500;
var polish = 800;
var navy = 400;

if (army < polish && army < navy) {
    console.log("army is big");
}
else if (polish < navy && polish < army) {
    console.log("polish is big")
}
else{
    console.log("navy is big")
}*/


/* big number
function number(firstnum, secoundnum, thirdnum){
    if (firstnum > secoundnum && firstnum > thirdnum) {
        return firstnum;
    }
    else if (secoundnum > firstnum && secoundnum > thirdnum) {
        return secoundnum;
    }
    else{
        return thirdnum;
    }
}

var fNum = 400;
var sNum = 699;
var tNum = 700;

var biggerNum = number(fNum, sNum, tNum);
console.log('big num is', biggerNum);*/

//big number
/*
function number(firstnum, secoundnum, thirdnum){
    if (firstnum < secoundnum && firstnum < thirdnum) {
        return firstnum;
    }
    else if (secoundnum < firstnum && secoundnum < thirdnum) {
        return secoundnum;
    }
    else{
        return thirdnum;
    }
}

var fNum = 400;
var sNum = 699;
var tNum = 700;

var biggerNum = number(fNum, sNum, tNum);
console.log('big num is', biggerNum);*/




//Array sum
/*
var numbers = [20, 43, 69, 70, 64];

let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    const element = numbers[i];
    sum = sum + element;
    var total = sum + element;
    console.log(i);
    
}*/
//function array sum
/*
var numbers = [20, 43, 69, 70, 64];
function totalNumbers(numbers){
    var sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        sum = sum + element;
        
    }
    return sum;
}
var total = totalNumbers(numbers);
console.log(total);*/



/* function fibonacciSeries(numbers){
    if (typeof numbers != 'number') {
        return "Plese give a number";
      }
      if (numbers < 2) {
          return "Enter your positive number";
      }
    const fibo = [0,1];
    for (let i = 2; i <= numbers; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];
        
    }
    return fibo;
}
var total = fibonacciSeries(6);
console.log(total); */


// var total = 13.67;
// var re = Math.floor(total);
// console.log(re);
// const number = -78;
//  const answer = Math.abs(number);
//   console.log(answer);

/* function factorial(numbers){
    var fibo = [0,1];
    for (let i = 0; i < numbers.length; i++) {
        fibo[i] = fibo[i-1] + fibo[i-2];

         }
         return fibo;
}
*/

//recursive factirial
/*
function factorialize(num) {
    if (num == 1) {
        return 1;
    }
    return num * factorialize(num -1);
  }
  var man = factorialize(7);
console.log(man);*/



// add Multiple
/* function totalNumbres(firstNumber, secoundNumber, thirdNumber) {

    const fristTotalNumber = 3;
    const secoundTotalNumber = 10;
    const thirdTotalNumber = 50;

    const firstResult = firstNumber * fristTotalNumber;
    const secoundResult = secoundNumber * secoundTotalNumber;
    const thirdResult = thirdNumber * thirdTotalNumber;


    const totalResult = firstResult + secoundResult + thirdResult;
    return totalResult; 
    
}

var total = totalNumbres(1, 2, 1);
console.log(total); */




/* // module--21-6
// divisible-by
for (let i = 1; i <= 50; i++) {

    if (i % 3 == 0 && i % 5 == 0) {
        console.log('foobar');
    }
    else if(i % 3 == 0){
        console.log('foo');
    }
    else if(i % 5 == 0){
        console.log('bar');
    }
    else{
        console.log(i);
    }
    
} */
//odd/Even number
/* function oddNumber() {

    for (let i = 1; i <= 50; i++) {
        if (i % 2 != 0) {
            console.log(i)
        }  
    }
    
}
 oddNumber(); */



// module 21---7

// var phones =[
//     {name : "Walton", price : '15000', storage : '8gb'},
//     {name : "Nokia", price : '5000', storage : '2gb'},
//     {name : "Oppo", price : '20000', storage : '16gb'},
//     {name : "Vivo", price : '16000', storage : '18gb'},
// ]


/* var array = [244, 4,866, 788,53];
var result = Math.max(...array);
console.log(result); */


/* var arr = [65, 76,87,95];
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
} */
/* //  let factorial = 1;
function factorial(i) {
    if (i == 1) {
        return 1;
    }
    return i * factorial(i-1);
}
console.log(factorial(11)); */

/* var fibo = [0, 1];
for (let i = 2; i <= 6; i++) {
    fibo[i] = fibo[i - 1] + fibo[i-2];
    
}
console.log(fibo); */



//recurtion fibonacchi
/* function fibo(i) {
    if (i == 0) {
        return 0;
    }
    if (i == 1) {
        return 1;
        
    }
    return fibo(i-1) + fibo(i-2);
    
}
console.log(fibo(6)); */


/* 
 //namota
 var n = 20;
for (let i = 0; i <= 20; i++) {
    var result = n + ' X ' + i + ' = ' +  i * n;
  console.log(result);  
}  */
/*  //namota er function
function namota(n) {
    for (let i = 1; i <= 10; i++) {
        var result = n + ' X ' + i + ' = ' +  i * n;
        console.log(result);
    }
}
 namota(6); */
