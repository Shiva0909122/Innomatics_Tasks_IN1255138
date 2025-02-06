
document.getElementById("contactForm").addEventListener("submit", function (event) {
    event.preventDefault();

    let form = event.target;
    if (!form.checkValidity()) {
        event.stopPropagation();
        form.classList.add("was-validated");
        return;
    }

    // Simulated success message
    document.getElementById("formMessage").innerHTML =
        '<div class="alert alert-success">Thank you! Your message has been sent.</div>';

    form.reset();
    form.classList.remove("was-validated");
});

function initPage() {
    console.log('Page has loaded successfully!');

}


document.addEventListener("contextmenu", function (event) {
    event.preventDefault();
});

function showAlert() {
    alert("Thank you for choosing Khanna Coffee! Your order will be processed shortly.");
}