document.getElementById("add-money-btn").addEventListener("click", function() {
    console.log("Add Money button clicked");
    // 1-bank account get
    const bankAccount =getValueFromInput("add-money-bank");
    console.log(bankAccount);
    if(bankAccount === "Select a Bank"){
        alert("please select a bank");
        return;
    }
    // 2-get the account number
    const accno = getValueFromInput("add-money-number");
    if(accno.length !==11){
        alert("Invalid account number");
        return;
    }
    // 3-get the amount
    const amount =document.getElementById("add-money-amount");
    const amountValue = amount.value;
    if(amountValue <= 0){
        alert("Invalid amount");
        return;
    }

    const pin = getValueFromInput("add-money-pin");
     if(pin !=="1234"){
        alert("Invalid pin");
        return;
     }
        // console.log("New balance after cash in:",newBalance);
    
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    const newBalance = Number(balance) + Number(amountValue);
    balanceElement.innerText = newBalance;
        alert(`Cash in successful
       ${bankAccount}
      ${new Date().toLocaleString()}
     New Balance: ${newBalance}`);
});
    
    // console.log(newBalance);

    


  
    
