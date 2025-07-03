
// Page navigation functionality
document.querySelectorAll('.nav-link, .footer-links a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        // Remove active class from all nav links
        document.querySelectorAll('.nav-link').forEach(navLink => {
            navLink.classList.remove('active');
        });

        // Add active class to clicked link
        this.classList.add('active');

        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });

        // Show the selected page
        const targetPage = this.getAttribute('data-page') || this.getAttribute('href').substring(1);
        document.getElementById(`${targetPage}-page`).classList.add('active');

        // Scroll to top
        window.scrollTo(0, 0);
    });
});

// Simulate gallery lightbox
document.querySelectorAll('.gallery-overlay').forEach(overlay => {
    overlay.addEventListener('click', function () {
        alert('In a complete implementation, this would open a lightbox gallery with full-size images.');
    });
});

// Form submission
document.querySelector('.contact-form form').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! We will get back to you soon.');
    this.reset();
});

// Newsletter Subscribe
function subscribe() {
    const email = document.getElementById("emailInput").value.trim();

    // Basic validation
    if (!email) {
      alert("Please enter your email address.");
      return;
    }

    // Simple email format check
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Success message (you can send to server here)
    alert("Thank you for subscribing! We'll keep you updated.");

    // Clear input
    document.getElementById("emailInput").value = "";
  }

// Registration form submission 
 document.getElementById("registerForm").addEventListener("submit", function (e) {
    e.preventDefault();

    // Collect form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Simple validation (you can improve this)
    if (!name || !email || !password) {
      alert("Please fill in all fields!");
      return;
    }

    // Simulate saving to database (console or localStorage)
    console.log("User Registered:", { name, email, password });

    // Show success message
    document.getElementById("result").textContent = `Welcome, ${name}! You are registered successfully.`;

    // Optionally clear form
    document.getElementById("registerForm").reset();
  });