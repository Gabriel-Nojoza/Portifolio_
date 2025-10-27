// Menu Mobile
document.addEventListener('DOMContentLoaded', function() {
    const menuMobile = document.querySelector('.menu-mobile');
    const navMenu = document.querySelector('nav ul');

    menuMobile.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        menuMobile.classList.toggle('active');
    });

    // Fechar menu ao clicar em um item
    const navLinks = document.querySelectorAll('nav ul li a');
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            menuMobile.classList.remove('active');
        });
    });

    // Adicionar classe active ao link do menu quando a seção estiver visível
    window.addEventListener('scroll', function() {
        const sections = document.querySelectorAll('section');
        const scrollPosition = window.scrollY;

        sections.forEach(section => {
            const sectionTop = section.offsetTop - 100;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.add('active');
            } else {
                document.querySelector('nav ul li a[href*=' + sectionId + ']').classList.remove('active');
            }
        });
    });

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.style.padding = '10px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
        } else {
            header.style.padding = '15px 0';
            header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.05)';
        }
    });

    // Formulário de contato
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Aqui você pode adicionar a lógica para enviar o formulário via AJAX
            // Por enquanto, apenas simulamos o envio
            
            const formData = new FormData(contactForm);
            const formValues = {};
            
            formData.forEach((value, key) => {
                formValues[key] = value;
            });
            
            console.log('Formulário enviado:', formValues);
            
            // Exibir mensagem de sucesso
            alert('Mensagem enviada com sucesso! Em breve entraremos em contato.');
            
            // Limpar formulário
            contactForm.reset();
        });
    }

    // Animação de entrada dos elementos quando visíveis na tela
    const animateOnScroll = function() {
        const elements = document.querySelectorAll('.skill-card, .projeto-card, .timeline-item, .contato-item');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3;
            
            if (elementPosition < screenPosition) {
                element.classList.add('animate');
            }
        });
    };

    // Adicionar classe para animação CSS
    const cards = document.querySelectorAll('.skill-card, .projeto-card, .timeline-item, .contato-item');
    cards.forEach(card => {
        card.classList.add('animate-on-scroll');
    });

    window.addEventListener('scroll', animateOnScroll);
    // Executar uma vez quando a página carrega
    animateOnScroll();

    // Adicionar efeito de digitação ao título principal
    const titleElement = document.querySelector('#home .text h1');
    if (titleElement) {
        const title = titleElement.textContent;
        titleElement.textContent = '';
        
        let i = 0;
        const typeWriter = function() {
            if (i < title.length) {
                titleElement.textContent += title.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        };
        
        setTimeout(typeWriter, 500);
    }
});

// Adicionar animação CSS para os elementos
document.head.insertAdjacentHTML('beforeend', `
<style>
.animate-on-scroll {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}
.animate-on-scroll.animate {
    opacity: 1;
    transform: translateY(0);
}
</style>
`);