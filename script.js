// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in effect for sections
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
    threshold: 0.1, 
    rootMargin: "0px 0px -100px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, appearOnScroll) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        appearOnScroll.unobserve(entry.target);
    });
}, appearOptions);

faders.forEach(fader => {
    appearOnScroll.observe(fader);
});

// Back-to-top button
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = "block"; // Show button after scrolling 300px
    } else {
        backToTopButton.style.display = "none"; // Hide button when near top
    }
});

backToTopButton.addEventListener("click", () => {
    // Scroll smoothly to the #about section
    document.getElementById("about").scrollIntoView({
        behavior: "smooth"
    });
});


