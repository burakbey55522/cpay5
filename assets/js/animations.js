// Advanced animations and interactions

// Scroll-triggered animations
class ScrollAnimations {
    constructor() {
        this.elements = [];
        this.init();
    }
    
    init() {
        this.setupIntersectionObserver();
        this.setupParallaxElements();
        this.setupCounterAnimations();
    }
    
    setupIntersectionObserver() {
        const options = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    this.animateElement(entry.target);
                }
            });
        }, options);
        
        // Observe elements
        document.querySelectorAll('.step, .earning-method, .task-card, .stat-box').forEach(el => {
            this.observer.observe(el);
        });
    }
    
    animateElement(element) {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'all 0.6s ease';
        
        requestAnimationFrame(() => {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        });
        
        this.observer.unobserve(element);
    }
    
    setupParallaxElements() {
        this.parallaxElements = document.querySelectorAll('.hero-circle');
        
        window.addEventListener('scroll', this.handleParallax.bind(this));
    }
    
    handleParallax() {
        const scrolled = window.pageYOffset;
        
        this.parallaxElements.forEach((element, index) => {
            const speed = 0.3 + (index * 0.1);
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    }
    
    setupCounterAnimations() {
        const counters = document.querySelectorAll('.stat-value');
        
        counters.forEach(counter => {
            this.observer.observe(counter);
            counter.addEventListener('animationstart', () => {
                this.animateCounter(counter);
            });
        });
    }
    
    animateCounter(element) {
        const target = parseInt(element.textContent.replace(/[^0-9]/g, ''));
        const duration = 2000;
        const step = target / (duration / 16);
        let current = 0;
        
        const timer = setInterval(() => {
            current += step;
            if (current >= target) {
                current = target;
                clearInterval(timer);
            }
            
            const prefix = element.textContent.match(/^\$/) ? '$' : '';
            const suffix = element.textContent.match(/\+$/) ? '+' : '';
            
            element.textContent = prefix + Math.floor(current).toLocaleString() + suffix;
        }, 16);
    }
}

// Mouse tracking effects
class MouseEffects {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupCursorTracker();
        this.setupHoverEffects();
        this.setupMagneticButtons();
    }
    
    setupCursorTracker() {
        // Create custom cursor
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';
        this.cursor.style.cssText = `
            position: fixed;
            width: 20px;
            height: 20px;
            background: rgba(16, 185, 129, 0.3);
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: transform 0.1s ease;
            mix-blend-mode: difference;
        `;
        document.body.appendChild(this.cursor);
        
        document.addEventListener('mousemove', (e) => {
            this.cursor.style.left = e.clientX - 10 + 'px';
            this.cursor.style.top = e.clientY - 10 + 'px';
        });
    }
    
    setupHoverEffects() {
        document.querySelectorAll('.btn, .task-card, .app-item').forEach(element => {
            element.addEventListener('mouseenter', () => {
                this.cursor.style.transform = 'scale(2)';
                this.cursor.style.background = 'rgba(16, 185, 129, 0.5)';
            });
            
            element.addEventListener('mouseleave', () => {
                this.cursor.style.transform = 'scale(1)';
                this.cursor.style.background = 'rgba(16, 185, 129, 0.3)';
            });
        });
    }
    
    setupMagneticButtons() {
        document.querySelectorAll('.btn-primary').forEach(button => {
            button.addEventListener('mousemove', (e) => {
                const rect = button.getBoundingClientRect();
                const x = e.clientX - rect.left - rect.width / 2;
                const y = e.clientY - rect.top - rect.height / 2;
                
                button.style.transform = `translate(${x * 0.1}px, ${y * 0.1}px)`;
            });
            
            button.addEventListener('mouseleave', () => {
                button.style.transform = 'translate(0, 0)';
            });
        });
    }
}

