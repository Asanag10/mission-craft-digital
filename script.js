document.addEventListener('DOMContentLoaded', function() {
    // Mobile navigation toggle
    const navToggle = document.getElementById('navToggle');
    const navMenu = document.getElementById('navMenu');

    navToggle.addEventListener('click', function() {
        const isOpen = navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
        navToggle.setAttribute('aria-expanded', isOpen);
    });

    // Smooth scrolling for nav links + close mobile menu
    const navLinks = document.querySelectorAll('.nav-menu a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Close mobile menu
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
            navToggle.setAttribute('aria-expanded', 'false');

            if (targetSection) {
                const headerOffset = 80;
                const elementPosition = targetSection.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.scrollY - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // Contact form submission is handled with Formspree AJAX so the form can reset after success.
    const contactForm = document.getElementById('contactForm');
    const formToast = document.getElementById('formToast');
    const submitBtn = contactForm.querySelector('button[type="submit"]');
    let toastTimeout;

    function showToast(message, type) {
        clearTimeout(toastTimeout);
        formToast.textContent = message;
        formToast.className = 'form-toast show ' + type;
        formToast.setAttribute('aria-hidden', 'false');
        toastTimeout = setTimeout(hideToast, 5000);
    }

    function hideToast() {
        formToast.className = 'form-toast hidden';
        formToast.setAttribute('aria-hidden', 'true');
    }

    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        hideToast();
        submitBtn.disabled = true;
        submitBtn.textContent = 'Sending...';

        const formData = new FormData(contactForm);

        fetch(contactForm.action, {
            method: 'POST',
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(function(response) {
            if (response.ok) {
                contactForm.reset();
                showToast('Thank you! Your message has been sent successfully.', 'success');
            } else {
                return response.json().then(function(data) {
                    let errorText = 'Oops! There was a problem submitting your message.';
                    if (data && data.errors && data.errors.length) {
                        errorText = data.errors.map(function(error) {
                            return error.message;
                        }).join(' ');
                    }
                    throw new Error(errorText);
                });
            }
        })
        .catch(function(error) {
            showToast(error.message || 'Oops! There was a problem submitting your message.', 'error');
        })
        .finally(function() {
            submitBtn.disabled = false;
            submitBtn.textContent = 'Send Project Inquiry';
        });
    });

    // Scroll-triggered animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    const animatedElements = document.querySelectorAll('.service-card, .portfolio-card, .testimonial-card, .value-item');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });

    // Back to top button
    const backToTopButton = document.getElementById('backToTop');

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTopButton.classList.add('visible');
        } else {
            backToTopButton.classList.remove('visible');
        }
    });

    backToTopButton.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
