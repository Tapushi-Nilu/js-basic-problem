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

