document.addEventListener('DOMContentLoaded', function() {
// --- 1. Testimonial Slider Functionality ---
const sliderWrapper = document.querySelector('.testimonial-slider-wrapper');
const prevButton = document.querySelector('.slider-controls .fa-arrow-left').closest('button');
const nextButton = document.querySelector('.slider-controls .fa-arrow-right').closest('button');

// Calculate scroll distance based on one card width (290px) + one gap (20px) = 310px
const cardWidth = 290;
const gap = 20;
const scrollStep = cardWidth + gap; 

if (sliderWrapper && prevButton && nextButton) {

// Scroll Forward (Right Arrow)
nextButton.addEventListener('click', () => {
 sliderWrapper.scrollBy({
left: scrollStep,
behavior: 'smooth'
});
});

// Scroll Backward (Left Arrow)
prevButton.addEventListener('click', () => {
sliderWrapper.scrollBy({
left: -scrollStep, // Negative value scrolls left
behavior: 'smooth'
});
});
 }

 // --- 2. Primary Button Click Handlers --
// Hero 'Shop Now' button
const shopNowBtn = document.querySelector('.shop-now-btn');
if (shopNowBtn) {
 shopNowBtn.addEventListener('click', () => {
 alert('Redirecting to the main Shop page!');
// In a live site: window.location.href = '/shop';
 });
}

 // 'View All' buttons
const viewAllButtons = document.querySelectorAll('.view-all-btn');
viewAllButtons.forEach(button => {
    button.addEventListener('click', () => {
// Traverse up to find the closest h2 for the section title
const sectionTitle = button.parentElement.querySelector('.section-title');
const titleText = sectionTitle ? sectionTitle.textContent : 'Product';
alert(`Showing all products for the '${titleText}' section!`);
// In a live site: window.location.href = '/products/all'; 
 }); 
 });


 // --- 3. Navigation Links and Icons ---

// Top Navigation Links (On Sale, New Arrivals, Brands - excludes the dropdown parent)
const navLinks = document.querySelectorAll('.nav-links li:not(.dropdown) span');
navLinks.forEach(link => {
 link.addEventListener('click', () => {
 alert(`Navigating to the: ${link.textContent} section.`);
 }); 
});

// New: Handle clicks for the links *inside* the new dropdown menu
const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
 dropdownLinks.forEach(link => {
 link.addEventListener('click', (event) => {
 event.preventDefault(); // Prevent default link behavior for this example
 alert(`Navigating to: ${link.textContent}`);
 });
 });

 // Navigation Icons (Cart and User)
const cartIcon = document.querySelector('.fa-shopping-cart');
if (cartIcon) {
   cartIcon.addEventListener('click', () => {
   alert('Opening Shopping Cart!');
});
 }

const userIcon = document.querySelector('.fa-user');
 if (userIcon) {
    userIcon.addEventListener('click', () => {
     alert('Opening User Profile/Login!');
   });
 }
});