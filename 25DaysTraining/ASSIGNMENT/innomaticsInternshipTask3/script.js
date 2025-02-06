// Main index file
function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(data => {
            document.getElementById("content").innerHTML = data;
        })
        .catch(error => {
            document.getElementById("content").innerHTML = "<p>⚠️ Error loading the page.</p>";
        });
}


// 1. ATM Withdrawal System
let balance = 5000; // Sample balance
let pin = 1234; // Sample PIN

function atmWithdrawal(balance, amount, pin, enteredPin) {
    if (enteredPin !== pin) {
        return "Incorrect PIN";
    }
    if (amount > balance) {
        return "Insufficient Funds";
    }
    if (amount % 100 !== 0) {
        return "Enter amount in multiples of 100";
    }
    balance -= amount;
    return `Withdrawal Successful! New Balance: ₹${balance}`;
}

function withdrawMoney() {
    let enteredPin = parseInt(document.getElementById("pin").value);
    let amount = parseInt(document.getElementById("amount").value);
    let message = atmWithdrawal(balance, amount, pin, enteredPin);
    document.getElementById("message").innerText = message;
}

function addFunds() {
    let enteredAmount = parseInt(document.getElementById("amount").value);
    if (enteredAmount > 0) {
        balance += enteredAmount;
        document.getElementById("message").innerText = `Funds Added! New Balance: ₹${balance}`;
    } else {
        document.getElementById("message").innerText = "Enter a valid amount to add funds";
    }
}

function changePin() {
    let enteredPin = parseInt(prompt("Enter current PIN:"));
    if (enteredPin === pin) {
        let newPin = parseInt(prompt("Enter new PIN:"));
        pin = newPin;
        document.getElementById("message").innerText = "PIN changed successfully!";
    } else {
        document.getElementById("message").innerText = "Incorrect current PIN!";
    }
}

//2. Online Shopping Discount & Free Shipping




function calculateFinalAmount(orderAmount) {
    let discount = 0;
    let shipping = 0;

    // Apply discount
    if (orderAmount > 1000) {
        discount = 0.2 * orderAmount;
    } else if (orderAmount >= 500) {
        discount = 0.1 * orderAmount;
    }

    let discountedAmount = orderAmount - discount;

    // Apply shipping charges
    if (discountedAmount < 50) {
        shipping = 10;
    }

    return discountedAmount + shipping;
}

function startTimer() {
    let timeLeft = 3;
    document.getElementById("timer").innerText = "Calculating in " + timeLeft + " seconds...";

    let timerInterval = setInterval(function () {
        timeLeft--;
        if (timeLeft > 0) {
            document.getElementById("timer").innerText = "Calculating in " + timeLeft + " seconds...";
        } else {
            clearInterval(timerInterval);
            document.getElementById("timer").innerText = "";
            calculateAndDisplay();
        }
    }, 1000);
}

function calculateAndDisplay() {
    let orderAmount = parseFloat(document.getElementById("orderAmount").value);
    if (isNaN(orderAmount) || orderAmount < 0) {
        document.getElementById("result").innerText = "Please enter a valid order amount.";
        return;
    }
    let finalAmount = calculateFinalAmount(orderAmount);
    document.getElementById("result").innerText = "Final Payable Amount: $" + finalAmount.toFixed(2);
}
// 3. Student Grading System with Extra Credit

function calculateGrade() {
    let marks = parseFloat(document.getElementById('marks').value);
    let attendance = parseFloat(document.getElementById('attendance').value);

    if (attendance > 90) {
        marks += 5;
    }

    let grade;
    if (marks >= 90) {
        grade = "A";
    } else if (marks >= 80) {
        grade = "B";
    } else if (marks >= 70) {
        grade = "C";
    } else if (marks >= 60) {
        grade = "D";
    } else {
        grade = "F";
    }

    document.getElementById('result').innerText = "Final Grade: " + grade;
}


//4. Smart Traffic Light System



function trafficLightControl(density) {
    if (density === "Heavy") return 60; // 60 seconds
    if (density === "Moderate") return 40; // 40 seconds
    if (density === "Light") return 20; // 20 seconds
    return 0;
}

function startTrafficLight() {
    const density = document.getElementById("traffic-density").value;
    let greenTime = trafficLightControl(density);
    let countdown = greenTime;

    document.getElementById("red").style.background = "grey";
    document.getElementById("green").style.background = "green";

    let timerInterval = setInterval(() => {
        document.getElementById("timer").innerText = `Timer: ${countdown}s`;
        countdown--;
        if (countdown < 0) clearInterval(timerInterval);
    }, 1000);

    setTimeout(() => {
        document.getElementById("green").style.background = "grey";
        document.getElementById("yellow").style.background = "yellow";
        document.getElementById("timer").innerText = "Timer: 3s";

        setTimeout(() => {
            document.getElementById("yellow").style.background = "grey";
            document.getElementById("red").style.background = "red";
            document.getElementById("timer").innerText = "Timer: 0s";
        }, 3000);
    }, greenTime * 1000);
}


// 5. Movie Ticket Pricing with Time and Age Discount

function calculateTicketPrice(age, showTime) {
    let basePrice = 12;
    if (showTime < 17) { // Matinee discount
        basePrice *= 0.8;
    }
    if (age > 60) { // Senior citizen discount
        basePrice *= 0.7;
    } else if (age < 12) { // Children discount
        basePrice *= 0.6;
    }
    return basePrice.toFixed(2);
}

