// 1
const button = document.getElementById("talkingButton");

button.addEventListener("click", () => {
    // Create a new speech synthesis utterance
    const speech = new SpeechSynthesisUtterance("Submitted successfully!");

    // Set the voice and language
    speech.lang = "en-US";
    speech.volume = 0;  // Volume: 0 to 1
    speech.rate = 1;    // Speed: 0.1 to 10
    speech.pitch = 1;   // Pitch: 0 to 2

    // Speak the text
    window.speechSynthesis.speak(speech);
});

button.addEventListener("mouseleave", () => {
    // Stop any ongoing speech when the mouse leaves
    window.speechSynthesis.cancel();
});

//2
const form = document.getElementById('form');

// Form submit event listener
form.addEventListener('submit', function () {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Show a retro alert message
    alert(`🎉 Alert! 🎉\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);

});



//3
        // Check if count is stored in localStorage
        let count1 = localStorage.getItem("count1") ? parseInt(localStorage.getItem("count1")) : 0;
        let count2 = localStorage.getItem("count2") ? parseInt(localStorage.getItem("count2")) : 1;

        // Increment counts
        count1++;
        count2++;

        // Store updated counts in localStorage
        localStorage.setItem("count1", count1);
        localStorage.setItem("count2", count2);

        // Update the SVG text
        document.getElementById("count1").textContent = count1;
        document.getElementById("count2").textContent = count2;

        //4
        