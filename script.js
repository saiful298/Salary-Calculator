function callFunction(data) {
    const incomePut = document.getElementById('income-put').value;
    const foodPut = document.getElementById('food-put').value;
    const rentPut = document.getElementById('rent-put').value;
    const clothPut = document.getElementById('clothes-put').value;
    // if (incomePut != "")
    const totalPrice = parseFloat(foodPut) + parseFloat(rentPut) + parseFloat(clothPut);
    const balancePrice = incomePut - totalPrice;
    document.getElementById('total-exp').innerText = totalPrice;
    document.getElementById('balance').innerText = balancePrice;
    document.getElementById('balanceInput').setAttribute("value", balancePrice);
    // Validation
    if (incomePut < 0 || foodPut < 0 || rentPut < 0 || clothPut < 0) {
        alert('stop here')
    }

};

function saving() {
    const saving = document.getElementById('put-saving-parsnt').value;
    const balancePrice = parseFloat(document.getElementById('income-put').value);
    const balance = parseFloat(document.getElementById('balanceInput').value);

    var totalSave = percentage(balancePrice, saving);
    var remaining = parseFloat(balance - totalSave);
    document.getElementById('saving-amount').innerText = totalSave;
    document.getElementById('remaining-balance').innerText = remaining;


}
