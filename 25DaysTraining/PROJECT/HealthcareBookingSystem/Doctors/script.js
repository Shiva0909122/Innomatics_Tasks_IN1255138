// Doctor Data Array
const doctors = [
    {
        name: "Dr. Rahul",
        gender: "Male",
        specialty: "Dentist",
        experience: 22,
        location: "Nizamabad",
        fee: 900,
        availability: "Today",
        image: "../assets/doctor1.webp",
        link: "DrRahul.html"
    },
    {
        name: "Dr. Suchitra",
        gender: "Female",
        specialty: "Dermatology",
        experience: 18,
        location: "Nizamabad",
        fee: 1000,
        availability: "Next 7 days",
        image: "../assets/doctor2.png",
        link: "DrSuchitra.html"
    },
    {
        name: "Dr. Shiva Charan",
        gender: "Male",
        specialty: "Orthopaedics",
        experience: 30,
        location: "Nizamabad",
        fee: 600,
        availability: "Next 7 days",
        image: "../assets/doctor1.webp",
        link: "DrShivaCharan.html"
    },
    {
        name: "Dr. Shivarth",
        gender: "Male",
        specialty: "Neurology",
        experience: 25,
        location: "Nizamabad",
        fee: 600,
        availability: "Next 7 days",
        image: "../assets/doctor1.webp",
        link: "DrShivarth.html"
    },
    {
        name: "Dr. Vineeth",
        gender: "Male",
        specialty: "Urology",
        experience: 40,
        location: "Nizamabad",
        fee: 600,
        availability: "Next 7 days",
        image: "../assets/doctor1.webp",
        link: "DrVineeth.html"
    }
];

// Function to display doctors
function displayDoctors(filteredDoctors = doctors) {
    const container = document.querySelector(".leftbox");
    container.innerHTML = ""; // Clear previous content

    if (filteredDoctors.length === 0) {
        container.innerHTML = "<p>No doctors found.</p>";
        return;
    }

    filteredDoctors.forEach(doctor => {
        const doctorCard = `
            <div class="doctor-card">
                <div class="doctor-info">
                    <a href="${doctor.link}">
                        <img src="${doctor.image}" alt="Doctor Image">
                    </a>
                    <div class="details">
                        <a href="${doctor.link}" class="doctor-name book-link">${doctor.name}</a>
                        <p class="specialty">${doctor.specialty}</p>
                        <p class="experience">${doctor.experience} years experience overall</p>
                        <p class="location"><strong>${doctor.location}</strong></p>
                        <p class="fee">₹${doctor.fee} Consultation fee</p>
                    </div>
                </div>
                <div class="booking">
                    <p class="availability">📅 Available ${doctor.availability}</p>
                    <a href="${doctor.link}" class="book-link">
                        <button class="book-btn">Book Clinic Visit</button>
                    </a>
                </div>
            </div>
        `;
        container.innerHTML += doctorCard;
    });
}

// Function to filter doctors
function filterDoctors() {
    let searchQuery = document.getElementById("searchBar").value.toLowerCase();
    let selectedGender = document.getElementById("genderFilter").value;
    let selectedExperience = parseInt(document.getElementById("experienceFilter").value);
    let selectedFee = document.querySelector("input[name='fees']:checked")?.value || 0;
    let selectedAvailability = document.querySelector("input[name='availability']:checked")?.value || "7";

    const filteredDoctors = doctors.filter(doctor => {
        let searchMatch = doctor.name.toLowerCase().includes(searchQuery) || doctor.specialty.toLowerCase().includes(searchQuery);
        let genderMatch = selectedGender ? doctor.gender === selectedGender : true;
        let experienceMatch = selectedExperience ? doctor.experience >= selectedExperience : true;
        let feeMatch = doctor.fee <= selectedFee || selectedFee == 0;
        let availabilityMatch = selectedAvailability === "7" || doctor.availability.includes(selectedAvailability);

        return searchMatch && genderMatch && experienceMatch && feeMatch && availabilityMatch;
    });

    displayDoctors(filteredDoctors);
}

// Event Listeners
document.getElementById("searchBar").addEventListener("keyup", filterDoctors);
document.getElementById("genderFilter").addEventListener("change", filterDoctors);
document.getElementById("experienceFilter").addEventListener("change", filterDoctors);
document.querySelectorAll("input[name='fees']").forEach(input => input.addEventListener("change", filterDoctors));
document.querySelectorAll("input[name='availability']").forEach(input => input.addEventListener("change", filterDoctors));

// Dropdown Toggle
document.getElementById("filterToggle").addEventListener("click", function () {
    document.getElementById("filterMenu").classList.toggle("show");
});

// Initial Display
displayDoctors()
