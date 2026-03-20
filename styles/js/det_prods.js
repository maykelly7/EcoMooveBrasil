// Array COMPLETO com TODAS as 7 motos da home
const motos = [
    // PRINCIPAIS (EG1 & ES1)
    {
        id: 1,
        nome: "EG1 2026",
        preco: 23900,
        imagens: ["../img/modelo1.jpeg", "../img/modelo2.jpeg"],
        thumb: "../img/modelo1.jpeg",
        descricao: "EG1 2026 - A nova geração da scooter elétrica urbana. Mais potência, design renovado e tecnologia de ponta para 2026.",
        km: "0 km",
        ano: "2026",
        cor: "Preto Fosco",
        potencia: "1200W",
        autonomia: "70 km",
        velocidade: "50 km/h",
        bateria: "Lítio 60V 25Ah",
        telefone: "5511999999999"
    },
    {
        id: 2,
        nome: "EG1 Essential",
        preco: 22900,
        imagens: ["../img/modelo1.jpeg", "../img/modelo2.jpeg"],
        thumb: "../img/modelo2.jpeg",
        descricao: "EG1 Essential - Scooter elétrica urbana ideal para o dia a dia. Econômica, silenciosa e sustentável.",
        km: "0 km",
        ano: "2025",
        cor: "Preto Fosco",
        potencia: "1000W",
        autonomia: "60 km",
        velocidade: "45 km/h",
        bateria: "Lítio 60V 20Ah",
        telefone: "5511999999999"
    },
    {
        id: 3,
        nome: "ES1 2025",
        preco: 21500,
        imagens: ["../img/modelo4.jpeg", "../img/modelo5.jpeg", "../img/modelo6.jpeg"],
        thumb: "../img/modelo4.jpeg",
        descricao: "ES1 2025 - Scooter elétrica com ótimo desempenho urbano, design esportivo e baixo custo de manutenção.",
        km: "0 km",
        ano: "2025",
        cor: "Azul Escuro",
        potencia: "1000W",
        autonomia: "70 km",
        velocidade: "50 km/h",
        bateria: "Lítio 60V 25Ah",
        telefone: "5511999999999"
    },
    {
        id: 4,
        nome: "ES1 2026",
        preco: 25500,
        imagens: ["../img/modelo4.jpeg", "../img/modelo5.jpeg", "../img/modelo6.jpeg"],
        thumb: "../img/modelo5.jpeg",
        descricao: "ES1 2026 - Nova versão com logo atualizado, mais autonomia e acabamento premium. A escolha perfeita para 2026!",
        km: "0 km",
        ano: "2026",
        cor: "Azul Escuro",
        potencia: "1200W",
        autonomia: "80 km",
        velocidade: "55 km/h",
        bateria: "Lítio 60V 30Ah",
        telefone: "5511999999999"
    },
    // AUTOPROPELIDOS
    {
        id: 5,
        nome: "Scooter Dot  1.000Watts",
        preco: 13500,
        imagens: ["../img/modelo11.jpeg"],
        thumb: "../img/modelo11.jpeg",  // ✅ MUDADO PARA MODELO9
        descricao: "DOT - Scooter elétrica moderna com ótima autonomia e bateria de alta durabilidade. *Não precisa de CNH!*",
        km: "0 km",
        ano: "2025",
        cor: "Cinza/Branco",
        potencia: "1000W",
        autonomia: "80 km",
        velocidade: "55 km/h",
        bateria: "Lítio 60V 30Ah",
        telefone: "5511999999999"
    },
    {
        id: 6,
        nome: "Jet 1000Watts",
        preco: 12500,
        imagens: ["../img/modelo10.jpeg"],
        thumb: "../img/modelo10.jpeg",
        descricao: "JET - Scooter elétrica ágil e econômica para uso urbano. *Não precisa de CNH!* Perfeita para entregas e deslocamentos diários.",
        km: "0 km",
        ano: "2025",
        cor: "Azul",
        potencia: "1000W",
        autonomia: "70 km",
        velocidade: "50 km/h",
        bateria: "Lítio 60V 25Ah",
        telefone: "5511999999999"
    },
    {
        id: 7,
        nome: "X12",
        preco: 12500,
        imagens: ["../img/modelo9.jpeg", "../img/modelo8.jpeg"],
        thumb: "../img/modelo9.jpeg",
        descricao: "X12 - Scooter elétrica premium com maior potência, conforto e tecnologia embarcada. *Não precisa de CNH!*",
        km: "0 km",
        ano: "2025",
        cor: "Preto",
        potencia: "1000W",
        autonomia: "40 a 50 km",
        velocidade: "32 km/h",
        bateria: "Lítio 60V 20Ah (removível)",
        telefone: "5511999999999"
    }
];

