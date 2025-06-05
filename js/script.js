// Wait for the DOM to load before running any code
document.addEventListener("DOMContentLoaded", function () {
  // 1. Mobile menu toggle functionality
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", function () {
    navLinks.classList.toggle("show");
  });

  // 2. Button click example in the Home section
  const actionButton = document.getElementById("action-button");
  actionButton.addEventListener("click", function () {
    alert("You clicked the button! 🎉");
  });

  // 3. Basic contact form submission handling
  const contactForm = document.getElementById("contact-form");
  const feedbackDiv = document.getElementById("form-feedback");

  contactForm.addEventListener("submit", function (event) {
    event.preventDefault(); // prevent actual form submission

    // Simple validation (beyond HTML “required” fields)
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (name === "" || email === "" || message === "") {
      feedbackDiv.textContent = "Please fill in all fields before sending.";
      feedbackDiv.style.color = "red";
      return;
    }

    // Simulate “sending” and give a success message
    feedbackDiv.textContent = "Thanks for reaching out! We’ll get back to you soon.";
    feedbackDiv.style.color = "green";

    // Optional: Clear the form fields
    contactForm.reset();
  });
});
