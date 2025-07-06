// TaskEarn JavaScript Functions

// Live Cashout Data
const cashouts = [
    { username: 'alex_m', amount: '$12.45', country: 'USA', countryCode: 'us', time: '2m ago' },
    { username: 'sarah_k', amount: '$8.90', country: 'UK', countryCode: 'gb', time: '3m ago' },
    { username: 'carlos_r', amount: '$15.30', country: 'Spain', countryCode: 'es', time: '5m ago' },
    { username: 'maria_s', amount: '$7.25', country: 'Brazil', countryCode: 'br', time: '6m ago' },
    { username: 'yuki_t', amount: '$22.10', country: 'Japan', countryCode: 'jp', time: '8m ago' },
    { username: 'ahmed_h', amount: '$9.75', country: 'UAE', countryCode: 'ae', time: '10m ago' },
    { username: 'lisa_w', amount: '$11.60', country: 'Germany', countryCode: 'de', time: '12m ago' },
    { username: 'raj_p', amount: '$6.40', country: 'India', countryCode: 'in', time: '14m ago' },
    { username: 'pierre_l', amount: '$18.95', country: 'France', countryCode: 'fr', time: '16m ago' },
    { username: 'anna_k', amount: '$13.20', country: 'Poland', countryCode: 'pl', time: '18m ago' },
    { username: 'mehmet_y', amount: '$11.85', country: 'Turkey', countryCode: 'tr', time: '20m ago' },
    { username: 'sofia_m', amount: '$9.30', country: 'Bulgaria', countryCode: 'bg', time: '22m ago' }
];

// Flag URL mapping
function getFlagUrl(countryCode) {
    const flagPaths = {
        'us': 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/320px-Flag_of_the_United_States.svg.png',
        'gb': 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg/320px-Flag_of_the_United_Kingdom_%283-5%29.svg.png',
        'es': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Spain.svg/320px-Flag_of_Spain.svg.png',
        'br': 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Flag_of_Brazil.svg/320px-Flag_of_Brazil.svg.png',
        'jp': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Flag_of_Japan.svg/320px-Flag_of_Japan.svg.png',
        'ae': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/320px-Flag_of_the_United_Arab_Emirates.svg.png',
        'de': 'https://upload.wikimedia.org/wikipedia/commons/thumb/b/ba/Flag_of_Germany.svg/320px-Flag_of_Germany.svg.png',
        'in': 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/Flag_of_India.svg/320px-Flag_of_India.svg.png',
        'fr': 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Flag_of_France.svg/320px-Flag_of_France.svg.png',
        'pl': 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/Flag_of_Poland.svg/320px-Flag_of_Poland.svg.png',
        'tr': 'https://www.coinpayu.com/static/images/flags/tr.svg',
        'bg': 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Flag_of_Bulgaria.svg/320px-Flag_of_Bulgaria.svg.png'
    };
    return flagPaths[countryCode] || flagPaths['us'];
}

// Create cashout element
function createCashoutElement(cashout, index) {
    return `
        <div class="flex-none flex items-center space-x-1.5 sm:space-x-2 lg:space-x-3 bg-white/80 backdrop-blur-sm px-2 py-1 sm:px-3 sm:py-1.5 lg:px-4 lg:py-2 rounded-full border border-gray-200 shadow-sm">
            <div class="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 rounded-full overflow-hidden border border-gray-200">
                <img 
                    src="${getFlagUrl(cashout.countryCode)}"
                    alt="${cashout.country} Flag"
                    class="w-full h-full object-cover"
                    onerror="this.src='${getFlagUrl('us')}'"
                />
            </div>
            <span class="text-xs font-medium text-gray-700">${cashout.username}</span>
            <span class="text-xs font-bold text-emerald-600">${cashout.amount}</span>
            <span class="text-xs text-gray-500">${cashout.time}</span>
        </div>
    `;
}

// Initialize cashout animation
function initializeCashoutAnimation() {
    const container = document.getElementById('cashout-container');
    if (!container) return;

    // Create double set for seamless loop
    const allCashouts = [...cashouts, ...cashouts];
    
    container.innerHTML = allCashouts.map((cashout, index) => 
        createCashoutElement(cashout, index)
    ).join('');
}

// Mobile menu toggle
function toggleMobileMenu() {
    const mobileMenu = document.getElementById('mobile-menu');
    const menuButton = document.getElementById('menu-button');
    
    if (mobileMenu && menuButton) {
        const isOpen = mobileMenu.classList.contains('hidden');
        
        if (isOpen) {
            mobileMenu.classList.remove('hidden');
            menuButton.innerHTML = `
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            `;
        } else {
            mobileMenu.classList.add('hidden');
            menuButton.innerHTML = `
                <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
            `;
        }
    }
}

// Smooth scrolling for anchor links
function initializeSmoothScrolling() {
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
}

// Intersection Observer for animations
function initializeScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);

    // Observe elements with animation classes
    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
}

// Form validation
function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

// Newsletter subscription
function subscribeNewsletter(email) {
    if (!validateEmail(email)) {
        showNotification('Please enter a valid email address', 'error');
        return false;
    }

    // Here you would typically send the email to your backend
    console.log('Newsletter subscription:', email);
    showNotification('Successfully subscribed to newsletter!', 'success');
    return true;
}

// Show notification
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `fixed top-4 right-4 z-50 p-4 rounded-lg shadow-lg transition-all duration-300 ${
        type === 'success' ? 'bg-green-500 text-white' :
        type === 'error' ? 'bg-red-500 text-white' :
        'bg-blue-500 text-white'
    }`;
    notification.textContent = message;
    
    document.body.appendChild(notification);
    
    // Auto remove after 3 seconds
    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, 3000);
}

// Lazy loading for images
function initializeLazyLoading() {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Performance monitoring
function trackPageLoad() {
    window.addEventListener('load', () => {
        const loadTime = performance.now();
        console.log(`Page loaded in ${loadTime.toFixed(2)}ms`);
    });
}

// Error handling
function handleError(error, context = '') {
    console.error(`Error ${context}:`, error);
    
    // You can send errors to your analytics service here
    if (window.gtag) {
        gtag('event', 'exception', {
            description: error.message,
            fatal: false
        });
    }
}

// Initialize all functions when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    try {
        initializeCashoutAnimation();
        initializeSmoothScrolling();
        initializeScrollAnimations();
        initializeLazyLoading();
        trackPageLoad();
    } catch (error) {
        handleError(error, 'during initialization');
    }
});

// Handle window resize
window.addEventListener('resize', function() {
    // Debounce resize events
    clearTimeout(window.resizeTimeout);
    window.resizeTimeout = setTimeout(() => {
        // Handle responsive adjustments here
        console.log('Window resized');
    }, 250);
});

// Export functions for global use
window.TaskEarn = {
    toggleMobileMenu,
    subscribeNewsletter,
    showNotification,
    validateEmail,
    getFlagUrl,
    createCashoutElement
};