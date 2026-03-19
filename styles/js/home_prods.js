const motos = [
    {
        id: 1,
        nome: "EG1 Essencial",
        preco: 15900,
        imagens: ["../img/modelo1.jpeg", "../img/modelo2.jpeg", "../img/modelo3.jpeg"],
        thumb: "../img/modelo1.jpeg",
        descricao: "EG1 Essencial - Scooter elétrica urbana ideal para o dia a dia. Econômica, silenciosa e sustentável.",
        km: "0 km",
        ano: "2023/2024",
        cor: "Preto Fosco",
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
        imagens: ["../img/modelo4.jpeg", "../img/modelo5.jpeg", "../img/modelo6.jpeg"],
        thumb: "../img/modelo4.jpeg",
        descricao: "JET 1000W - Scooter elétrica com ótimo desempenho urbano, design esportivo e baixo custo de manutenção.",
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
        imagens: ["../img/modelo7.jpeg", "../img/modelo8.jpeg", "../img/modelo9.jpeg"],
        thumb: "../img/modelo7.jpeg",
        descricao: "DOT 1000W - Scooter elétrica moderna com ótima autonomia e bateria de alta durabilidade.",
        km: "0 km",
        ano: "2024/2025",
        cor: "Cinza Fosco",
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
        imagens: ["../img/modelo10.jpeg", "../img/modelo11.jpeg", "../img/modelo12.jpeg", "../img/modelo13.jpeg"],
        thumb: "../img/modelo10.jpeg",
        descricao: "X12 1000W - Scooter elétrica premium com maior potência, conforto e tecnologia embarcada.",
        km: "0 km",
        ano: "2024/2025",
        cor: "Prata/Preta",
        potencia: "1200W",
        autonomia: "90 km",
        velocidade: "60 km/h",
        bateria: "Lítio 72V 30Ah",
        telefone: "5511999999999"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    console.log('🚀 JS carregado! Renderizando motos...');
    console.log('📱 Caminho das imagens testado:', motos[0].thumb);
    renderMotosGrid();
});

function renderMotosGrid() {
    console.log('🎨 Iniciando renderização do grid...');
    
    const container = document.getElementById('motosContainer');
    if (!container) {
        console.error('❌ ERRO: #motosContainer não encontrado!');
        return;
    }
    
    const html = motos.map((moto, index) => {
        console.log(`🖼️ Moto ${index + 1}:`, moto.thumb);
        return `
            <div class="moto-card" onclick="abrirDetalhes(${moto.id})">
                <div class="moto-image-container">
                    <img src="${moto.thumb}" alt="${moto.nome}" loading="lazy" 
                         onerror="this.src='../img/moto1.jpeg'; console.log('🔄 Imagem fallback:', this.src)"
                         onload="console.log('✅ Imagem carregada:', this.src)">
                    <div class="moto-overlay">
                        <i class="fas fa-search-plus"></i>
                        <span>Ver Detalhes</span>
                    </div>
                </div>
                <div class="moto-info">
                    <h3>${moto.nome}</h3>
                    <div class="moto-meta">
                        <span><i class="fas fa-road"></i> ${moto.km}</span>
                        <span><i class="fas fa-calendar"></i> ${moto.ano}</span>
                    </div>
                    <div class="moto-preco">R$ ${formatarPreco(moto.preco)}</div>
                </div>
            </div>
        `;
    }).join('');
    
    container.innerHTML = html;
    console.log('✅ Grid renderizado com sucesso!');
}

function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR');
}

function abrirDetalhes(id) {
    console.log('🔗 Abrindo detalhes da moto:', id);
    window.open('det_prods.html?id=' + id, '_blank');
}