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
     
    //  1-history-container ke dhore niye asbo
     const history =document.getElementById("history-container");
    //  2- new div create korbo
    const newHistory =document.createElement("div");
    // 3- new div er class add korbo
    newHistory.innerHTML=`
     <div class="transaction-card p-5 bg-base-100">
     Cash in successful from ${bankAccount},acc-no: ${accno} on ${new Date()}        
    </div>
    `
    history.append(newHistory);
});
    
    // console.log(newBalance);

    


  
    
