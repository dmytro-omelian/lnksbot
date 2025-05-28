document.addEventListener('DOMContentLoaded', () => {
  // Smooth scrolling for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80, // Account for header height
          behavior: 'smooth'
        });
      }
    });
  });

  // Form submission handling
  const signupForm = document.querySelector('.signup-form');
  if (signupForm) {
    signupForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const emailInput = signupForm.querySelector('input[type="email"]');
      const email = emailInput.value.trim();
      
      if (email) {
        // Here you would typically send this to your backend
        // For now, just show a success message
        const formParent = signupForm.parentElement;
        signupForm.style.display = 'none';
        
        const successMessage = document.createElement('div');
        successMessage.className = 'success-message';
        successMessage.innerHTML = `
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M22 11.08V12C21.9988 14.1564 21.3005 16.2547 20.0093 17.9818C18.7182 19.709 16.9033 20.9725 14.8354 21.5839C12.7674 22.1953 10.5573 22.1219 8.53447 21.3746C6.51168 20.6273 4.78465 19.2461 3.61096 17.4371C2.43727 15.628 1.87979 13.4881 2.02168 11.3363C2.16356 9.18455 2.99721 7.13631 4.39828 5.49706C5.79935 3.85781 7.69279 2.71537 9.79619 2.24013C11.8996 1.7649 14.1003 1.98232 16.07 2.85999" stroke="#36B37E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            <path d="M22 4L12 14.01L9 11.01" stroke="#36B37E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <p>Thanks for signing up! We'll be in touch soon.</p>
        `;
        formParent.appendChild(successMessage);
        
        // Reset form
        setTimeout(() => {
          emailInput.value = '';
          successMessage.remove();
          signupForm.style.display = 'flex';
        }, 5000);
      }
    });
  }

  // Add animation on scroll
  const animateOnScroll = () => {
    const elements = document.querySelectorAll('.feature-card, .pricing-card, .step');
    
    elements.forEach(element => {
      const elementPosition = element.getBoundingClientRect().top;
      const screenPosition = window.innerHeight / 1.2;
      
      if (elementPosition < screenPosition) {
        element.classList.add('animate');
      }
    });
  };

  // Initial check for elements in view
  animateOnScroll();
  
  // Listen for scroll events
  window.addEventListener('scroll', animateOnScroll);
});

// Add some CSS animations dynamically
const style = document.createElement('style');
style.textContent = `
  .feature-card, .pricing-card, .step {
    opacity: 0;
    transform: translateY(20px);
    transition: opacity 0.6s ease, transform 0.6s ease;
  }
  
  .feature-card.animate, .pricing-card.animate, .step.animate {
    opacity: 1;
    transform: translateY(0);
  }
  
  .feature-card:nth-child(2), .pricing-card:nth-child(2), .step:nth-child(3) {
    transition-delay: 0.2s;
  }
  
  .feature-card:nth-child(3), .pricing-card:nth-child(3), .step:nth-child(5) {
    transition-delay: 0.4s;
  }
  
  .feature-card:nth-child(4) {
    transition-delay: 0.6s;
  }
  
  .success-message {
    display: flex;
    align-items: center;
    gap: 8px;
    color: #36B37E;
    font-weight: 500;
    margin-bottom: 16px;
  }
`;
document.head.appendChild(style);
