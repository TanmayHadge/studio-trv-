// script.js - Cleaned up and optimized
// Simple, lightweight JavaScript for Studio TRV website

// Page Loading Screen
window.addEventListener('load', function() {
  const loadingScreen = document.getElementById('loadingScreen');
  if (loadingScreen) {
    setTimeout(() => {
      loadingScreen.classList.add('fade-out');
      setTimeout(() => {
        loadingScreen.style.display = 'none';
      }, 500);
    }, 1000); // Show loading screen for 1 second minimum
  }
});

// Image Loading States
function handleImageLoad(img) {
  img.classList.remove('loading');
}

function handleImageError(img) {
  img.classList.remove('loading');
  img.style.display = 'none';
}

// Add loading states to all images
document.addEventListener('DOMContentLoaded', function() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    if (!img.complete) {
      img.classList.add('loading');
      img.addEventListener('load', () => handleImageLoad(img));
      img.addEventListener('error', () => handleImageError(img));
    }
  });
});

// Button Loading States
function addButtonLoading(button) {
  button.classList.add('loading');
  button.disabled = true;
}

function removeButtonLoading(button) {
  button.classList.remove('loading');
  button.disabled = false;
}

// Contact form handling with loading state
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', function (e) {
    const submitBtn = this.querySelector('button[type="submit"]');
    if (submitBtn) {
      addButtonLoading(submitBtn);
      
      // Simulate form processing
      setTimeout(() => {
        removeButtonLoading(submitBtn);
        console.log('Contact form submitted');
      }, 2000);
    }
  });
}

// Add loading states to CTA buttons
document.querySelectorAll('.btn.primary').forEach(btn => {
  btn.addEventListener('click', function(e) {
    // Add loading state for external links
    if (this.href && (this.href.includes('mailto:') || this.href.includes('wa.me') || this.href.includes('instagram.com'))) {
      addButtonLoading(this);
      
      // Remove loading state after a short delay
      setTimeout(() => {
        removeButtonLoading(this);
      }, 1500);
    }
  });
});

// Add smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  });
});

// Mobile menu toggle (if needed)
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.querySelector('.nav-links');

if (mobileMenuBtn && navLinks) {
  mobileMenuBtn.addEventListener('click', function() {
    navLinks.classList.toggle('active');
  });
}
