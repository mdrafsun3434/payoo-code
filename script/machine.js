function getValueFromInput(id){
    const input = document.getElementById(id);
    const value = input.value;
    
    return value;
}

// machine id> hide all>show id
function showOnly(id){
    const addmoney = document.getElementById("add-money");
    // console.log("add money clicked")
     const cashout = document.getElementById("cashout");
    // sobai ke hidden kore dao-
    addmoney.classList.add("hidden");
    cashout.classList.add("hidden");

    // jeta id asbe seta ke show kore dao
    const element = document.getElementById(id);
    element.classList.remove('hidden');

  
   

}

