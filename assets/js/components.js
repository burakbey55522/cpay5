// Component-specific JavaScript functionality

// Featured Tasks Component
class FeaturedTasks {
    constructor() {
        this.tasks = [
            {
                id: 1,
                title: 'Video İzle',
                description: 'Tanıtım videolarını izleyin ve anında kazanın',
                earnings: '$0.25 - $2.00',
                icon: '▶️',
                category: 'Eğlence',
                color: 'linear-gradient(135deg, #ef4444, #dc2626)'
            },
            {
                id: 2,
                title: 'Uygulama İncelemesi',
                description: 'Uygulamaları test edin ve dürüst incelemeler yazın',
                earnings: '$1.50 - $5.00',
                icon: '⭐',
                category: 'Test',
                color: 'linear-gradient(135deg, #f59e0b, #d97706)'
            },
            {
                id: 3,
                title: 'Sosyal Paylaşım',
                description: 'Sosyal platformlarda içerik paylaşın',
                earnings: '$0.50 - $3.00',
                icon: '📤',
                category: 'Sosyal',
                color: 'linear-gradient(135deg, #3b82f6, #2563eb)'
            },
            {
                id: 4,
                title: 'Anketler',
                description: 'Pazar araştırması anketlerini tamamlayın',
                earnings: '$2.00 - $8.00',
                icon: '💬',
                category: 'Araştırma',
                color: 'linear-gradient(135deg, #8b5cf6, #7c3aed)'
            },
            {
                id: 5,
                title: 'İçerik Yazımı',
                description: 'Makale ve blog yazıları oluşturun',
                earnings: '$5.00 - $25.00',
                icon: '✏️',
                category: 'Yaratıcı',
                color: 'linear-gradient(135deg, #10b981, #059669)'
            },
            {
                id: 6,
                title: 'Web Sitesi Ziyareti',
                description: 'Web sitelerini ziyaret edin ve sayfaları gezin',
                earnings: '$0.10 - $1.00',
                icon: '👁️',
                category: 'Gezinti',
                color: 'linear-gradient(135deg, #6366f1, #4f46e5)'
            }
        ];
        
        this.currentTaskIndex = 0;
        this.init();
    }
    
    init() {
        this.renderCurrentTask();
        this.renderTaskGrid();
        this.startRotation();
    }
    
    renderCurrentTask() {
        const currentTaskElement = document.getElementById('currentTask');
        if (!currentTaskElement) return;
        
        const task = this.tasks[this.currentTaskIndex];
        
        currentTaskElement.innerHTML = `
            <div style="background: ${task.color}; padding: 1.5rem; border-radius: 1rem; color: white; transition: all 0.5s ease;">
                <div style="display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;">
                    <div style="background: rgba(255, 255, 255, 0.2); padding: 0.75rem; border-radius: 0.75rem; font-size: 1.5rem;">
                        ${task.icon}
                    </div>
                    <div>
                        <h4 style="font-size: 1.5rem; font-weight: 900; margin-bottom: 0.25rem;">${task.title}</h4>
                        <p style="color: rgba(255, 255, 255, 0.8); font-weight: 500; margin: 0;">${task.category}</p>
                    </div>
                </div>
                <p style="color: rgba(255, 255, 255, 0.9); margin-bottom: 1rem; font-weight: 500;">${task.description}</p>
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <span style="font-size: 1.5rem; font-weight: 900;">${task.earnings}</span>
                    <button style="background: rgba(255, 255, 255, 0.2); border: none; color: white; padding: 0.5rem 1rem; border-radius: 0.5rem; font-weight: 700; cursor: pointer; transition: background 0.3s ease;" 
                            onmouseover="this.style.background='rgba(255, 255, 255, 0.3)'" 
                            onmouseout="this.style.background='rgba(255, 255, 255, 0.2)'">
                        Şimdi Başla
                    </button>
                </div>
            </div>
        `;
    }
    