// Loading animations
class LoadingAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        this.createPageLoader();
        this.setupImageLoading();
    }
    
    createPageLoader() {
        const loader = document.createElement('div');
        loader.id = 'page-loader';
        loader.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background: linear-gradient(135deg, #10b981, #059669);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 10000;
            transition: opacity 0.5s ease;
        `;
        
        loader.innerHTML = `
            <div style="text-align: center; color: white;">
                <div style="width: 60px; height: 60px; border: 4px solid rgba(255,255,255,0.3); border-top: 4px solid white; border-radius: 50%; animation: spin 1s linear infinite; margin: 0 auto 20px;"></div>
                <h2 style="font-size: 1.5rem; font-weight: 700; margin: 0;">TaskEarn</h2>
                <p style="margin: 10px 0 0; opacity: 0.8;">Yükleniyor...</p>
            </div>
        `;
        
        document.body.appendChild(loader);
        
        // Add spin animation
        const style = document.createElement('style');
        style.textContent = `
            @keyframes spin {
                0% { transform: rotate(0deg); }
                100% { transform: rotate(360deg); }
            }
        `;
        document.head.appendChild(style);
        
        // Hide loader when page is loaded
        window.addEventListener('load', () => {
            setTimeout(() => {
                loader.style.opacity = '0';
                setTimeout(() => {
                    loader.remove();
                }, 500);
            }, 1000);
        });
    }
    
    setupImageLoading() {
        document.querySelectorAll('img').forEach(img => {
            img.addEventListener('load', function() {
                this.style.opacity = '0';
                this.style.transition = 'opacity 0.3s ease';
                
                setTimeout(() => {
                    this.style.opacity = '1';
                }, 100);
            });
        });
    }
}

// Particle effects
class ParticleEffects {
    constructor() {
        this.particles = [];
        this.init();
    }
    
    init() {
        this.createCanvas();
        this.generateParticles();
        this.animate();
    }
    
    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.cssText = `
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            pointer-events: none;
            z-index: 1;
            opacity: 0.1;
        `;
        
        this.ctx = this.canvas.getContext('2d');
        document.body.appendChild(this.canvas);
        
        this.resizeCanvas();
        window.addEventListener('resize', () => this.resizeCanvas());
    }
    
    resizeCanvas() {
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
    }
    
    generateParticles() {
        for (let i = 0; i < 50; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.2
            });
        }
    }
    
    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(16, 185, 129, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Text animations
class TextAnimations {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupTypewriter();
        this.setupTextReveal();
    }
    
    setupTypewriter() {
        const typewriterElements = document.querySelectorAll('.typewriter');
        
        typewriterElements.forEach(element => {
            const text = element.textContent;
            element.textContent = '';
            
            let i = 0;
            const timer = setInterval(() => {
                element.textContent += text.charAt(i);
                i++;
                
                if (i > text.length) {
                    clearInterval(timer);
                }
            }, 100);
        });
    }
    
    setupTextReveal() {
        const revealElements = document.querySelectorAll('.text-reveal');
        
        revealElements.forEach(element => {
            const text = element.textContent;
            element.innerHTML = text.split('').map(char => 
                `<span style="opacity: 0; transform: translateY(20px); transition: all 0.3s ease;">${char}</span>`
            ).join('');
            
            const spans = element.querySelectorAll('span');
            
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        spans.forEach((span, index) => {
                            setTimeout(() => {
                                span.style.opacity = '1';
                                span.style.transform = 'translateY(0)';
                            }, index * 50);
                        });
                        observer.unobserve(element);
                    }
                });
            });
            
            observer.observe(element);
        });
    }
}

// Performance monitoring
class PerformanceMonitor {
    constructor() {
        this.init();
    }
    
    init() {
        this.monitorFPS();
        this.optimizeAnimations();
    }
    
    monitorFPS() {
        let lastTime = performance.now();
        let frames = 0;
        
        const checkFPS = (currentTime) => {
            frames++;
            
            if (currentTime >= lastTime + 1000) {
                const fps = Math.round((frames * 1000) / (currentTime - lastTime));
                
                if (fps < 30) {
                    this.reduceAnimations();
                }
                
                frames = 0;
                lastTime = currentTime;
            }
            
            requestAnimationFrame(checkFPS);
        };
        
        requestAnimationFrame(checkFPS);
    }
    
    reduceAnimations() {
        document.body.classList.add('reduced-motion');
        
        const style = document.createElement('style');
        style.textContent = `
            .reduced-motion * {
                animation-duration: 0.01ms !important;
                transition-duration: 0.01ms !important;
            }
        `;
        document.head.appendChild(style);
    }
    
    optimizeAnimations() {
        // Use will-change property for animated elements
        document.querySelectorAll('.hero-circle, .cashout-ticker, .game-slider').forEach(element => {
            element.style.willChange = 'transform';
        });
        
        // Use transform3d for hardware acceleration
        document.querySelectorAll('.task-card, .btn').forEach(element => {
            element.style.transform = 'translate3d(0, 0, 0)';
        });
    }
}

// Initialize all animation systems
document.addEventListener('DOMContentLoaded', function() {
    // Check if user prefers reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    
    if (!prefersReducedMotion) {
        new ScrollAnimations();
        new MouseEffects();
        new ParticleEffects();
        new TextAnimations();
    }
    
    new LoadingAnimations();
    new PerformanceMonitor();
    
    console.log('Animation systems initialized!');
});