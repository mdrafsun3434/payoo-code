console.log("send money script loaded");

document.getElementById("send-money-btn").addEventListener("click", function() {
    console.log("send money button clicked");

    // 1-get recipient number
    const recipientNumber = document.getElementById("send-money-number").value;

    if (recipientNumber.length !== 11) {
        alert("Invalid recipient number");
        return;
    }

    // 2-get amount
    const amount = document.getElementById("send-money-amount").value;

    if (amount <= 0) {
        alert("Invalid amount");
        return;
    }

    // 3-get balance
    const balanceElement = document.getElementById("balance");
    const balance = Number(balanceElement.innerText);

    // 4-calculate new balance
    const newBalance = balance - Number(amount);

    if (newBalance < 0) {
        alert("Insufficient balance for this transaction.");
        return;
    }

    // 5-pin check
    const pin = document.getElementById("send-money-pin").value;

    if (pin === "1234") {
        alert("Money sent successfully");

        balanceElement.innerText = newBalance;

        // history add
        const history = document.getElementById("history-container");

        const newHistory = document.createElement("div");
        newHistory.innerHTML = `
            <div class="transaction-card p-5 bg-base-100">
                Send Money ${amount} successful from ${recipientNumber}, on ${new Date()}
            </div>
        `;

        history.append(newHistory);

    } else {
        alert("Invalid pin.");
    }
});