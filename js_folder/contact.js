// Script to handle form validation and dynamic behavior on the contact page

document.addEventListener("DOMContentLoaded", () => {
    const contactForm = document.getElementById("contactForm");
    const formFeedback = document.getElementById("formFeedback");

    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        const name = document.getElementById("name").value.trim();
        const email = document.getElementById("email").value.trim();
        const message = document.getElementById("message").value.trim();

        if (!name || !email || !message) {
            formFeedback.textContent = "All fields are required!";
            formFeedback.style.color = "red";
            formFeedback.classList.remove("hidden");
            return;
        }

        if (!/\S+@\S+\.\S+/.test(email)) {
            formFeedback.textContent = "Invalid email address!";
            formFeedback.style.color = "red";
            formFeedback.classList.remove("hidden");
            return;
        }

        formFeedback.textContent = "Your message has been submitted successfully!";
        formFeedback.style.color = "green";
        formFeedback.classList.remove("hidden");
    });
});
