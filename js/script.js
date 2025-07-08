document.addEventListener("DOMContentLoaded", () => {
  // Mobile navigation toggle
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });

  // “Learn More” button scrolls smoothly to the About section
  const actionButton = document.getElementById("action-button");
  actionButton.addEventListener("click", () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  });

  // Contact form handling with validation and feedback
  const contactForm = document.getElementById("contact-form");
  const feedbackDiv = document.getElementById("form-feedback");

  contactForm.addEventListener("submit", event => {
    event.preventDefault();

    const name    = document.getElementById("name").value.trim();
    const email   = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    if (!name || !email || !message) {
      feedbackDiv.textContent = "Please complete all fields before submitting.";
      feedbackDiv.style.color   = "#e74c3c";  // error red
      return;
    }

    // Simulate successful send
    feedbackDiv.textContent = "Thank you! Your message has been sent.";
    feedbackDiv.style.color = "#27ae60";     // success green

    // Clear the form
    contactForm.reset();
  });
});

