// console.log('Hello world')
document.getElementById('login-btn').addEventListener('click',function(){
    // console.log('Login button clicked')
//    1-get the mobile number input
    const inputNumber = document.getElementById('input-number');
    const contactNumber = inputNumber.value;
    console.log(contactNumber);

    //    2-get the pin input
    const inputPin = document.getElementById('input-pin');
    const pin = inputPin.value;
    console.log(pin);
    
//    3-match pin & mobile number with the database
if(contactNumber =='01760259140' && pin == '1234'){
    alert ('login successful');

    window.location.assign('home.html');

}
else{
    alert('login failed');
    return;
}

})