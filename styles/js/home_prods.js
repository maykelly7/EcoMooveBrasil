const motosPrincipais = [
    {
        id: 1,
        nome: "EG1 2026",
        preco: 27500,
        thumb: "../img/modelo1.jpeg",
        km: "0 km",
        ano: "2026",
    },
    {
        id: 2,
        nome: "EG1 Essential",
        preco: 22900,
        thumb: "../img/modelo2.jpeg",
        km: "0 km",
        ano: "2025",
    },
    {
        id: 8, // Novo ID para EG1 2025
        nome: "EG1 2025",
        preco: 25500,
        thumb: "../img/modelo1.jpeg", // Usando mesma imagem da EG1 ou altere conforme necessário
        km: "0 km",
        ano: "2025",
    },
    {
        id: 3,
        nome: "ES1 2025",
        preco: 21500,
        thumb: "../img/modelo4.jpeg",
        km: "0 km",
        ano: "2025",
    },
    {
        id: 4,
        nome: "ES1 2026",
        preco: 25500,
        thumb: "../img/modelo5.jpeg",
        km: "0 km",
        ano: "2026",
    }

];

const motosAuto = [
    // Scooters elétricas (precisam de CNH)
    
    // Scooters elétricas sem CNH (até 1000W)
    {
        id: 5,
        nome: "Scooter Dot 1.000Watts",
        preco: 13500,
        thumb: "../img/modelo9.jpeg",
        km: "0 km",
        ano: "2025",
    },
    {
        id: 6,
        nome: "Jet 1000Watts",
        preco: 12500,
        thumb: "../img/modelo11.jpeg",
        km: "0 km",
        ano: "2025",
    },
    {
        id: 7,
        nome: "X12",
        preco: 12500,
        thumb: "../img/modelo10.jpeg",
        km: "0 km",
        ano: "2025",
    }
];

document.addEventListener('DOMContentLoaded', function () {
    console.log('🚀 JS carregado! Renderizando seções...');
    renderMotos("motosPrincipais", motosPrincipais);
    renderMotos("motosAuto", motosAuto);
});

function renderMotos(containerId, lista) {
    const container = document.getElementById(containerId);
    if (!container) {
        console.error('❌ ERRO: #' + containerId + ' não encontrado!');
        return;
    }

    const html = lista.map((moto, index) => {
        console.log(`🖼️ ${containerId} - Moto ${index + 1}:`, moto.thumb);
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
    console.log(`✅ ${containerId} renderizado com sucesso! (${lista.length} itens)`);
}

function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR');
}

function abrirDetalhes(id) {
    console.log('🔗 Abrindo detalhes da moto:', id);
    window.open('det_prods.html?id=' + id, '_blank');
}