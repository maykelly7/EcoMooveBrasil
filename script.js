
// Registrar o plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

// 1. Animação do Preloader
const tl = gsap.timeline();

// Anima a barra de carregamento
tl.to(".loader-bar", { width: "100%", duration: 1.5, ease: "power2.inOut" })
    .to(".loader-text", { opacity: 1, duration: 0.5 })
    // Esconde o loader
    .to(".loader", { y: "-100%", duration: 1, ease: "expo.inOut" })
    // Anima o conteúdo do Hero (aparece depois que o loader sai)
    .to(".hero h1", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.5")
    .to(".hero p", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8")
    .to(".btn", { opacity: 1, y: 0, duration: 1, ease: "power3.out" }, "-=0.8");

// 2. Efeito Parallax na Imagem de Fundo
gsap.to(".hero-bg", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true // A animação segue o scroll
    },
    y: 200 // Move a imagem para baixo enquanto rola
});

// 3. Animação dos Cards (Scroll Reveal)
// Seleciona todos os cards
const cards = document.querySelectorAll('.card');

cards.forEach((card, index) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%", // Começa quando o topo do card chega a 85% da tela
            toggleActions: "play none none reverse"
        },
        opacity: 1,
        y: 0,
        duration: 0.8,
        delay: index * 0.2, // Delay em cascata (um depois do outro)
        ease: "power3.out"
    });
});

// 4. Animação do Título da Seção
gsap.to(".section-header", {
    scrollTrigger: {
        trigger: ".products",
        start: "top 70%"
    },
    opacity: 1,
    y: -20,
    duration: 1
});

