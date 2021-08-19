document.getElementById('submit-btn').addEventListener('click', function(){
    const emailFeild = document.getElementById('user-email');
    const userEmail = emailFeild.value;

    //get user password
    const passwordFeild = document.getElementById('user-password');
    const userPassword = passwordFeild.value;

    if(userEmail == 'abc@gmail.com' && userPassword == 'abc'){
        window.location.href = 'banking.html';
    }
})

const product = 5;
 const price = '7'; 
 const subTotal = product * price; 
 const tax = subTotal/10;
  const total = subTotal + tax;
  console.log(total)