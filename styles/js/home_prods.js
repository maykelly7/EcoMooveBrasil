// Scroll suave para produtos
function scrollToProducts() {
    document.getElementById('produtos').scrollIntoView({
        behavior: 'smooth'
    });
}

// Animação dos cards ao scroll
function animateCards() {
    const cards = document.querySelectorAll('.product-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add('animate');
                }, index * 100);
            }
        });
    });
    
    cards.forEach(card => observer.observe(card));
}

// Botões adicionar ao carrinho
document.addEventListener('DOMContentLoaded', function() {
    const addButtons = document.querySelectorAll('.add-cart-btn');
    
    addButtons.forEach(button => {
        button.addEventListener('click', function() {
            const productName = this.parentElement.querySelector('h3').textContent;
            const productPrice = this.parentElement.querySelector('.product-price').textContent;
            
            // Efeito de clique
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
            
            // Simular adição ao carrinho
            alert(`${productName} adicionado ao carrinho por ${productPrice}!`);
        });
    });
    
    animateCards();
});

// Navbar scroll effect
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.style.background = 'rgba(0,0,0,0.1)';
        header.style.backdropFilter = 'blur(20px)';
    } else {
        header.style.background = 'transparent';
        header.style.backdropFilter = 'blur(10px)';
    }
});