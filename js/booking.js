// Booking page JavaScript

// DOM Elements
const bookingSteps = document.querySelectorAll('.booking-step');
const nextButtons = document.querySelectorAll('.next-step');
const prevButtons = document.querySelectorAll('.prev-step');
const serviceOptions = document.querySelectorAll('.service-option input');
const serviceCategories = document.querySelectorAll('.service-category');
const serviceOptionContainers = document.querySelectorAll('.service-options');
const calendarDays = document.getElementById('calendar-days');
const currentMonthElement = document.getElementById('current-month');
const selectedDateDisplay = document.getElementById('selected-date-display');
const prevMonthBtn = document.getElementById('prev-month');
const nextMonthBtn = document.getElementById('next-month');
const timeSlots = document.getElementById('time-slots');
const summaryService = document.getElementById('summary-service');
const summaryDate = document.getElementById('summary-date');
const summaryTime = document.getElementById('summary-time');
const summaryPrice = document.getElementById('summary-price');
const bookingForm = document.getElementById('booking-form');

// Variables
let currentDate = new Date();
let selectedDate = null;
let selectedTimeSlot = null;
let selectedService = 'Janam Kundli Analysis';
let selectedPrice = '$120';

// Initialize the booking page
function initBooking() {
    // Set up step navigation
    setupStepNavigation();
    
    // Set default service
    if (serviceOptions.length > 0) {
        serviceOptions[0].checked = true;
        updateServiceSelection();
    }
    
    // Generate calendar
    generateCalendar();
    
    // Add event listeners
    if (prevMonthBtn && nextMonthBtn) {
        prevMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() - 1);
            generateCalendar();
        });
        
        nextMonthBtn.addEventListener('click', () => {
            currentDate.setMonth(currentDate.getMonth() + 1);
            generateCalendar();
        });
    }
    
    // Service selection
    serviceOptions.forEach(option => {
        option.addEventListener('change', updateServiceSelection);
    });
    
    // Service category selection
    serviceCategories.forEach(category => {
        category.addEventListener('click', () => {
            // Remove active class from all categories
            serviceCategories.forEach(cat => cat.classList.remove('active'));
            
            // Add active class to clicked category
            category.classList.add('active');
            
            // Show corresponding service options
            const categoryId = category.getAttribute('data-category');
            showServiceOptions(categoryId);
        });
    });
    
    // Form submission
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleFormSubmit);
    }
    
    // Add animations
    animateBookingElements();
}

