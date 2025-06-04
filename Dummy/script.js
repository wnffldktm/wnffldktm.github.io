document.addEventListener('DOMContentLoaded', function () {
    // Combined burger menu functionality
    const burgerBtn = document.querySelector('.header-burger-btn');
    if (burgerBtn) {
        burgerBtn.addEventListener('click', function () {
            // First implementation (from collectb.js)
            const burgerInner = document.querySelector('.burger-inner');
            const headerNav = document.querySelector('.header-nav');

            if (burgerInner && headerNav) {
                const isOpen = burgerBtn.getAttribute('aria-expanded') === 'true';
                burgerBtn.setAttribute('aria-expanded', !isOpen);
                headerNav.classList.toggle('is-open');

                // Toggle burger animation
                if (!isOpen) {
                    burgerInner.classList.add('is-open');
                } else {
                    burgerInner.classList.remove('is-open');
                }
            }
            // Second implementation fallback (from collecta.js)
            else {
                const headerNav = document.querySelector('.header-nav');
                if (headerNav) {
                    headerNav.classList.toggle('active');
                }
            }
        });
    }

    // Animation for elements with data-animation-role (from collectb.js)
    const animateElements = document.querySelectorAll('[data-animation-role]');

    function checkScroll() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (elementTop < windowHeight - 100) {
                element.classList.add('is-visible');
            }
        });
    }

    // Initial check and scroll listener
    checkScroll();
    window.addEventListener('scroll', checkScroll);

    // Combined form handling
    const forms = document.querySelectorAll('form');
    forms.forEach(form => {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            // Special handling for react forms (from collectb.js)
            if (form.classList.contains('react-form-contents')) {
                const submissionHtml = document.getElementById('form-submission-html-6771a284211f977b90f5bb6d');
                if (submissionHtml) {
                    submissionHtml.innerHTML = '<div class="form-submission-success">Thank you!</div>';
                    form.reset();
                }
            }
            // General form handling (from collecta.js)
            else {
                const formData = new FormData(form);
                const formId = form.getAttribute('data-form-id');

                // Simulated form submission
                console.log('Form submitted:', formId, Object.fromEntries(formData.entries()));

                // Show success message
                const submissionText = form.querySelector('.form-submission-text');
                if (submissionText) {
                    alert(submissionText.textContent);
                }

                form.reset();
            }
        });
    });

    // Smooth scrolling for anchor links (from collecta.js)
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Fluid engine initialization (from collecta.js)
    function initFluidEngine() {
        console.log('Fluid engine initialized');
    }

    initFluidEngine();
});