const motos = [
    // MESMO ARRAY das motos acima - copie exatamente igual
];

document.addEventListener('DOMContentLoaded', function() {
    const urlParams = new URLSearchParams(window.location.search);
    const motoId = parseInt(urlParams.get('id'));
    const moto = motos.find(m => m.id === motoId);
    
    if (moto) {
        renderMotoDetalhes(moto);
    } else {
        document.getElementById('motoDetalhes').innerHTML = '<h2 style="text-align:center;">Moto não encontrada!</h2>';
    }
});

function renderMotoDetalhes(moto) {
    document.getElementById('motoDetalhes').innerHTML = `
        <div class="moto-gallery">
            <div class="gallery-main">
                <img id="mainImage" src="${moto.imagens[0]}" alt="${moto.nome}">
            </div>
            <div class="gallery-thumbs">
                ${moto.imagens.map((img, index) => `
                    <img src="${img}" alt="Foto ${index + 1}" onclick="trocarFoto('${img}')" class="${index === 0 ? 'active' : ''}">
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
}

function trocarFoto(src) {
    document.getElementById('mainImage').src = src;
    document.querySelectorAll('.gallery-thumbs img').forEach(img => img.classList.remove('active'));
    event.target.classList.add('active');
}

function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR');
}