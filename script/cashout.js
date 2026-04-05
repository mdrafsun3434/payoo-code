document.getElementById("cashout-btn").addEventListener("click",function(){
    //1- get the agent number --
    const cashoutNumberInput = document.getElementById("cashout-number");
    const cashoutNumber = cashoutNumberInput.value;
    console.log(cashoutNumber);
    if(cashoutNumber.length != 11){
        alert("Invalid agent number");
        return;
    } 


    //2- get the cashout amount --
    const cashoutAmountInput = document.getElementById("cashout-amount");
    const cashoutAmount = cashoutAmountInput.value;
    console.log(cashoutAmount);



    //3- get the current balance 
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    console.log(balance);

    // 4-Calculate the new balance after cashout
    const newBalance = Number(balance)-Number(cashoutAmount);
   

    if(newBalance < 0){
        alert("Insufficient balance for this cashout.");
        return;
    }
    
    // 5-Get the pin and verify it
    const cashoutPinInput = document.getElementById("cashout-pin");
    const Pin = cashoutPinInput.value;
    if(Pin ==="1234"){
        alert("Cashout successful");
        balanceElement.innerText = newBalance;
        console.log("New balance after cashout:",newBalance);

            //  1-history-container ke dhore niye asbo
     const history =document.getElementById("history-container");
    //  2- new div create korbo
    const newHistory =document.createElement("div");
    // 3- new div er class add korbo
    newHistory.innerHTML=`
     <div class="transaction-card p-5 bg-base-100">
     Cash out ${cashoutAmount} successful from ${cashoutNumber}, on ${new Date()}        
    </div>
    `
    history.append(newHistory);
    }

        
         


    
    else{
        alert("Invalid cashout pin.");
        return;
    }
});