document.addEventListener('DOMContentLoaded', function () {
    console.log('🔍 det_prods.js carregado!');

    // Pega o ID da URL
    const urlParams = new URLSearchParams(window.location.search);
    const motoId = parseInt(urlParams.get('id'));
    console.log('📊 ID da moto:', motoId);

    const moto = motos.find(m => m.id === motoId);
    console.log('🏍️ Moto encontrada:', moto ? moto.nome : 'NENHUMA');

    if (moto) {
        renderMotoDetalhes(moto);
    } else {
        document.getElementById('motoDetalhes').innerHTML = `
            <div style="text-align:center; padding: 50px;">
                <h2 style="color: #00ff88; font-size: 2.5rem;">❌ Scooter não encontrada!</h2>
                <p style="font-size: 1.2rem; margin: 20px 0;">ID: ${motoId}</p>
                <a href="home_prods.html" class="cta-button" style="font-size: 1.2rem; padding: 15px 40px;">
                    ← Voltar para Scooters
                </a>
            </div>
        `;
        console.error('❌ Moto ID', motoId, 'não encontrada!');
    }
});

function renderMotoDetalhes(moto) {
    console.log('🎨 Renderizando detalhes:', moto.nome);

    const container = document.getElementById('motoDetalhes');
    container.innerHTML = `
        <div class="moto-gallery">
            <div class="gallery-main">
                <img id="mainImage" src="${moto.imagens[0]}" alt="${moto.nome}" 
                     onerror="this.src='../img/moto1.jpeg'; console.log('🔄 Fallback imagem principal')">
            </div>
            <div class="gallery-thumbs">
                ${moto.imagens.map((img, index) => `
                    <img src="${img}" alt="Foto ${index + 1}" 
                         onclick="trocarFoto('${img}')" 
                         class="${index === 0 ? 'active' : ''}"
                         onerror="this.style.display='none'">
                `).join('')}
            </div>
        </div>

        <div class="moto-content">
            <div class="moto-header">
                <h1>${moto.nome}</h1>
                <div class="moto-preco-final">R$ ${formatarPreco(moto.preco)}</div>
            </div>

            <div class="moto-desc">
                <p>${moto.descricao}</p>
            </div>

            <div class="moto-specs">
                <div class="spec-item">
                    <i class="fas fa-road"></i>
                    <span><strong>Km:</strong> ${moto.km}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-calendar"></i>
                    <span><strong>Ano:</strong> ${moto.ano}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-palette"></i>
                    <span><strong>Cor:</strong> ${moto.cor}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-bolt"></i>
                    <span><strong>Potência:</strong> ${moto.potencia}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-battery-full"></i>
                    <span><strong>Autonomia:</strong> ${moto.autonomia}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-tachometer-alt"></i>
                    <span><strong>Máx:</strong> ${moto.velocidade}</span>
                </div>
                <div class="spec-item">
                    <i class="fas fa-car-battery"></i>
                    <span><strong>Bateria:</strong> ${moto.bateria}</span>
                </div>
            </div>

            <div class="moto-actions">
                <a href="https://wa.me/${moto.telefone}?text=👋 Olá! Tenho interesse na *${moto.nome}*!\n\n💰 Valor: R$ ${formatarPreco(moto.preco)}\n📏 ${moto.km} | 🎯 ${moto.ano}\n⚡ ${moto.potencia} | ${moto.autonomia}\n\nPode me passar mais detalhes? 📲" 
                   class="whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Falar no WhatsApp
                </a>
                <a href="home_prods.html" class="back-btn">
                    <i class="fas fa-arrow-left"></i> Ver Todas Scooters
                </a>
            </div>
        </div>
    `;

    console.log('✅ Detalhes renderizados com sucesso!');
}

function trocarFoto(src) {
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = src;
        mainImage.onerror = () => mainImage.src = '../img/moto1.jpeg';
    }

    // Remove active de todas e adiciona na clicada
    document.querySelectorAll('.gallery-thumbs img').forEach(img => img.classList.remove('active'));
    event.target.classList.add('active');

    console.log('📸 Foto trocada:', src);
}

function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR');
}