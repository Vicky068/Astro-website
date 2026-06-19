// Services page JavaScript

// DOM Elements
const tabButtons = document.querySelectorAll('.tab-btn');
const tabPanels = document.querySelectorAll('.tab-panel');

// Initialize services page
function initServices() {
    // Add event listeners to tab buttons
    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons
            tabButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            button.classList.add('active');
            
            // Get tab value
            const tab = button.getAttribute('data-tab');
            
            // Show corresponding tab panel
            showTabPanel(tab);
        });
    });

    // Add animation to service cards
    animateServiceCards();
}

// Show tab panel
function showTabPanel(tab) {
    // Hide all tab panels
    tabPanels.forEach(panel => {
        panel.classList.remove('active');
    });
    
    // Show selected tab panel
    const selectedPanel = document.getElementById(tab);
    if (selectedPanel) {
        selectedPanel.classList.add('active');
        
        // Animate service cards in the selected panel
        animateServiceCards(selectedPanel);
    }
}

// Animate service cards
function animateServiceCards(container = document) {
    const serviceCards = container.querySelectorAll('.service-card-modern');
    
    serviceCards.forEach((card, index) => {
        // Reset animations
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        
        // Apply animations with delay
        setTimeout(() => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        }, 100 * index);
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initServices);