// Set up step navigation
function setupStepNavigation() {
    // Next step buttons
    nextButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentStep = button.closest('.booking-step');
            const nextStepId = button.getAttribute('data-next');
            
            // Validate current step
            if (validateStep(currentStep.id)) {
                // Hide current step
                currentStep.classList.remove('active');
                
                // Show next step
                const nextStep = document.getElementById(nextStepId);
                if (nextStep) {
                    nextStep.classList.add('active');
                    
                    // Scroll to top of the step
                    nextStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }
            }
        });
    });
    
    // Previous step buttons
    prevButtons.forEach(button => {
        button.addEventListener('click', () => {
            const currentStep = button.closest('.booking-step');
            const prevStepId = button.getAttribute('data-prev');
            
            // Hide current step
            currentStep.classList.remove('active');
            
            // Show previous step
            const prevStep = document.getElementById(prevStepId);
            if (prevStep) {
                prevStep.classList.add('active');
                
                // Scroll to top of the step
                prevStep.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
}

// Validate step
function validateStep(stepId) {
    switch (stepId) {
        case 'step-1':
            // Check if a service is selected
            return document.querySelector('.service-option input:checked') !== null;
        
        case 'step-2':
            // Check if date and time are selected
            if (!selectedDate || !selectedTimeSlot) {
                alert('Please select both a date and time before proceeding.');
                return false;
            }
            return true;
        
        default:
            return true;
    }
}

// Show service options for selected category
function showServiceOptions(categoryId) {
    // Hide all service option containers
    serviceOptionContainers.forEach(container => {
        container.classList.remove('active');
    });
    
    // Show selected category's service options
    const selectedContainer = document.getElementById(`${categoryId}-services`);
    if (selectedContainer) {
        selectedContainer.classList.add('active');
    }
}

// Update service selection
function updateServiceSelection() {
    const selectedOption = document.querySelector('.service-option input:checked');
    if (selectedOption) {
        const serviceName = selectedOption.value;
        const servicePrice = `$${selectedOption.getAttribute('data-price')}`;
        
        selectedService = serviceName;
        selectedPrice = servicePrice;
        
        // Update summary
        if (summaryService && summaryPrice) {
            summaryService.textContent = serviceName;
            summaryPrice.textContent = servicePrice;
        }
    }
}

// Generate calendar
function generateCalendar() {
    if (!calendarDays || !currentMonthElement) return;
    
    // Clear previous calendar
    calendarDays.innerHTML = '';
    
    // Set current month and year
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    currentMonthElement.textContent = new Date(year, month, 1).toLocaleDateString('en-US', { month: 'long', year: 'numeric' });
    
    // Get first day of month and number of days
    const firstDay = new Date(year, month, 1).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    
    // Get current date for comparison
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Add empty cells for days before first day of month
    for (let i = 0; i < firstDay; i++) {
        const emptyDay = document.createElement('div');
        calendarDays.appendChild(emptyDay);
    }
    
    // Add days of the month
    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        dayElement.textContent = day;
        
        // Check if day is in the past
        const currentDay = new Date(year, month, day);
        currentDay.setHours(0, 0, 0, 0);
        
        if (currentDay < today) {
            dayElement.classList.add('disabled');
        } else {
            dayElement.addEventListener('click', () => selectDate(year, month, day));
            
            // Check if this is the selected date
            if (selectedDate && 
                selectedDate.getDate() === day && 
                selectedDate.getMonth() === month && 
                selectedDate.getFullYear() === year) {
                dayElement.classList.add('selected');
            }
        }
        
        calendarDays.appendChild(dayElement);
    }
}

// Select a date
function selectDate(year, month, day) {
    selectedDate = new Date(year, month, day);
    
    // Update calendar UI
    const calendarDayElements = document.querySelectorAll('.calendar-day');
    calendarDayElements.forEach(dayElement => {
        dayElement.classList.remove('selected');
    });
    
    // Find and select the clicked day
    const dayIndex = day + document.querySelectorAll('.calendar-day:empty').length - 1;
    if (calendarDayElements[dayIndex]) {
        calendarDayElements[dayIndex].classList.add('selected');
    }
    
    // Update selected date display
    if (selectedDateDisplay) {
        selectedDateDisplay.textContent = selectedDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
        });
    }
    
    // Update summary
    if (summaryDate) {
        summaryDate.textContent = selectedDate.toLocaleDateString('en-US', { 
            weekday: 'long', 
            month: 'long', 
            day: 'numeric', 
            year: 'numeric' 
        });
    }
    
    // Generate time slots
    generateTimeSlots();
}

// Generate time slots
function generateTimeSlots() {
    if (!timeSlots) return;
    
    // Clear previous time slots
    timeSlots.innerHTML = '';
    
    // Reset selected time slot
    selectedTimeSlot = null;
    if (summaryTime) {
        summaryTime.textContent = 'Not selected';
    }
    
    // Generate time slots from 9 AM to 5 PM
    const startHour = 9;
    const endHour = 17;
    
    // Create morning and afternoon sections
    const morningSection = document.createElement('div');
    morningSection.classList.add('time-slot-section');
    morningSection.innerHTML = '<h4>Morning</h4>';
    
    const afternoonSection = document.createElement('div');
    afternoonSection.classList.add('time-slot-section');
    afternoonSection.innerHTML = '<h4>Afternoon</h4>';
    
    const morningSlots = document.createElement('div');
    morningSlots.classList.add('time-slots-grid');
    
    const afternoonSlots = document.createElement('div');
    afternoonSlots.classList.add('time-slots-grid');
    
    for (let hour = startHour; hour <= endHour; hour++) {
        // Create slots for each hour (e.g., 9:00 AM, 9:30 AM)
        for (let minutes of [0, 30]) {
            const timeSlot = document.createElement('div');
            timeSlot.classList.add('time-slot');
            
            // Format time (e.g., "9:00 AM")
            const timeString = formatTime(hour, minutes);
            timeSlot.textContent = timeString;
            
            // Randomly disable some time slots to simulate availability
            if (Math.random() < 0.3) {
                timeSlot.classList.add('disabled');
            } else {
                timeSlot.addEventListener('click', () => selectTimeSlot(timeSlot, timeString));
            }
            
            // Add to morning or afternoon section
            if (hour < 12) {
                morningSlots.appendChild(timeSlot);
            } else {
                afternoonSlots.appendChild(timeSlot);
            }
        }
    }
    
    morningSection.appendChild(morningSlots);
    afternoonSection.appendChild(afternoonSlots);
    
    timeSlots.appendChild(morningSection);
    timeSlots.appendChild(afternoonSection);
}

// Format time
function formatTime(hour, minutes) {
    const period = hour >= 12 ? 'PM' : 'AM';
    const displayHour = hour > 12 ? hour - 12 : hour;
    const displayMinutes = minutes === 0 ? '00' : minutes;
    return `${displayHour}:${displayMinutes} ${period}`;
}

// Select a time slot
function selectTimeSlot(timeSlotElement, timeString) {
    // Remove selection from all time slots
    const allTimeSlots = document.querySelectorAll('.time-slot');
    allTimeSlots.forEach(slot => {
        slot.classList.remove('selected');
    });
    
    // Select the clicked time slot
    timeSlotElement.classList.add('selected');
    selectedTimeSlot = timeString;
    
    // Update summary
    if (summaryTime) {
        summaryTime.textContent = timeString;
    }
}

// Handle form submission
function handleFormSubmit(e) {
    e.preventDefault();
    
    // Check if date and time are selected
    if (!selectedDate || !selectedTimeSlot) {
        alert('Please select a date and time for your booking.');
        return;
    }
    
    // Get form data
    const formData = new FormData(bookingForm);
    const name = formData.get('name');
    const email = formData.get('email');
    
    // In a real application, you would send this data to a server
    // For this demo, we'll just show a confirmation message
    alert(`Thank you, ${name}! Your ${selectedService} has been booked for ${selectedDate.toLocaleDateString()} at ${selectedTimeSlot}. A confirmation email has been sent to ${email}.`);
    
    // Reset form
    bookingForm.reset();
    
    // Reset selections
    selectedDate = null;
    selectedTimeSlot = null;
    
    // Update UI
    generateCalendar();
    timeSlots.innerHTML = '<p class="select-date-message">Please select a date first</p>';
    
    // Update summary
    if (summaryDate) summaryDate.textContent = 'Not selected';
    if (summaryTime) summaryTime.textContent = 'Not selected';
    
    // Go back to first step
    bookingSteps.forEach(step => step.classList.remove('active'));
    bookingSteps[0].classList.add('active');
}

// Animate booking elements
function animateBookingElements() {
    // Animate service options
    const serviceCards = document.querySelectorAll('.service-option');
    serviceCards.forEach((card, index) => {
        setTimeout(() => {
            card.classList.add('animate-active');
        }, 100 * index);
    });
}

// Initialize on page load
window.addEventListener('DOMContentLoaded', initBooking);
