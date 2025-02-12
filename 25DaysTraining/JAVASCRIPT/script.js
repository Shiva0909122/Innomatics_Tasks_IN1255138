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



// Day10.html
// function updateTime() {
//     // Get the current time in different time zones
//     const options = { timeZone: 'Asia/Kolkata', hour: '2-digit', minute: '2-digit', second: '2-digit' };
//     document.getElementById('indianTime').innerText = new Date().toLocaleTimeString('en-US', options);

//     options.timeZone = 'Asia/Tokyo';
//     document.getElementById('japanTime').innerText = new Date().toLocaleTimeString('en-US', options);

//     options.timeZone = 'Europe/Paris';
//     document.getElementById('parisTime').innerText = new Date().toLocaleTimeString('en-US', options);

//     options.timeZone = 'America/New_York';
//     document.getElementById('usaTime').innerText = new Date().toLocaleTimeString('en-US', options);

//     options.timeZone = 'Europe/London';
//     document.getElementById('londonTime').innerText = new Date().toLocaleTimeString('en-US', options);
// }

// // Update time every second
// setInterval(updateTime, 1000);

// // Call function immediately when the script loads
// updateTime();

function updateTime() {
    const timeZones = {
        'indianTime': 'Asia/Kolkata',
        'japanTime': 'Asia/Tokyo',
        'parisTime': 'Europe/Paris',
        'usaTime': 'America/New_York',
        'londonTime': 'Europe/London',
        'germanyTime': 'Europe/Berlin',
        'russiaTime': 'Europe/Moscow',
        'australiaTime': 'Australia/Sydney',
        'chinaTime': 'Asia/Shanghai',
        'brazilTime': 'America/Sao_Paulo',
        'southAfricaTime': 'Africa/Johannesburg',
        'canadaTime': 'America/Toronto',
        'uaeTime': 'Asia/Dubai',
        'southKoreaTime': 'Asia/Seoul',
        'mexicoTime': 'America/Mexico_City',
        'argentinaTime': 'America/Argentina/Buenos_Aires',
        'italyTime': 'Europe/Rome',
        'turkeyTime': 'Europe/Istanbul',
        'indonesiaTime': 'Asia/Jakarta',
        'thailandTime': 'Asia/Bangkok'
    };

    for (const [elementId, timeZone] of Object.entries(timeZones)) {
        const now = new Date().toLocaleString('en-US', {
            timeZone: timeZone,
            weekday: 'short',
            year: 'numeric',
            month: 'short',
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit',
            hourCycle: 'h24',
            hour12: true
        });
        document.getElementById(elementId).innerText = now;
    }
}

// Update every second
setInterval(updateTime, 1000);
updateTime();

