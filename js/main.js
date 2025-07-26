// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    
    // Image Error Handling
    function handleImageErrors() {
        const images = document.querySelectorAll('img');
        
        images.forEach(img => {
            img.addEventListener('error', function() {
                // Create a fallback div
                const fallback = document.createElement('div');
                fallback.className = 'img-fallback';
                fallback.style.width = this.style.width || '100%';
                fallback.style.height = this.style.height || '200px';
                fallback.textContent = 'Image not available';
                
                // Replace the broken image with fallback
                this.parentNode.replaceChild(fallback, this);
            });
            
            // Also handle loading state
            img.addEventListener('load', function() {
                this.style.opacity = '1';
            });
        });
    }
    
    // Smooth Scrolling for anchor links
    function initSmoothScrolling() {
        const links = document.querySelectorAll('a[href^="#"]');
        
        links.forEach(link => {
            link.addEventListener('click', function(e) {
                e.preventDefault();
                
                const targetId = this.getAttribute('href').substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }
    
    // FAQ Accordion Enhancement
    function enhanceFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        
        faqItems.forEach(item => {
            const summary = item.querySelector('.faq-question');
            
            summary.addEventListener('click', function() {
                // Close other open FAQ items (optional - for accordion behavior)
                faqItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.hasAttribute('open')) {
                        otherItem.removeAttribute('open');
                    }
                });
            });
        });
    }
    
    // Intersection Observer for animations
    function initScrollAnimations() {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        // Observe sections for fade-in animation
        const sections = document.querySelectorAll('.feature-section, .description, .use-cases, .faq, .final-cta');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(30px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }
    
    // Header scroll effect
    function initHeaderScrollEffect() {
        const header = document.querySelector('.header');
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.style.backgroundColor = 'rgba(245, 243, 240, 0.98)';
                header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
            } else {
                header.style.backgroundColor = 'rgba(245, 243, 240, 0.95)';
                header.style.boxShadow = 'none';
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    // Button hover effects enhancement
    function enhanceButtonEffects() {
        const buttons = document.querySelectorAll('.btn-cta, .btn-get-comet, .help-center-btn');
        
        buttons.forEach(button => {
            button.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-2px)';
            });
            
            button.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0)';
            });
        });
    }
    
    // Lazy loading for images
    function initLazyLoading() {
        if ('IntersectionObserver' in window) {
            const imageObserver = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        const img = entry.target;
                        img.src = img.dataset.src || img.src;
                        img.classList.remove('lazy');
                        imageObserver.unobserve(img);
                    }
                });
            });
            
            const lazyImages = document.querySelectorAll('img[data-src]');
            lazyImages.forEach(img => imageObserver.observe(img));
        }
    }
    
    // Keyboard navigation enhancement
    function enhanceKeyboardNavigation() {
        // Add keyboard support for FAQ items
        const faqSummaries = document.querySelectorAll('.faq-question');
        
        faqSummaries.forEach(summary => {
            summary.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.click();
                }
            });
        });
        
        // Add focus styles for better accessibility
        const focusableElements = document.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');
        
        focusableElements.forEach(element => {
            element.addEventListener('focus', function() {
                this.style.outline = '2px solid #4299e1';
                this.style.outlineOffset = '2px';
            });
            
            element.addEventListener('blur', function() {
                this.style.outline = 'none';
            });
        });
    }
    
    // Performance monitoring
    function monitorPerformance() {
        // Log page load time
        window.addEventListener('load', function() {
            const loadTime = performance.now();
            console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
        });
        
        // Monitor image loading
        const images = document.querySelectorAll('img');
        let loadedImages = 0;
        
        images.forEach(img => {
            img.addEventListener('load', function() {
                loadedImages++;
                if (loadedImages === images.length) {
                    console.log('All images loaded successfully');
                }
            });
        });
    }
    
    // Error handling wrapper
    function safeExecute(fn, errorMessage) {
        try {
            fn();
        } catch (error) {
            console.error(errorMessage, error);
        }
    }
    
    // Initialize all functionality
    function init() {
        safeExecute(handleImageErrors, 'Error initializing image error handling:');
        safeExecute(initSmoothScrolling, 'Error initializing smooth scrolling:');
        safeExecute(enhanceFAQ, 'Error enhancing FAQ:');
        safeExecute(initScrollAnimations, 'Error initializing scroll animations:');
        safeExecute(initHeaderScrollEffect, 'Error initializing header scroll effect:');
        safeExecute(enhanceButtonEffects, 'Error enhancing button effects:');
        safeExecute(initLazyLoading, 'Error initializing lazy loading:');
        safeExecute(enhanceKeyboardNavigation, 'Error enhancing keyboard navigation:');
        safeExecute(monitorPerformance, 'Error monitoring performance:');
        
        console.log('Comet website initialized successfully');
    }
    
    // Start the application
    init();
    
    // Expose some functions globally for debugging
    window.CometApp = {
        handleImageErrors,
        initSmoothScrolling,
        enhanceFAQ
    };
});

// Service Worker registration (optional, for PWA features)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        navigator.serviceWorker.register('/sw.js')
            .then(function(registration) {
                console.log('ServiceWorker registration successful');
            })
            .catch(function(err) {
                console.log('ServiceWorker registration failed');
            });
    });
}
