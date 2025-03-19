// Toggle hospital input visibility based on role selection
function toggleHospitalInput() {
    let role = document.getElementById("signup-role").value;
    let hospitalInput = document.getElementById("hospital");
    hospitalInput.style.display = (role === "doctor" || role === "admin") ? "block" : "none";
}

// Signup function
function signup() {
    let username = document.getElementById("signup-username").value;
    let mobile = document.getElementById("signup-mobile").value;
    let email = document.getElementById("signup-email").value;
    let role = document.getElementById("signup-role").value;
    let password = document.getElementById("signup-password").value;
    let hospital = document.getElementById("hospital").value;

    let users = JSON.parse(localStorage.getItem("users")) || [];

    // Check if email is already in use
    if (users.some(user => user.email === email)) {
        alert("Email already exists!");
        return;
    }

    let newUser = { username, mobile, email, role, password, hospital: role !== "patient" ? hospital : "" };

    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users));

    alert("Signup successful! Redirecting to login...");
    window.location.href = "login.html";
}

// Login function
function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;
    
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users.find(user => user.email === email && user.password === password);
    
    if (user) {
        alert("Login successful!");
        localStorage.setItem("currentUser", JSON.stringify(user));

        // Redirect based on role
        if (user.role === "doctor") {
            window.location.href = "../Dashboards/doctor_dashboard.html"; // Adjusted path
        } else if (user.role === "admin") {
            window.location.href = "../Dashboards/admin_dashboard.html"; // Adjusted path
        }else if (user.role === "patient") {
            window.location.href = "../Dashboards/patient_dashboard.html"; // Adjusted path
        } 
        else {
            window.location.href = "../Pages/index1.html"; // Adjusted path
        }
    } else {
        alert("Invalid credentials!");
    }
}

