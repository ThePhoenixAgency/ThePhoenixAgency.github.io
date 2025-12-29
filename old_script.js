// Initialisation des icônes Lucide
document.addEventListener('DOMContentLoaded', function() {
    lucide.createIcons();
    
    // Initialisation de toutes les fonctionnalités
    initNavigation();
    initAnimations();
    initCounters();
    initFormHandling();
    initScrollEffects();
});

// Navigation mobile
function initNavigation() {
    const mobileMenu = document.getElementById('mobile-menu');
    const navMenu = document.querySelector('.nav-menu');
    
    if (mobileMenu && navMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('active');
            mobileMenu.classList.toggle('active');
        });
        
        // Fermer le menu mobile quand on clique sur un lien
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', function() {
                navMenu.classList.remove('active');
                mobileMenu.classList.remove('active');
            });
        });
    }
    
    // Navbar transparente au scroll
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 20px rgba(0,0,0,0.1)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = 'none';
        }
    });
}

// Animations au scroll
function initAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);
    
    // Observer tous les éléments avec la classe fade-in
    document.querySelectorAll('.service-card, .project-card, .tech-category, .contact-method').forEach(el => {
        el.classList.add('fade-in');
        observer.observe(el);
    });
    
    // Animation des cartes flottantes supplémentaires
    const floatingCards = document.querySelectorAll('.floating-card');
    floatingCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.5}s`;
    });
}

// Compteurs animés
function initCounters() {
    const counters = document.querySelectorAll('.stat-number');
    const counterOptions = {
        threshold: 0.5,
        rootMargin: '0px'
    };
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.getAttribute('data-target'));
                
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, counterOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 50;
    const duration = 2000;
    const stepTime = duration / 50;
    
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, stepTime);
}

// Gestion du formulaire de contact
function initFormHandling() {
    const form = document.querySelector('.contact-form form');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            handleFormSubmission(form);
        });
    }
}

async function handleFormSubmission(form) {
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    
    // État de chargement
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i data-lucide="loader-2"></i> Envoi en cours...';
    lucide.createIcons();
    
    // Simuler l'envoi du formulaire
    try {
        await new Promise(resolve => setTimeout(resolve, 2000));
        
        // Succès
        submitBtn.innerHTML = '<i data-lucide="check"></i> Message envoyé !';
        submitBtn.style.background = '#10B981';
        
        // Réinitialiser le formulaire
        form.reset();
        
        // Message de confirmation
        showNotification('Merci ! Votre message a été envoyé avec succès. Nous vous répondrons rapidement.', 'success');
        
    } catch (error) {
        // Erreur
        submitBtn.innerHTML = '<i data-lucide="x"></i> Erreur lors de l\'envoi';
        submitBtn.style.background = '#EF4444';
        showNotification('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.', 'error');
    }
    
    // Restaurer le bouton après 3 secondes
    setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
        submitBtn.style.background = '';
        lucide.createIcons();
    }, 3000);
}

// Système de notifications
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <i data-lucide="${type === 'success' ? 'check-circle' : 'alert-circle'}"></i>
            <span>${message}</span>
            <button class="notification-close" onclick="this.parentElement.parentElement.remove()">
                <i data-lucide="x"></i>
            </button>
        </div>
    `;
    
    // Styles pour la notification
    Object.assign(notification.style, {
        position: 'fixed',
        top: '20px',
        right: '20px',
        zIndex: '10000',
        padding: '1rem',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        maxWidth: '400px',
        opacity: '0',
        transform: 'translateX(100%)',
        transition: 'all 0.3s ease',
        background: type === 'success' ? '#10B981' : '#EF4444',
        color: 'white'
    });
    
    notification.querySelector('.notification-content').style.display = 'flex';
    notification.querySelector('.notification-content').style.alignItems = 'center';
    notification.querySelector('.notification-content').style.gap = '0.5rem';
    
    const closeBtn = notification.querySelector('.notification-close');
    Object.assign(closeBtn.style, {
        background: 'none',
        border: 'none',
        color: 'white',
        cursor: 'pointer',
        marginLeft: 'auto'
    });
    
    document.body.appendChild(notification);
    lucide.createIcons();
    
    // Animation d'entrée
    requestAnimationFrame(() => {
        notification.style.opacity = '1';
        notification.style.transform = 'translateX(0)';
    });
    
    // Auto-suppression après 5 secondes
    setTimeout(() => {
        notification.style.opacity = '0';
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentElement) {
                notification.remove();
            }
        }, 300);
    }, 5000);
}

