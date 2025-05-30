// Navigation functionality
const navDots = document.querySelectorAll('.nav-dot');
const sections = document.querySelectorAll('section');

// Performance improvement: Throttle scroll events
let isScrolling;
window.addEventListener('scroll', function () {
    window.clearTimeout(isScrolling);
    isScrolling = setTimeout(() => {
        const scrollPosition = window.scrollY;

        // Calculate header offset dynamically
        const header = document.querySelector('header');
        const headerOffset = header ? header.offsetHeight : 100;

        // Show navigation after scrolling past home section
        document.body.classList.toggle('scrolled', scrollPosition > headerOffset);

        // Update active dot with accessibility support
        sections.forEach((section, index) => {
            const sectionTop = section.offsetTop - headerOffset;
            const sectionHeight = section.clientHeight;

            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navDots.forEach(dot => {
                    dot.classList.remove('active');
                    dot.removeAttribute('aria-current');
                });
                navDots[index].classList.add('active');
                navDots[index].setAttribute('aria-current', 'page');
            }
        });
    }, 100); // Throttle to 100ms
});

// Dot click event with element check
if (navDots.length > 0) {
    navDots.forEach(dot => {
        dot.addEventListener('click', function () {
            const sectionId = this.getAttribute('data-section');
            const targetSection = document.getElementById(sectionId);

            if (targetSection) {
                window.scrollTo({
                    top: targetSection.offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Form submission with element check
const contactForm = document.getElementById('contactForm');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();
        alert('Thank you for your message! Akko will get back to you soon.');
        this.reset();
    });
}

// Improved animation observer
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
        }
    });
}, { threshold: 0.1 });

// Chinese decorations hover effect (class toggle)
const decos = document.querySelectorAll('.chinese-deco');
decos.forEach(deco => {
    deco.addEventListener('mouseover', function() {
        if (window.matchMedia("(hover: hover)").matches) {
            this.classList.add('chinese-deco--hovered');
        }
    });

    deco.addEventListener('mouseout', function() {
        if (window.matchMedia("(hover: hover)").matches) {
            this.classList.remove('chinese-deco--hovered');
        }
    });
});

// Initialize animations and other features
document.addEventListener('DOMContentLoaded', function () {
    // Initialize fade-in animations
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        observer.observe(el);
    });

    // Make external links open in new tab
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
});