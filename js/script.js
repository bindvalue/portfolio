// BindValue Portfolio JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Inicializar funcionalidades
    initLogoFallback();
    initServiceToggle();
    initSmoothScroll();
    initPlanButtons();
});

// Função para gerenciar fallback da logo
function initLogoFallback() {
    const logoImg = document.getElementById('logoImg');
    const logoFallback = document.getElementById('logoFallback');
    const footerLogoImg = document.getElementById('footerLogoImg');
    const footerLogoFallback = document.getElementById('footerLogoFallback');
    
    // Fallback para logo do header
    if (logoImg) {
        logoImg.addEventListener('error', function() {
            logoImg.style.display = 'none';
            logoFallback.style.display = 'flex';
        });
        
        logoImg.addEventListener('load', function() {
            logoImg.style.display = 'block';
            logoFallback.style.display = 'none';
        });
    }
    
    // Fallback para logo do footer
    if (footerLogoImg) {
        footerLogoImg.addEventListener('error', function() {
            footerLogoImg.style.display = 'none';
            footerLogoFallback.style.display = 'flex';
        });
        
        footerLogoImg.addEventListener('load', function() {
            footerLogoImg.style.display = 'block';
            footerLogoFallback.style.display = 'none';
        });
    }
}

// Função para alternar entre serviços
function initServiceToggle() {
    const serviceButtons = document.querySelectorAll('.service-btn');
    const serviceCards = document.querySelectorAll('.service-card');
    
    serviceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetService = this.getAttribute('data-service');
            
            // Remove active class from all buttons
            serviceButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Hide all service cards
            serviceCards.forEach(card => card.classList.remove('active'));
            
            // Show target service card
            const targetCard = document.getElementById(`service-${targetService}`);
            if (targetCard) {
                targetCard.classList.add('active');
            }
        });
    });
}

// Função para scroll suave
function initSmoothScroll() {
    const links = document.querySelectorAll('a[href^="#"]');
    
    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Função para botões de planos
function initPlanButtons() {
    const planButtons = document.querySelectorAll('.plan-btn');
    
    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Mensagem personalizada baseada no plano
            const planCard = this.closest('.plan-card');
            const planName = planCard.querySelector('h4').textContent;
            
            let message = '';
            switch(planName.toLowerCase()) {
                case 'inicial':
                    message = 'Olá! Tenho interesse no plano Inicial de IA (R$ 159,99). Gostaria de mais informações.';
                    break;
                case 'avançado':
                    message = 'Olá! Tenho interesse no plano Avançado de IA (R$ 199,90). Gostaria de mais informações.';
                    break;
                case 'premium':
                    message = 'Olá! Tenho interesse no plano Premium de IA (R$ 229,90). Gostaria de mais informações.';
                    break;
                case 'customizado':
                    message = 'Olá! Tenho interesse no plano Customizado de IA. Gostaria de discutir uma solução personalizada.';
                    break;
                case 'completo':
                    message = 'Olá! Tenho interesse no plano Completo de Assinatura Digital (R$ 299,90). Gostaria de mais informações.';
                    break;
                default:
                    message = 'Olá! Gostaria de mais informações sobre os planos da BindValue.';
            }
            
            // Abrir WhatsApp com mensagem personalizada
            const whatsappUrl = `https://wa.me/5531983297433?text=${encodeURIComponent(message)}`;
            window.open(whatsappUrl, '_blank');
        });
    });
}

// Função para animações ao scroll (opcional)
function initScrollAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observar elementos para animação
    const animatedElements = document.querySelectorAll('.benefit-card, .plan-card, .service-card');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Função para detectar se é mobile
function isMobile() {
    return window.innerWidth <= 768;
}

// Função para otimizações mobile
function initMobileOptimizations() {
    if (isMobile()) {
        // Adicionar classe mobile ao body
        document.body.classList.add('mobile');
        
        // Otimizar touch events
        document.addEventListener('touchstart', function() {}, { passive: true });
    }
}

// Função para lazy loading de imagens
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Função para analytics (opcional)
function trackEvent(eventName, eventData) {
    // Implementar tracking de eventos aqui
    console.log('Event tracked:', eventName, eventData);
}

// Event listeners para tracking
document.addEventListener('click', function(e) {
    // Track clicks em botões importantes
    if (e.target.matches('.btn-primary')) {
        trackEvent('button_click', {
            button_text: e.target.textContent.trim(),
            section: e.target.closest('section')?.className || 'unknown'
        });
    }
    
    // Track clicks em links do WhatsApp
    if (e.target.closest('a[href*="wa.me"]')) {
        trackEvent('whatsapp_click', {
            button_text: e.target.textContent.trim()
        });
    }
});

// Inicializar otimizações adicionais
document.addEventListener('DOMContentLoaded', function() {
    initMobileOptimizations();
    initLazyLoading();
    
    // Inicializar animações após um pequeno delay
    setTimeout(initScrollAnimations, 100);
});

// Função para redimensionamento da janela
window.addEventListener('resize', function() {
    // Reajustar elementos se necessário
    if (isMobile()) {
        document.body.classList.add('mobile');
    } else {
        document.body.classList.remove('mobile');
    }
});

// Função para melhorar performance
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Aplicar debounce ao resize
window.addEventListener('resize', debounce(function() {
    // Código de redimensionamento aqui
}, 250));

