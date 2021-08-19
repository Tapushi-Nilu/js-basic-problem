function updatesCaseNumber(isIncreasing) {
    const inputNumber = document.getElementById('input-number');
    let caseInput = inputNumber.value;
    if(isIncreasing == true){
        caseInput = parseInt(caseInput) + 1;
    }
    else if (caseInput > 0) {
        caseInput = parseInt(caseInput) - 1; 
    }
    inputNumber.value = caseInput;
    //update
    const totalNumber =  document.getElementById('total-number');
    totalNumber.innerText =caseInput * 59;

    
}
document.getElementById('case-plus').addEventListener('click', function(){
    updatesCaseNumber(true);
})
document.getElementById('case-minus').addEventListener('click', function(){
    updatesCaseNumber(false);
})