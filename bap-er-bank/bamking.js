document.getElementById('deposit-btn').addEventListener('click', function(){
    //get the Amount deposit
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    //update deposite total
    const depositTotal = document.getElementById('deposit-total');
    const previousDepositAmountText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositAmountText);

    const newDepositTotal = previousDepositAmount + newDepositAmount;

    depositTotal.innerText = newDepositTotal;

    //clean the input
    depositInput.value = '';

    //update balance total
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceTotalAmountText = balanceTotal.innerText;
    const previousBalanceAmount = parseFloat(previousBalanceTotalAmountText);

    const newBalanceTotal = previousBalanceAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

})

//withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
        //get the Amount withdraw
        const withdrawInput = document.getElementById('withdraw-input');
        const previousWithdrawAmountText = withdrawInput.value;
        const previousWithdrawAmount = parseFloat(previousWithdrawAmountText);
    
        const withdrawTotal = document.getElementById('withdraw-total');
        const newWithdrawAmountText = withdrawTotal.innerText;
        const newWithdrawAmount = parseFloat(newWithdrawAmountText);

        const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;

        withdrawTotal.innerText = newWithdrawTotal;
    

        //update withdraw
        const withdrawBalanceTotal = document.getElementById('balance-total');
        const withdrawAftertext = withdrawBalanceTotal.innerText;
        const withdrawAfterAmount = parseFloat(withdrawAftertext);

        const withdrawAfterNewBalance = withdrawAfterAmount - previousWithdrawAmount;

        withdrawBalanceTotal.innerText = withdrawAfterNewBalance;


        //clean the input
        withdrawInput.value = '';
})



