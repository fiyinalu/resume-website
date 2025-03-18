// Ensure the script runs after the DOM content is loaded
document.addEventListener('DOMContentLoaded', () => {
    // Toggle Navigation Menu (Responsive Navbar)
    const burger = document.getElementById('burger');
    const navLinks = document.getElementById('nav-links');

    // Check if both elements exist before adding event listener
    if (burger && navLinks) {
        burger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    }

    // Form Validation
    const form = document.getElementById('contact-form');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent default form submission

            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');

            if (name && email && message) {
                if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
                    alert('Please fill in all fields.');
                } else if (!validateEmail(email.value)) {
                    alert('Please enter a valid email address.');
                } else {
                    alert('Thank you for your message!');
                    form.reset(); // Clear form after submission
                }
            }
        });
    }

    // Email validation function
    function validateEmail(email) {
        const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@(([^<>()[\]\\.,;:\s@"]+\.)+[^<>()[\]\\.,;:\s@"]{2,})$/i;
        return re.test(String(email).toLowerCase());
    }
});
