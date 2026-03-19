const motos = [
    {
        id: 1,
        nome: "EG1 Essencial",
        preco: 15900,
        imagens: ["../img/modelo1.jpeg", "../img/modelo2.jpeg"],
        thumb: "../img/modelo1.jpeg",
        descricao: "EG1 Essencial - Scooter elétrica ideal para mobilidade urbana. Econômica, silenciosa e fácil de pilotar.",
        km: "0 km",
        ano: "2023/2024",
        cor: "Preto",
        potencia: "1000W",
        autonomia: "60 km",
        velocidade: "45 km/h",
        bateria: "Lítio 60V 20Ah",
        telefone: "5511999999999"
    },
    {
        id: 2,
        nome: "JET 1000W",
        preco: 18900,
        imagens: ["../img/modelo4.jpeg", "../img/modelo5.jpeg", "../img/modelo6.jpeg", "../img/modelo3.jpeg"],
        thumb: "../img/modelo4.jpeg",
        descricao: "JET 1000W - Scooter elétrica com design esportivo e ótimo desempenho para o dia a dia.",
        km: "0 km",
        ano: "2023/2024",
        cor: "Azul Escuro",
        potencia: "1000W",
        autonomia: "70 km",
        velocidade: "50 km/h",
        bateria: "Lítio 60V 25Ah",
        telefone: "5511999999999"
    },
    {
        id: 3,
        nome: "DOT 1000W",
        preco: 24900,
        imagens: ["../img/modelo8.jpeg", "../img/modelo9.jpeg", "../img/modelo13.jpeg"],
        thumb: "../img/modelo7.jpeg",
        descricao: "DOT 1000W - Scooter elétrica moderna com excelente autonomia e bateria de longa duração.",
        km: "0 km",
        ano: "2024/2025",
        cor: "Preta Fosca",
        potencia: "1000W",
        autonomia: "80 km",
        velocidade: "55 km/h",
        bateria: "Lítio 60V 30Ah",
        telefone: "5511999999999"
    },
    {
        id: 4,
        nome: "X12 1000W",
        preco: 28900,
        imagens: ["../img/modelo10.jpeg"],
        thumb: "../img/modelo10.jpeg",
        descricao: "X12 1000W - Scooter elétrica premium com maior potência, conforto e tecnologia.",
        km: "0 km",
        ano: "2024/2025",
        cor: "Prata/Preta",
        potencia: "1200W",
        autonomia: "90 km",
        velocidade: "60 km/h",
        bateria: "Lítio 72V 30Ah",
        telefone: "5511999999999"
    },
    {
        id: 5,
        nome: "X12 1000W (Versão Sport)",
        preco: 29900,
        imagens: [
            "../img/modelo11.jpeg",
            "../img/modelo12.jpeg",
            "../img/modelo13.jpeg"
        ],
        thumb: "../img/modelo11.jpeg",
        descricao: "X12 1000W Sport - Versão mais completa com acabamento premium e maior autonomia.",
        km: "0 km",
        ano: "2024/2025",
        cor: "Preto/Prata",
        potencia: "1200W",
        autonomia: "100 km",
        velocidade: "65 km/h",
        bateria: "Lítio 72V 35Ah",
        telefone: "5511999999999"
    }
];

// RESTO DO CÓDIGO IGUAL...
document.addEventListener('DOMContentLoaded', function () {
    if (document.getElementById('motosContainer')) {
        renderMotosGrid();
    }

    if (document.getElementById('motoDetalhes')) {
        carregarDetalhes();
    }
});

document.addEventListener('DOMContentLoaded', function () {
    console.log('🔍 det_prods.js carregado!');

    const urlParams = new URLSearchParams(window.location.search);
    const motoId = parseInt(urlParams.get('id'));
    console.log('📊 ID da moto:', motoId);
    console.log('🔗 URL completa:', window.location.href);

    const moto = motos.find(m => m.id === motoId);
    console.log('🏍️ Moto encontrada:', moto ? moto.nome : 'NENHUMA');

    if (moto) {
        renderMotoDetalhes(moto);
    } else {
        document.getElementById('motoDetalhes').innerHTML = `
            <div style="text-align:center; padding: 50px;">
                <h2>❌ Moto não encontrada!</h2>
                <p>ID: ${motoId}</p>
                <p><a href="home_prods.html" class="cta-button">← Voltar para Motos</a></p>
            </div>
        `;
        console.error('❌ Moto ID', motoId, 'não encontrada no array!');
    }
});

function renderMotoDetalhes(moto) {
    console.log('🎨 Renderizando detalhes da moto:', moto.nome);

    const container = document.getElementById('motoDetalhes');
    if (!container) {
        console.error('❌ #motoDetalhes não encontrado!');
        return;
    }

    container.innerHTML = `
        <div class="moto-gallery">
            <div class="gallery-main">
                <img id="mainImage" src="${moto.imagens[0]}" alt="${moto.nome}" 
                     onerror="console.log('❌ Erro imagem principal:', this.src)">
            </div>
            <div class="gallery-thumbs">
                ${moto.imagens.map((img, index) => `
                    <img src="${img}" alt="Foto ${index + 1}" 
                         onclick="trocarFoto('${img}')" 
                         class="${index === 0 ? 'active' : ''}"
                         onerror="console.log('❌ Erro thumb:', this.src)">
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
                    <span><strong>Quilometragem:</strong> ${moto.km}</span>
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
                    <i class="fas fa-tachometer-alt"></i>
                    <span><strong>Potência:</strong> ${moto.potencia}</span>
                </div>
            </div>

            <div class="moto-actions">
                <a href="https://wa.me/${moto.telefone}?text=Olá! Tenho interesse na *${moto.nome}*\n💰 Valor: R$ ${formatarPreco(moto.preco)}\n📏 ${moto.km}\n🎯 ${moto.ano}\n\nPode me passar mais detalhes?" 
                   class="whatsapp-btn" target="_blank">
                    <i class="fab fa-whatsapp"></i> Comprar pelo WhatsApp
                </a>
                <button class="back-btn" onclick="window.location.href='home_prods.html'">
                    <i class="fas fa-arrow-left"></i> Ver Todas as Motos
                </button>
            </div>
        </div>
    `;

    console.log('✅ Detalhes renderizados!');
}

function trocarFoto(src) {
    console.log('📸 Trocando foto para:', src);
    const mainImage = document.getElementById('mainImage');
    if (mainImage) {
        mainImage.src = src;
    }
    document.querySelectorAll('.gallery-thumbs img').forEach(img => img.classList.remove('active'));
    event.target.classList.add('active');
}

function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR');
}