// Effets de scroll
function initScrollEffects() {
    // Parallax léger pour les sections
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const parallaxElements = document.querySelectorAll('.floating-card');
        const speed = 0.5;
        
        parallaxElements.forEach(element => {
            const yPos = -(scrolled * speed);
            element.style.transform = `translateY(${yPos}px)`;
        });
    });
    
    // Smooth scroll pour les liens d'ancrage
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            
            if (target) {
                const offsetTop = target.offsetTop - 80; // Compensation pour la navbar fixe
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Gestion du thème sombre (bonus)
function initThemeToggle() {
    const themeToggle = document.createElement('button');
    themeToggle.className = 'theme-toggle';
    themeToggle.innerHTML = '<i data-lucide="moon"></i>';
    themeToggle.setAttribute('aria-label', 'Basculer le thème');
    
    Object.assign(themeToggle.style, {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '50px',
        height: '50px',
        borderRadius: '50%',
        background: 'var(--primary-color)',
        color: 'white',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
        zIndex: '1000',
        transition: 'all 0.3s ease'
    });
    
    document.body.appendChild(themeToggle);
    lucide.createIcons();
    
    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        themeToggle.innerHTML = `<i data-lucide="${isDark ? 'sun' : 'moon'}"></i>`;
        lucide.createIcons();
    });
}

// Fonction utilitaire pour débouncer les événements
function debounce(func, wait, immediate) {
    let timeout;
    return function executedFunction() {
        const context = this;
        const args = arguments;
        const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
        };
        const callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Performance: utilisation de requestAnimationFrame pour les animations de scroll
let ticking = false;

function updateScrollEffects() {
    // Code d'animation de scroll optimisé
    ticking = false;
}

window.addEventListener('scroll', function() {
    if (!ticking) {
        requestAnimationFrame(updateScrollEffects);
        ticking = true;
    }
});

// Gestion des erreurs JavaScript
window.addEventListener('error', function(e) {
    console.error('Erreur JavaScript:', e.error);
});

// Analytics et tracking (à remplacer par votre solution d'analytics)
function trackEvent(eventName, eventData = {}) {
    // Exemple avec Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
    
    // Console log pour le développement
    console.log('Event tracked:', eventName, eventData);
}

// Tracker les interactions importantes
document.addEventListener('click', function(e) {
    if (e.target.matches('.btn-primary')) {
        trackEvent('button_click', {
            button_text: e.target.textContent.trim(),
            button_location: e.target.closest('section')?.id || 'unknown'
        });
    }
    
    if (e.target.matches('.project-link')) {
        trackEvent('project_click', {
            project_name: e.target.closest('.project-card').querySelector('h3').textContent
        });
    }
});

// Lazy loading pour les images (si des images sont ajoutées plus tard)
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries) => {
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
}

// Service Worker pour la mise en cache (PWA ready)
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

// Language selector
const translations = {
    en: {
        'hero-title': 'Transform your business with Artificial Intelligence',
        'hero-desc': 'AI, NoCode, Automation and Cybersecurity specialists. We bring your digital projects to life with custom solutions.',
        'nav-home': 'Home',
        'nav-services': 'Services',
        'nav-expertise': 'Expertise',
        'nav-projects': 'Projects',
        'nav-contact': 'Contact',
        'cta-start': 'Start your project',
        'cta-discover': 'Discover our services'
    },
    fr: {
        'hero-title': "Transformez votre entreprise avec l'Intelligence Artificielle",
        'hero-desc': 'Spécialistes en IA, NoCode, Automatisation et Cybersécurité. Nous donnons vie à vos projets digitaux avec des solutions sur mesure.',
        'nav-home': 'Accueil',
        'nav-services': 'Services',
        'nav-expertise': 'Expertise',
        'nav-projects': 'Projets',
        'nav-contact': 'Contact',
        'cta-start': 'Démarrer votre projet',
        'cta-discover': 'Découvrir nos services'
    }
};

function initLanguageSelector() {
    const langFr = document.getElementById('lang-fr');
    const langEn = document.getElementById('lang-en');
    
    if (langFr && langEn) {
        langFr.addEventListener('click', () => setLanguage('fr'));
        langEn.addEventListener('click', () => setLanguage('en'));
    }
}

function setLanguage(lang) {
    const langFr = document.getElementById('lang-fr');
    const langEn = document.getElementById('lang-en');
    
    if (lang === 'fr') {
        langFr.classList.add('active');
        langEn.classList.remove('active');
        document.documentElement.lang = 'fr';
    } else {
        langEn.classList.add('active');
        langFr.classList.remove('active');
        document.documentElement.lang = 'en';
    }
    localStorage.setItem('lang', lang);
}

document.addEventListener('DOMContentLoaded', function() {
    initLanguageSelector();
    const savedLang = localStorage.getItem('lang') || 'fr';
    setLanguage(savedLang);
});
