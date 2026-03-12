gsap.registerPlugin(ScrollTrigger);

gsap.to(".hero-bg", {
    scrollTrigger: {
        trigger: ".hero",
        start: "top top",
        end: "bottom top",
        scrub: true
    },
    y: 200
});

gsap.to(".products", {
    scrollTrigger: {
        trigger: ".products",
        start: "top 90%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
    },
    y: -100,
    boxShadow: "0 30px 60px rgba(0,0,0,0.3)",
    scale: 1.02,
    ease: "power2.out"
});

gsap.to(".section-header", {
    scrollTrigger: {
        trigger: ".products",
        start: "top 70%"
    },
    opacity: 1,
    y: -20,
    duration: 1
});

gsap.utils.toArray(".card").forEach((card, i) => {
    gsap.to(card, {
        scrollTrigger: {
            trigger: card,
            start: "top 85%"
        },
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: i * 0.1,
        ease: "power3.out"
    });
});