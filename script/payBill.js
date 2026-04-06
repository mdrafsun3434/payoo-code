document.getElementById("pay-bill-btn").addEventListener("click", function() {
    console.log("Pay Bill button clicked");
    // 1-bank account get
    const payBillAccount =getValueFromInput("pay-bill-bank");
    console.log(payBillAccount);
    if(payBillAccount === "Select to Pay"){
        alert("please select a bank");
        return;
    }
    // 2-get the account number
    const billNumber = getValueFromInput("pay-bill-number");
    if(billNumber.length !==11){
        alert("Invalid account number");
        return;
    }
    // 3-get the amount
    const amount =document.getElementById("pay-bill-amount");
    const amountValue = Number(amount.value);
    
    if(amountValue <= 0){
        alert("Invalid amount");
        return;
    }

      const pin = document.getElementById("pay-bill-pin").value;
     if(pin !=="1234"){
        alert("Invalid pin");
        return;
     }
        // console.log("New balance after cash in:",newBalance);
    
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    const newBalance = Number(balance) - Number(amountValue);
    balanceElement.innerText = newBalance;
        alert(`Pay Bill successful
       ${payBillAccount}
      ${new Date().toLocaleString()}
     New Balance: ${newBalance}`);
     
    //  1-history-container ke dhore niye asbo
     const history =document.getElementById("history-container");
    //  2- new div create korbo
    const newHistory =document.createElement("div");
    // 3- new div er class add korbo
    newHistory.innerHTML=`
     <div class="transaction-card p-5 bg-base-100">
     Pay Bill successful from ${payBillAccount},acc-no: ${billNumber} on ${new Date()}        
    </div>
    `
    history.append(newHistory);
});
    
    // console.log(newBalance);

    


  
    