function getTicketPrice() {
    let age = document.getElementById('age').value;
    let showTime = document.getElementById('showTime').value;
    let resultElement = document.getElementById('result');

    if (age === "" || showTime === "") {
        resultElement.innerText = "Please enter valid inputs.";
        resultElement.style.color = "red";
        return;
    }

    age = parseInt(age);
    showTime = parseInt(showTime);
    let price = calculateTicketPrice(age, showTime);

    resultElement.innerText = "Final Ticket Price: $" + price;
    resultElement.style.color = "green";
}

// 6. Job Application Filter


function isEligibleForJob(age, experience, qualification) {
    return age >= 21 && age <= 55 && experience >= 2 && qualification === "Bachelor's Degree";
}

function checkEligibility() {
    let age = parseInt(document.getElementById("age").value);
    let experience = parseInt(document.getElementById("experience").value);
    let qualification = document.getElementById("qualification").value;
    let skills = document.getElementById("skills").value.split(',').map(skill => skill.trim());

    let resultElement = document.getElementById("result");

    if (isEligibleForJob(age, experience, qualification)) {
        resultElement.innerHTML = `✅ Eligible for the job! <br> Skills: ${skills.join(", ")}`;
        resultElement.style.color = "green";
    } else {
        resultElement.innerHTML = "❌ Not eligible for the job.";
        resultElement.style.color = "red";
    }
}


// 7. E-commerce Coupon Redemption


function applyCoupon() {
    let orderAmount = parseFloat(document.getElementById("orderAmount").value);
    let couponCode = document.getElementById("couponCode").value.trim().toUpperCase();
    let finalPrice = orderAmount;
    let message = document.getElementById("message");

    // Reset previous messages
    message.innerText = "";
    document.getElementById("finalPrice").innerText = "";

    if (isNaN(orderAmount) || orderAmount <= 0) {
        message.innerText = "Please enter a valid order amount.";
        return;
    }

    if (couponCode === "DISCOUNT10" && orderAmount > 500) {
        finalPrice = orderAmount * 0.9; // 10% discount
        message.style.color = "green";
        message.innerText = "10% discount applied!";
    } else if (couponCode === "FREESHIP" && orderAmount > 200) {
        finalPrice = orderAmount; // Free shipping, no discount
        message.style.color = "green";
        message.innerText = "Free shipping applied!";
    } else if (couponCode) {
        message.innerText = "Invalid or inapplicable coupon code.";
        return;
    }

    document.getElementById("finalPrice").innerText = `Final Price: $${finalPrice.toFixed(2)}`;
}

// 8. Fitness Membership Plan


function choosePlan() {
    let selectedPlan = document.getElementById("planType").value;
    let wantsTrainer = document.getElementById("wantsTrainer").checked;
    let wantsDietPlan = document.getElementById("wantsDietPlan").checked;
    let suggestedPlan = "";
    let planMessage = document.getElementById("planMessage");
    let resultCard = document.getElementById("suggestedPlan");
    let button = document.getElementById("planBtn");

    // Reset UI
    resultCard.classList.remove("hidden");
    button.style.backgroundColor = "#28a745"; // Green feedback

    if (wantsTrainer && wantsDietPlan) {
        suggestedPlan = "🎖 VIP Plan ($80/month) - Gym + Personal Trainer + Diet Plan";
    } else if (wantsTrainer) {
        suggestedPlan = "🏆 Premium Plan ($50/month) - Gym + Personal Trainer";
    } else if (selectedPlan === "Basic") {
        suggestedPlan = "💪 Basic Plan ($20/month) - Gym Only";
    } else {
        suggestedPlan = "⚠️ Please select a valid plan.";
    }

    planMessage.innerText = suggestedPlan;

    // Reset button color after 1 second
    setTimeout(() => {
        button.style.backgroundColor = "#0072ff";
    }, 1000);
}


// 9. Electricity Bill Calculation with Peak Hours


function calculateBill() {
    let units = parseInt(document.getElementById("units").value);
    let timeOfDay = document.getElementById("timeOfDay").value;
    let billAmount = 0;
    let rate = 0;

    if (units <= 0 || isNaN(units)) {
        alert("Please enter a valid unit amount.");
        return;
    }

    // Determine base rate based on unit consumption
    if (units <= 100) {
        rate = 5;
    } else if (units <= 300) {
        rate = 4;
    } else {
        rate = 3;
    }

    // Calculate base bill
    billAmount = units * rate;

    // Apply peak hour surcharge if applicable
    if (timeOfDay === "peak") {
        billAmount *= 1.10; // Extra 10%
    }

    // Display the result
    document.getElementById("billResult").classList.remove("hidden");
    document.getElementById("billAmount").innerText = `Total Bill: $${billAmount.toFixed(2)}`;
}


// 10. Flight Ticket Booking System

function calculateFlightFare() {
    let classType = document.getElementById("classType").value;
    let luggageWeight = parseInt(document.getElementById("luggageWeight").value) || 0;
    let isStudent = document.getElementById("isStudent").checked;
    let isSenior = document.getElementById("isSenior").checked;
    let baseFare = 300;
    let finalFare = baseFare;

    // Apply Class-based Pricing
    if (classType === "business") {
        finalFare += 200;
    } else if (classType === "first") {
        finalFare += 500;
    }

    // Apply Luggage Charges (Above 20kg: $50 per extra 10kg)
    if (luggageWeight > 20) {
        let extraKg = luggageWeight - 20;
        finalFare += Math.ceil(extraKg / 10) * 50;
    }

    // Apply Discounts
    if (isStudent) {
        finalFare *= 0.85; // 15% off
    } else if (isSenior) {
        finalFare *= 0.90; // 10% off
    }

    // Display the result
    document.getElementById("fareResult").classList.remove("hidden");
    document.getElementById("fareAmount").innerText = `Total Fare: $${finalFare.toFixed(2)}`;
}
