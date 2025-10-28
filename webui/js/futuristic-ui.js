// futuristic-ui.js
// Additional JavaScript for futuristic UI interactions

document.addEventListener('DOMContentLoaded', function() {
    // Add hover effects to all interactive elements
    addFuturisticHoverEffects();
    
    // Add focus effects for accessibility
    addFuturisticFocusEffects();
    
    // Initialize dynamic elements
    initDynamicElements();
    
    // Add particle background effect
    addParticleBackground();
});

function addFuturisticHoverEffects() {
    // Add to elements that should have a futuristic hover effect
    const hoverElements = document.querySelectorAll(`
        .config-button, 
        .text-button, 
        .chat-button, 
        .edit-button, 
        .toggle-sidebar-button,
        .chat-list-button,
        .tab
    `);
    
    hoverElements.forEach(element => {
        // Add a subtle glow effect on hover
        element.addEventListener('mouseenter', function() {
            this.style.setProperty('--futuristic-glow', '0 0 15px rgba(0, 243, 255, 0.5)');
            this.style.boxShadow = 'var(--futuristic-glow)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.removeProperty('--futuristic-glow');
            // Reset to original shadow when needed
        });
    });
}

function addFuturisticFocusEffects() {
    // Enhanced focus effects for accessibility
    const focusableElements = document.querySelectorAll('button, input, textarea, select, [tabindex]:not([tabindex="-1"])');
    
    focusableElements.forEach(element => {
        element.addEventListener('focus', function() {
            this.style.outline = '2px solid var(--futuristic-primary, #00f3ff)';
            this.style.outlineOffset = '2px';
        });
        
        element.addEventListener('blur', function() {
            this.style.outline = '';
            this.style.outlineOffset = '';
        });
    });
}

function initDynamicElements() {
    // Initialize dynamic elements with special effects
    const dynamicElements = document.querySelectorAll('.holographic');
    
    dynamicElements.forEach(element => {
        // Add a subtle animation to holographic elements
        element.style.animation = 'float 6s ease-in-out infinite';
    });
    
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('button, .config-button, .text-button, .chat-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            createRippleEffect(e, this);
        });
    });
}

function createRippleEffect(e, element) {
    // Create a ripple effect on click
    const ripple = document.createElement('span');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = e.clientX - rect.left - size / 2;
    const y = e.clientY - rect.top - size / 2;
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = x + 'px';
    ripple.style.top = y + 'px';
    ripple.style.position = 'absolute';
    ripple.style.borderRadius = '50%';
    ripple.style.transform = 'scale(0)';
    ripple.style.animation = 'ripple 0.6s linear';
    ripple.style.background = 'radial-gradient(circle, rgba(0,243,255,0.6) 0%, rgba(0,243,255,0) 70%)';
    ripple.style.pointerEvents = 'none';
    ripple.style.zIndex = '9999';
    
    // Add to element
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    // Remove ripple after animation completes
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

function addParticleBackground() {
    // Create a subtle particle background effect
    const container = document.querySelector('.container');
    if (!container) return;
    
    // Only add particles if not already added
    if (document.querySelector('.particles-container')) return;
    
    const particlesContainer = document.createElement('div');
    particlesContainer.className = 'particles-container';
    particlesContainer.style.position = 'absolute';
    particlesContainer.style.top = '0';
    particlesContainer.style.left = '0';
    particlesContainer.style.width = '100%';
    particlesContainer.style.height = '100%';
    particlesContainer.style.pointerEvents = 'none';
    particlesContainer.style.zIndex = '-1';
    particlesContainer.style.overflow = 'hidden';
    
    // Create multiple particles
    for (let i = 0; i < 20; i++) {
        const particle = document.createElement('div');
        particle.style.position = 'absolute';
        particle.style.width = Math.random() * 3 + 1 + 'px';
        particle.style.height = particle.style.width;
        particle.style.borderRadius = '50%';
        particle.style.backgroundColor = `rgba(${Math.random() > 0.5 ? '0, 243, 255' : '177, 0, 255'}, ${Math.random() * 0.4 + 0.1})`;
        particle.style.left = Math.random() * 100 + '%';
        particle.style.top = Math.random() * 100 + '%';
        particle.style.animation = `float ${Math.random() * 10 + 10}s infinite ease-in-out`;
        particle.style.animationDelay = Math.random() * 5 + 's';
        particle.style.opacity = Math.random() * 0.5 + 0.1;
        
        particlesContainer.appendChild(particle);
    }
    
    container.appendChild(particlesContainer);
}

// Add CSS for the new effects
function addDynamicCSS() {
    const style = document.createElement('style');
    style.textContent = `
        @keyframes ripple {
            to {
                transform: scale(1);
                opacity: 0;
            }
        }
        
        .particles-container {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            overflow: hidden;
            z-index: -1;
        }
        
        @keyframes float {
            0% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
            100% { transform: translateY(0px); }
        }
    `;
    document.head.appendChild(style);
}

// Add dynamic CSS when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', addDynamicCSS);
} else {
    addDynamicCSS();
}

// Add theme toggle functionality 
function toggleFuturisticTheme() {
    document.body.classList.toggle('futuristic-mode');
    // Store preference in localStorage
    localStorage.setItem('futuristicMode', document.body.classList.contains('futuristic-mode'));
}

// Initialize theme from localStorage if available
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('futuristicMode');
    if (savedTheme === 'true') {
        document.body.classList.add('futuristic-mode');
    } else {
        document.body.classList.remove('futuristic-mode');
    }
});