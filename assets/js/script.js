
// logon button event handler
const loginBtn = document.getElementById("login");
loginBtn.addEventListener("click", function() {
    const loginArea = document.getElementById("login_area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction_area");
    transactionArea.style.display = "block";
})

// diposit button event handler
const depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click", function() {
    const dipositNumber = getInputNumber("depositAmount");


    updateSpanText("currentDeposit", depositNumber)
    updateSpanText("currentBalance", depositNumber);
    
    document.getElementById("depositAmount").value = "";
})

// withdraw button event handler
const withdrawBtn = document.getElementById("addWithdraw");
withdrawBtn.addEventListener("click", function() {
    const withdrawNumber = getInputNumber("withdrawAmount");
    console.log(withdrawNumber);
})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateSpanText(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber + depositNumber;
    document.getElementById(id).innerText = total;
}