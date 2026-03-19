const motos = [
    {
        id: 1,
        nome: "Honda CG 160 2022",
        preco: 15900,
        imagens: ["../img/moto1-1.jpg", "../img/moto1-2.jpg", "../img/moto1-3.jpg", "../img/moto1-4.jpg"],
        thumb: "../img/moto1-thumb.jpg",
        descricao: "Honda CG 160 2022 em estado impecável! Pouco uso, manutenção em dia, pneus novos. Ideal para quem quer economia e confiabilidade.",
        km: "12.500 km",
        ano: "2022/2023",
        cor: "Vermelha",
        potencia: "15cv",
        telefone: "5511999999999"
    },
    {
        id: 2,
        nome: "Yamaha Fazer 250 2021",
        preco: 18900,
        imagens: ["../img/moto2-1.jpg", "../img/moto2-2.jpg", "../img/moto2-3.jpg", "../img/moto2-4.jpg"],
        thumb: "../img/moto2-thumb.jpg",
        descricao: "Yamaha Fazer 250 2021 ABS! Linda, revisada, escapamento esportivo. Perfeita para cidade e estrada.",
        km: "18.200 km",
        ano: "2021/2022",
        cor: "Azul Escuro",
        potencia: "21cv",
        telefone: "5511999999999"
    },
    {
        id: 3,
        nome: "Honda CB 300R 2023",
        preco: 24900,
        imagens: ["../img/moto3-1.jpg", "../img/moto3-2.jpg", "../img/moto3-3.jpg", "../img/moto3-4.jpg"],
        thumb: "../img/moto3-thumb.jpg",
        descricao: "CB 300R 2023 Twister! Quase zero km, acabamento premium, freios ABS. Uma das melhores motos da categoria!",
        km: "3.800 km",
        ano: "2023/2024",
        cor: "Preta Fosca",
        potencia: "25cv",
        telefone: "5511999999999"
    },
    {
        id: 4,
        nome: "Suzuki GSX 650 2020",
        preco: 28900,
        imagens: ["../img/moto4-1.jpg", "../img/moto4-2.jpg", "../img/moto4-3.jpg", "../img/moto4-4.jpg"],
        thumb: "../img/moto4-thumb.jpg",
        descricao: "GSX 650 2020 importada! Motor 4 cilindros, suspensão ajustável, alta performance. Para quem gosta de emoção!",
        km: "22.000 km",
        ano: "2020/2021",
        cor: "Prata/Preta",
        potencia: "65cv",
        telefone: "5511999999999"
    }
];

document.addEventListener('DOMContentLoaded', function() {
    renderMotosGrid();
});

function renderMotosGrid() {
    const container = document.getElementById('motosContainer');
    container.innerHTML = motos.map((moto, index) => `
        <div class="moto-card" onclick="abrirDetalhes(${moto.id})">
            <div class="moto-image-container">
                <img src="${moto.thumb}" alt="${moto.nome}" loading="lazy">
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
    `).join('');
}

function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR');
}

function abrirDetalhes(id) {
    const moto = motos.find(m => m.id === id);
    window.open('det_prods.html?id=' + id, '_blank');
}