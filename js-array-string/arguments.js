//arguments
function numbers(num1, num2) {
    let sum = 0
    for (const num of arguments){
        sum = sum + num;
    }
    // const result = num1 + num2;
    return sum;
    
}
const sum = numbers(10, 20, 40, 10, 50, 100, 200);
// console.log(sum);



