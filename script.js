// Smooth Scrolling
const links = document.querySelectorAll('nav ul li a');
links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        document.getElementById(targetId).scrollIntoView({ behavior: 'smooth' });
    });
});

// Make Sections Visible on Scroll
const sections = document.querySelectorAll('section');
window.addEventListener('scroll', () => {
    const windowHeight = window.innerHeight;
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 50) {
            section.classList.add('visible');
        }
    });
});

// Set Footer Year
document.getElementById('year').textContent = new Date().getFullYear();
