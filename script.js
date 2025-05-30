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

// Initialize animations and other features
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        el.style.opacity = '0'; // Reset for re-triggering
    });

    // Improved animation observer with re-triggering support
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            } else {
                // Reset when leaving viewport for re-triggering
                entry.target.style.opacity = '0';
                entry.target.style.animation = 'none';
            }
        });
    }, { threshold: 0.1 });

    elements.forEach(el => observer.observe(el));

    // Enhanced hover effect for Chinese decorations
    const decos = document.querySelectorAll('.chinese-deco');
    decos.forEach(deco => {
        deco.addEventListener('mouseover', function () {
            if (window.matchMedia("(hover: hover)").matches) {
                this.style.animation = 'none';
                this.style.transform = 'scale(3) rotate(10deg)';
                this.style.color = '#ff6b9d';
                this.style.textShadow = '0 0 15px rgba(255, 107, 157, 0.7)';
                this.style.opacity = '1';
                this.style.zIndex = '20';
            }
        });

        deco.addEventListener('mouseout', function () {
            if (window.matchMedia("(hover: hover)").matches) {
                this.style.animation = '';
                this.style.transform = '';
                this.style.color = '';
                this.style.textShadow = '';
                this.style.opacity = '';
                this.style.zIndex = '';
            }
        });
    });

    // Make external links open in new tab
    document.querySelectorAll('a').forEach(link => {
        if (link.hostname !== window.location.hostname) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
});