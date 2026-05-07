document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');
    const offerTabs = document.querySelectorAll('.offer-tab');
    const offerCards = document.querySelectorAll('.offer-card');

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            tabContents.forEach(content => content.classList.remove('active'));
            document.getElementById(tabName).classList.add('active');
        });
    });

    offerTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const offerName = this.getAttribute('data-offer');
            
            offerTabs.forEach(t => t.classList.remove('active'));
            this.classList.add('active');
            
            offerCards.forEach(card => card.classList.remove('active'));
            document.getElementById(offerName).classList.add('active');
        });
    });

    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href.startsWith('#')) {
                e.preventDefault();
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });

    const ctaButton = document.querySelector('.cta-button');
    if (ctaButton) {
        ctaButton.addEventListener('click', function() {
            document.getElementById('destinos').scrollIntoView({ behavior: 'smooth' });
        });
    }

    const contactForm = document.querySelector('.contact-form form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const nombre = this.querySelector('input[type="text"]');
            const email = this.querySelector('input[type="email"]');
            const mensaje = this.querySelector('textarea');
            
            if (nombre.value.trim() && email.value.trim() && mensaje.value.trim()) {
                alert('Gracias por tu mensaje. Nos pondremos en contacto pronto.');
                this.reset();
            } else {
                alert('Por favor, completa todos los campos.');
            }
        });
    }
});