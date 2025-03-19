document.addEventListener("DOMContentLoaded", function () {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.role === "doctor") {
        document.getElementById("doctor-name").innerText = currentUser.username;
        document.getElementById("doctor-username").innerText = currentUser.username;
        document.getElementById("doctor-email").innerText = currentUser.email;
        document.getElementById("doctor-mobile").innerText = currentUser.mobile;
        document.getElementById("doctor-role").innerText = currentUser.role;
    } else {
        alert("Unauthorized access! Redirecting to login...");
        window.location.href = "../Pages/login.html";
    }

    // Fetch stored appointments
    let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

    // Display total appointments
    document.getElementById("appointments-count").textContent = appointments.length;

    // Extract unique patients and their details
    let patientDetails = {};
    appointments.forEach(appt => {
        if (!patientDetails[appt.patientName]) {
            patientDetails[appt.patientName] = [];
        }
        patientDetails[appt.patientName].push(appt.timeSlot);
    });

    let patientNames = Object.keys(patientDetails);

    // Display total patients count
    document.getElementById("patients-count").textContent = patientNames.length;

    // Display patients with their timings, edit & delete buttons
    const pContainer = document.getElementById("recent-patients");
    if (patientNames.length > 0) {
        pContainer.innerHTML = patientNames
            .map(
                (name, index) => `
            <div id="patient-${index}">
                <p><strong>Name:</strong> <span id="name-${index}">${name}</span></p>
                <p><strong>Timings:</strong> ${patientDetails[name].join(", ")}</p>
                <button onclick="editPatient(${index})">Edit</button>
                <button onclick="deletePatient(${index})">Delete</button>
            </div>
        `
            )
            .join("");
    } else {
        pContainer.innerHTML = "No recent patients";
    }
});

function editPatient(index) {
    let nameSpan = document.getElementById(`name-${index}`);
    let oldName = nameSpan.innerText;
    let newName = prompt("Edit patient name:", oldName);
    if (newName && newName !== oldName) {
        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];

        // Update patient name in appointments
        appointments.forEach(appt => {
            if (appt.patientName === oldName) {
                appt.patientName = newName;
            }
        });

        localStorage.setItem("appointments", JSON.stringify(appointments));

        alert("Patient details updated!");
        location.reload(); // Refresh to apply changes
    }
}

function deletePatient(index) {
    if (confirm("Are you sure you want to delete this patient?")) {
        let appointments = JSON.parse(localStorage.getItem("appointments")) || [];
        let patientNames = [...new Set(appointments.map(appt => appt.patientName))];

        let patientNameToDelete = patientNames[index];

        // Remove only this patient's appointments
        appointments = appointments.filter(appt => appt.patientName !== patientNameToDelete);

        localStorage.setItem("appointments", JSON.stringify(appointments));

        alert("Patient deleted!");
        location.reload(); // Refresh to update UI
    }
}

function logout() {
    alert("Logging out...");
    window.location.href = "../Pages/login.html";
}
