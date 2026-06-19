// Testimonials page JavaScript

// DOM Elements
const filterButtons = document.querySelectorAll('.filter-btn');
const testimonialCards = document.querySelectorAll('.testimonial-card');

// Initialize testimonials page
function initTestimonials() {
    // Add event listeners to filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get filter value
            const filter = button.getAttribute('data-filter');
            
            // Filter testimonials
            filterTestimonials(filter);
        });
    });

    // Add animation to testimonial cards on page load
    testimonialCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate-active');
        }, 100 * index);
    });
}

// Filter testimonials
function filterTestimonials(filter) {
    testimonialCards.forEach(card => {
        if (filter === 'all') {
            card.style.display = 'block';
            
            // Add animation
            setTimeout(() => {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 100);
        } else {
            const category = card.getAttribute('data-category');
            
            if (category === filter) {
                card.style.display = 'block';
                
                // Add animation
                setTimeout(() => {
                    card.style.opacity = '1';
                    card.style.transform = 'translateY(0)';
                }, 100);
            } else {
                card.style.opacity = '0';
                card.style.transform = 'translateY(20px)';
                
                // Hide after animation
                setTimeout(() => {
                    card.style.display = 'none';
                }, 300);
            }
        }
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initTestimonials);
