// Contact page JavaScript

// DOM Elements
const contactForm = document.getElementById('contact-form');
const faqItems = document.querySelectorAll('.faq-item');

// Initialize contact page
function initContact() {
    // Form submission
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);
    }

    // FAQ accordion
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question.addEventListener('click', () => {
            // Toggle active class
            item.classList.toggle('active');
            
            // Update icon
            const icon = question.querySelector('.faq-toggle i');
            if (item.classList.contains('active')) {
                icon.className = 'fas fa-minus';
            } else {
                icon.className = 'fas fa-plus';
            }
        });
    });

    // Add animation to contact sections
    animateContactSections();
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();

    // Get form data
    const formData = new FormData(contactForm);
    const name = formData.get('name');
    const email = formData.get('email');
    const subject = formData.get('subject');

    // In a real application, you would send this data to a server
    // For this demo, we'll just show a confirmation message
    alert(`Thank you, ${name}! Your message about "${subject}" has been sent. We'll get back to you at ${email} as soon as possible.`);

    // Reset form
    contactForm.reset();
}

// Animate contact sections
function animateContactSections() {
    const contactInfo = document.querySelector('.contact-info');
    const contactForm = document.querySelector('.contact-form-container');
    const faqSection = document.querySelector('.faq-section');

    if (contactInfo) {
        contactInfo.classList.add('animate-fade-left');
    }

    if (contactForm) {
        contactForm.classList.add('animate-fade-right');
    }

    if (faqSection) {
        faqSection.classList.add('animate-fade-up');
    }
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initContact);
