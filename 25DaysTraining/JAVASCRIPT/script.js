// day6
function showAlerts() {
    // Alert Box
    alert("Welcome to our interactive JavaScript demo!");

    // Confirm Box
    let userConfirmation = confirm("Do you want to proceed?");
    if (!userConfirmation) {
        alert("You chose to cancel!");
        return;
    }

    // Prompt Box
    let userName = prompt("What is your name?");
    if (userName) {
        alert("Hello, " + userName + "! Nice to meet you.");
    } else {
        alert("You didn't enter a name.");
    }
}
//  day 7

// Function to calculate the area of a rectangle and display it in the HTML
function displayArea() {
    let length = document.getElementById("length").value;
    let width = document.getElementById("width").value;

    if (length === "" || width === "" || length <= 0 || width <= 0) {
        document.getElementById("areaResult").innerText = "Please enter valid positive values!";
        return;
    }

    let area = length * width;
    document.getElementById("areaResult").innerText = "Area: " + area + " sq units";
}

// Function to check if a number is even or odd and display it in the HTML
function displayEvenOdd() {
    let number = document.getElementById("number").value;

    if (number === "") {
        document.getElementById("evenOddResult").innerText = "Please enter a valid number!";
        return;
    }

    if (number % 2 === 0) {
        document.getElementById("evenOddResult").innerText = number + " is Even";
    } else {
        document.getElementById("evenOddResult").innerText = number + " is Odd";
    }
}