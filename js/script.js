document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");
  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // “Learn More” button behavior
  const actionButton = document.getElementById("action-button");
  actionButton.addEventListener("click", () => {
    window.location.hash = "#about";
  });

  // Contact form submission handling
  const contactForm = document.getElementById("contact-form");
  const feedbackDiv = document.getElementById("form-feedback");

  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    if (!name || !email || !message) {
      feedbackDiv.textContent = "Please complete all fields before submitting.";
      feedbackDiv.style.color = "#e74c3c";
      return;
    }

    // Simulate successful send
    feedbackDiv.textContent = "Thank you! Your message has been sent.";
    feedbackDiv.style.color = "#27ae60";
    contactForm.reset();
  });
});

