document.addEventListener("DOMContentLoaded", function () {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.role === "admin") {
        document.getElementById("admin-name").innerText = currentUser.username;
    } else {
        alert("Unauthorized access! Redirecting to login...");
        window.location.href = "../Pages/login.html";
    }

    // Fetch stored users and appointments
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
    let medicalRecords = JSON.parse(localStorage.getItem("medicalRecords")) || [];

    // Display statistics
    document.getElementById("users-count").textContent = users.length;
    document.getElementById("appointments-count").textContent = appointments.length;
    document.getElementById("records-count").textContent = medicalRecords.length;

    // Display user list (Doctors and Patients)
    const usersContainer = document.getElementById("users-list");
    if (users.length > 0) {
        usersContainer.innerHTML = users
            .map(
                (user, index) => `
            <div id="user-${index}">
                <p><strong>Name:</strong> <span id="user-name-${index}">${user.username}</span></p>
                <p><strong>Email:</strong> ${user.email}</p>
                <button onclick="editUser(${index})">Edit</button>
                <button onclick="deleteUser(${index})">Delete</button>
            </div>
        `
            )
            .join("");
    } else {
        usersContainer.innerHTML = "No users found";
    }

    // Display upcoming appointments (admin can see all appointments)
    const upcomingAppointmentsContainer = document.getElementById("upcoming-appointments");
    if (appointments.length > 0) {
        upcomingAppointmentsContainer.innerHTML = appointments
            .map(
                (appt, index) => `
            <div id="appointment-${index}">
                <p><strong>Patient:</strong> ${appt.patientName}</p>
                <p><strong>Time:</strong> ${appt.timeSlot}</p>
            </div>
        `
            )
            .join("");
    } else {
        upcomingAppointmentsContainer.innerHTML = "No upcoming appointments";
    }

    // Display medical records
    const recentRecordsContainer = document.getElementById("recent-records");
    if (medicalRecords.length > 0) {
        recentRecordsContainer.innerHTML = medicalRecords
            .map(
                (record, index) => `
            <div id="record-${index}">
                <p><strong>Patient:</strong> ${record.patientName}</p>
                <p><strong>Record ID:</strong> ${record.recordId}</p>
            </div>
        `
            )
            .join("");
    } else {
        recentRecordsContainer.innerHTML = "No medical records";
    }
});

function editUser(index) {
    let users = JSON.parse(localStorage.getItem("users")) || [];
    let user = users[index];
    let newName = prompt("Edit user name:", user.username);
    let newEmail = prompt("Edit user email:", user.email);

    if (newName && newEmail && (newName !== user.username || newEmail !== user.email)) {
        users[index].username = newName;
        users[index].email = newEmail;
        localStorage.setItem("users", JSON.stringify(users));

        alert("User details updated!");
        location.reload(); // Refresh to apply changes
    }
}

function deleteUser(index) {
    if (confirm("Are you sure you want to delete this user?")) {
        let users = JSON.parse(localStorage.getItem("users")) || [];
        users.splice(index, 1);
        localStorage.setItem("users", JSON.stringify(users));

        alert("User deleted!");
        location.reload(); // Refresh to update UI
    }
}

function logout() {
    alert("Logging out...");
    window.location.href = "../Pages/login.html";
}
