let membership = 'regular';

function setMembership(level) {
    membership = level;
    document.getElementById('gold').classList.remove('selected');
    document.getElementById('silver').classList.remove('selected');
    document.getElementById('regular').classList.remove('selected');
    document.getElementById(level).classList.add('selected');
    alert(`Membership set to ${level.toUpperCase()}!`);
}
function calculateTotal() {
    const basePrices = { "Espresso": 8, "Latte": 14, "Mocha": 25 };
    const sizeMultiplier = { "small": 1, "medium": 1.5, "large": 2 };

    let coffeeType = document.getElementById("coffeeType").value;
    let coffeeSize = document.getElementById("coffeeSize").value;
    let quantity = parseInt(document.getElementById("quantity").value);

    let basePrice = basePrices[coffeeType] * sizeMultiplier[coffeeSize];

    let addonsPrice = 0;
    if (document.getElementById("cream").checked) addonsPrice += 1.5;
    if (document.getElementById("shot").checked) addonsPrice += 2;
    if (document.getElementById("syrup").checked) addonsPrice += 2.75;

    let subtotal = (basePrice + addonsPrice) * quantity;
    document.getElementById("totalPrice").textContent = subtotal.toFixed(2);
}

// function generateBill() {

function generateBill() {
    const userName = document.getElementById('userName').value || "Guest";
    const coffeeType = document.getElementById('coffeeType').value;
    const coffeeSize = document.getElementById('coffeeSize').value;
    const quantity = parseInt(document.getElementById('quantity').value);
    const promoCode = document.getElementById('promoCode').value.toUpperCase(); // Case-insensitive

    let addons = [];
    if (document.getElementById('cream').checked) addons.push('Whipped Cream');
    if (document.getElementById('shot').checked) addons.push('Extra Shot');
    if (document.getElementById('syrup').checked) addons.push('Syrup');

    calculateTotal();
    let subtotal = parseFloat(document.getElementById('totalPrice').textContent);

    // Apply Promo Code Discount Only if Quantity is 5 or More
    let discount = 0;
    if (quantity >= 5) {  
        if (promoCode === "SAVE10") {
            discount = subtotal * 0.10; // 10% off
        } else if (promoCode === "BREWHUB15") {
            discount = subtotal * 0.15; // 15% off
        } else if (promoCode === "COFFEE5") {
            discount = subtotal * 0.05; // 5% off
        } else if (promoCode === "FESTIVE20") {
            discount = subtotal * 0.20; // 20% off
        }
    } else {
        alert("Promo codes are only valid for orders of 5 or more coffees!");
    }

    subtotal -= discount; // Apply discount
    const gst = subtotal * 0.5; // 5% GST
    const total = subtotal + gst;

    // Update Bill Summary
    document.getElementById('billUserName').textContent = userName;
    document.getElementById('billMembership').textContent = membership.toUpperCase();
    document.getElementById('billCoffee').textContent = coffeeType;
    document.getElementById('billSize').textContent = coffeeSize;
    document.getElementById('billQuantity').textContent = quantity;
    document.getElementById('billAddons').textContent = addons.length ? addons.join(', ') : 'None';
    document.getElementById('billSubtotal').textContent = subtotal.toFixed(2);
    document.getElementById('billGST').textContent = gst.toFixed(2);
    document.getElementById('billTotal').textContent = total.toFixed(2);

    document.getElementById('billSection').style.display = 'block';
}


function printInvoice() {
    const billSection = document.getElementById('billSection').innerHTML;
    const originalContent = document.body.innerHTML;

    document.body.innerHTML = billSection;
    window.print();
    document.body.innerHTML = originalContent;
    location.reload(); // Refresh the page to restore original content
}