    renderTaskGrid() {
        const taskGridElement = document.getElementById('taskGrid');
        if (!taskGridElement) return;
        
        taskGridElement.innerHTML = this.tasks.slice(0, 6).map((task, index) => `
            <div class="task-grid-item ${index === this.currentTaskIndex ? 'active' : ''}" 
                 onclick="featuredTasks.setCurrentTask(${index})"
                 style="cursor: pointer; transition: all 0.3s ease;">
                <div style="background: ${task.color}; padding: 0.5rem; border-radius: 0.5rem; display: inline-block; margin-bottom: 0.5rem; font-size: 0.875rem;">
                    ${task.icon}
                </div>
                <div style="font-size: 0.75rem; font-weight: 700; color: #374151; margin-bottom: 0.25rem;">${task.title}</div>
                <div style="font-size: 0.75rem; color: #10b981; font-weight: 700;">${task.earnings.split(' - ')[0]}</div>
            </div>
        `).join('');
    }
    
    setCurrentTask(index) {
        this.currentTaskIndex = index;
        this.renderCurrentTask();
        this.renderTaskGrid();
    }
    
    startRotation() {
        setInterval(() => {
            this.currentTaskIndex = (this.currentTaskIndex + 1) % this.tasks.length;
            this.renderCurrentTask();
            this.renderTaskGrid();
        }, 4000);
    }
}

// Live Cashout Component
class LiveCashout {
    constructor() {
        this.cashouts = [
            { id: 1, username: 'alex_m', amount: '$12.45', country: 'USA', flag: 'https://www.coinpayu.com/static/images/flags/us.svg', time: '2dk önce' },
            { id: 2, username: 'sarah_k', amount: '$8.90', country: 'UK', flag: 'https://www.coinpayu.com/static/images/flags/gb.svg', time: '3dk önce' },
            { id: 3, username: 'carlos_r', amount: '$15.30', country: 'Spain', flag: 'https://www.coinpayu.com/static/images/flags/es.svg', time: '5dk önce' },
            { id: 4, username: 'maria_s', amount: '$7.25', country: 'Brazil', flag: 'https://www.coinpayu.com/static/images/flags/br.svg', time: '6dk önce' },
            { id: 5, username: 'yuki_t', amount: '$22.10', country: 'Japan', flag: 'https://www.coinpayu.com/static/images/flags/jp.svg', time: '8dk önce' },
            { id: 6, username: 'ahmed_h', amount: '$9.75', country: 'UAE', flag: 'https://www.coinpayu.com/static/images/flags/ae.svg', time: '10dk önce' },
            { id: 7, username: 'lisa_w', amount: '$11.60', country: 'Germany', flag: 'https://www.coinpayu.com/static/images/flags/de.svg', time: '12dk önce' },
            { id: 8, username: 'raj_p', amount: '$6.40', country: 'India', flag: 'https://www.coinpayu.com/static/images/flags/in.svg', time: '14dk önce' },
            { id: 9, username: 'pierre_l', amount: '$18.95', country: 'France', flag: 'https://www.coinpayu.com/static/images/flags/fr.svg', time: '16dk önce' },
            { id: 10, username: 'anna_k', amount: '$13.20', country: 'Poland', flag: 'https://www.coinpayu.com/static/images/flags/pl.svg', time: '18dk önce' }
        ];
        
        this.init();
    }
    
    init() {
        this.renderCashouts();
    }
    
    renderCashouts() {
        const cashoutTickerElement = document.getElementById('cashoutTicker');
        if (!cashoutTickerElement) return;
        
        // Duplicate the array for seamless loop
        const duplicatedCashouts = [...this.cashouts, ...this.cashouts];
        
        cashoutTickerElement.innerHTML = duplicatedCashouts.map(cashout => `
            <div class="cashout-item">
                <img src="${cashout.flag}" alt="${cashout.country}" class="cashout-flag">
                <span class="cashout-username">${cashout.username}</span>
                <span class="cashout-amount">${cashout.amount}</span>
                <span class="cashout-time">${cashout.time}</span>
            </div>
        `).join('');
    }
}

