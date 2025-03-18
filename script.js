// Smooth scroll to section when clicking nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth'
            });
        }
        // Close nav menu if it's a mobile view
        document.querySelector('nav ul').classList.remove('active');
    });
});

// Mobile menu toggle
const menuToggle = document.getElementById('menu-toggle');
menuToggle.addEventListener('click', () => {
    document.querySelector('nav ul').classList.toggle('active');
});
