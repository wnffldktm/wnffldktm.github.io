// Navigation functionality
const navDots = document.querySelectorAll('.nav-dot');
const sections = document.querySelectorAll('section');

// Scroll event to update active dot
window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;

    // Show navigation after scrolling past home section
    if (scrollPosition > 100) {
        document.body.classList.add('scrolled');
    } else {
        document.body.classList.remove('scrolled');
    }

    // Update active dot
    sections.forEach((section, index) => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            navDots.forEach(dot => dot.classList.remove('active'));
            navDots[index].classList.add('active');
        }
    });
});

// Dot click event
navDots.forEach(dot => {
    dot.addEventListener('click', function () {
        const sectionId = this.getAttribute('data-section');
        const targetSection = document.getElementById(sectionId);

        // Scroll to section
        window.scrollTo({
            top: targetSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

// Form submission
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault();
    alert('Thank you for your message! Akko will get back to you soon.');
    this.reset();
});

// Initialize animations and other features
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(el => {
        // Reset for re-triggering
        el.style.opacity = '0';
    });

    // Create observer for animations
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.animation = 'fadeIn 0.8s ease forwards';
            }
        });
    }, {threshold: 0.1});

    // Observe elements
    elements.forEach(el => {
        observer.observe(el);
    });

    // Enhanced hover effect for Chinese decorations
    const decos = document.querySelectorAll('.chinese-deco');

    decos.forEach(deco => {
        // Store original styles
        const originalOpacity = deco.style.opacity;
        const originalTransform = deco.style.transform;
        const originalColor = deco.style.color;
        const originalTextShadow = deco.style.textShadow;
        const originalZIndex = deco.style.zIndex;
        const originalAnimation = deco.style.animation;

        deco.addEventListener('mouseover', function () {
            // Apply hover styles
            this.style.animation = 'none';
            this.style.transform = 'scale(3) rotate(10deg)';
            this.style.color = '#ff6b9d';
            this.style.textShadow = '0 0 15px rgba(255, 107, 157, 0.7)';
            this.style.opacity = '1';
            this.style.zIndex = '20';

            // After 2 seconds, fade out
            setTimeout(() => {
                this.style.opacity = '0';
            }, 2000);
        });

        deco.addEventListener('mouseout', function () {
            // Reset to original styles
            this.style.animation = originalAnimation || 'float 15s ease-in-out infinite';
            this.style.transform = originalTransform || '';
            this.style.color = originalColor || 'rgba(177, 80, 224, 0.5)';
            this.style.textShadow = originalTextShadow || '2px 2px 4px rgba(0, 0, 0, 0.1)';
            this.style.opacity = originalOpacity || '0.7';
            this.style.zIndex = originalZIndex || '5';
        });

        deco.addEventListener('transitionend', function (e) {
            if (e.propertyName === 'opacity' && this.style.opacity === '0') {
                // Reset after fade out completes
                setTimeout(() => {
                    this.style.animation = originalAnimation || 'float 15s ease-in-out infinite';
                    this.style.opacity = originalOpacity || '0.7';
                    this.style.transform = originalTransform || '';
                    this.style.color = originalColor || 'rgba(177, 80, 224, 0.5)';
                    this.style.textShadow = originalTextShadow || '2px 2px 4px rgba(0, 0, 0, 0.1)';
                    this.style.zIndex = originalZIndex || '5';
                }, 1000);
            }
        });
    });

    // Make external links open in new tab
    const allLinks = document.querySelectorAll('a');

    allLinks.forEach(link => {
        // Check if it's an external link
        if (link.hostname !== window.location.hostname) {
            link.target = '_blank';
            link.rel = 'noopener noreferrer';
        }
    });
});