// Game Slider Component
class GameSlider {
    constructor() {
        this.games = [
            { title: 'Monopoly Go!', image: 'https://www.coinpayu.com/static/newImg/index/offer2.jpg', reward: '$254' },
            { title: 'AFK Journey', image: 'https://www.coinpayu.com/static/newImg/index/offer4.png', reward: '$504' },
            { title: 'Mafia City', image: 'https://www.coinpayu.com/static/newImg/index/offer5.png', reward: '$422' },
            { title: 'Candy Match', image: 'https://www.coinpayu.com/static/newImg/index/offer6.jpg', reward: '$111' },
            { title: 'Dice Dreams', image: 'https://www.coinpayu.com/static/newImg/index/offer7.jpg', reward: '$49' },
            { title: 'Grab A Toy', image: 'https://www.coinpayu.com/static/newImg/index/offer8.jpg', reward: '$178' }
        ];
        
        this.init();
    }
    
    init() {
        this.renderGames();
    }
    
    renderGames() {
        const gameSliderElement = document.getElementById('gameSlider');
        if (!gameSliderElement) return;
        
        // Duplicate the array for seamless loop
        const duplicatedGames = [...this.games, ...this.games];
        
        gameSliderElement.innerHTML = duplicatedGames.map(game => `
            <div class="game-item">
                <img src="${game.image}" alt="${game.title}">
                <div class="game-title">${game.title}</div>
                <div class="game-reward">${game.reward}</div>
            </div>
        `).join('');
    }
}

// Form Validation
class FormValidator {
    static validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    static validateForm(formData) {
        const errors = [];
        
        if (!formData.email || !this.validateEmail(formData.email)) {
            errors.push('Geçerli bir e-posta adresi girin');
        }
        
        if (!formData.password || formData.password.length < 6) {
            errors.push('Şifre en az 6 karakter olmalıdır');
        }
        
        return {
            isValid: errors.length === 0,
            errors: errors
        };
    }
}

// Notification System
class NotificationSystem {
    static show(message, type = 'info', duration = 3000) {
        const notification = document.createElement('div');
        notification.className = `notification notification-${type}`;
        notification.style.cssText = `
            position: fixed;
            top: 20px;
            right: 20px;
            padding: 1rem 1.5rem;
            border-radius: 0.5rem;
            color: white;
            font-weight: 600;
            z-index: 10000;
            transform: translateX(100%);
            transition: transform 0.3s ease;
            max-width: 300px;
            box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
        `;
        
        // Set background color based on type
        const colors = {
            success: '#10b981',
            error: '#ef4444',
            warning: '#f59e0b',
            info: '#3b82f6'
        };
        
        notification.style.background = colors[type] || colors.info;
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        // Animate in
        setTimeout(() => {
            notification.style.transform = 'translateX(0)';
        }, 100);
        
        // Animate out and remove
        setTimeout(() => {
            notification.style.transform = 'translateX(100%)';
            setTimeout(() => {
                document.body.removeChild(notification);
            }, 300);
        }, duration);
    }
}

// Initialize components when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Initialize components
    window.featuredTasks = new FeaturedTasks();
    window.liveCashout = new LiveCashout();
    window.gameSlider = new GameSlider();
    
    // Add click handlers for buttons
    document.querySelectorAll('.btn-primary').forEach(button => {
        button.addEventListener('click', function(e) {
            e.preventDefault();
            NotificationSystem.show('Kayıt sayfasına yönlendiriliyorsunuz...', 'info');
            
            // Simulate redirect delay
            setTimeout(() => {
                // In a real application, this would redirect to the registration page
                console.log('Redirecting to registration...');
            }, 1000);
        });
    });
    
    // Add hover effects to task cards
    document.querySelectorAll('.task-card').forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // Add click effects to app items
    document.querySelectorAll('.app-item').forEach(item => {
        item.addEventListener('click', function() {
            NotificationSystem.show('Uygulama test görevi başlatılıyor...', 'success');
        });
    });
    
    console.log('All components initialized successfully!');
});