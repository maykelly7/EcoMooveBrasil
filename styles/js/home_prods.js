//  CAMINHOS CORRETOS PARA SUA ESTRUTURA
const motos = [
    {
        id: 1,
        nome: "EcoMoove Elétrica 01",
        preco: 28900,
        imagem: "../img/moto1.jpeg",     
        thumb: "../img/moto1.jpeg",      
        cilindrada: "Elétrica",
        potencia: "85cv",
        torque: "200Nm",
        peso: "145kg",
        tanque: "Bateria 72V",
        cor: "Preto Fosco",
        autonomia: "180km"
    },
    {
        id: 2,
        nome: "EcoMoove Elétrica 02",
        preco: 32900,
        imagem: "../img/moto2.jpeg",     
        thumb: "../img/moto2.jpeg",     
        cilindrada: "Elétrica",
        potencia: "95cv",
        torque: "220Nm",
        peso: "152kg",
        tanque: "Bateria 85V",
        cor: "Prata Metálico",
        autonomia: "220km"
    }
];

let motoAtual = 1;

const motoImage = document.getElementById('motoImage');
const motoOptions = document.getElementById('motoOptions');
const motoDetails = document.getElementById('motoDetails');
const finalPrice = document.getElementById('finalPrice');
const whatsappBtn = document.getElementById('whatsappBtn');
const comprarBtn = document.getElementById('comprarBtn');

const detalhes = [
    { icon: 'fas fa-bolt', label: 'Motor', key: 'cilindrada' },
    { icon: 'fas fa-tachometer-alt', label: 'Potência', key: 'potencia' },
    { icon: 'fas fa-weight-hanging', label: 'Torque', key: 'torque' },
    { icon: 'fas fa-balance-scale', label: 'Peso', key: 'peso' },
    { icon: 'fas fa-battery-full', label: 'Bateria', key: 'tanque' },
    { icon: 'fas fa-road', label: 'Autonomia', key: 'autonomia' },
    { icon: 'fas fa-palette', label: 'Cor', key: 'cor' }
];

document.addEventListener('DOMContentLoaded', function() {
    console.log(' JS carregado!'); 
    renderMotoOptions();
    updateMotoDisplay();
    setupWhatsApp();
});

function renderMotoOptions() {
    motoOptions.innerHTML = motos.map((moto) => `
        <div class="moto-option ${moto.id === motoAtual ? 'active' : ''}" data-moto="${moto.id}">
            <img src="${moto.thumb}" alt="${moto.nome}" loading="lazy" onerror="console.log('❌ Erro carregando: ${moto.thumb}')">
            <div class="moto-info">
                <h3>${moto.nome}</h3>
                <div class="moto-price">R$ ${formatarPreco(moto.preco)}</div>
            </div>
        </div>
    `).join('');
    console.log(' Opções renderizadas');
}

function updateMotoDisplay() {
    const moto = motos.find(m => m.id === motoAtual);
    if (moto) {
        console.log('🔄 Carregando:', moto.imagem);
        motoImage.src = moto.imagem;
        motoImage.alt = moto.nome;
        finalPrice.textContent = `R$ ${formatarPreco(moto.preco)}`;
        updateDetails(moto);
        updateActiveOption();
    }
}

function updateDetails(moto) {
    motoDetails.innerHTML = detalhes.map(detalhe => `
        <div class="detail-card">
            <div class="detail-icon"><i class="${detalhe.icon}"></i></div>
            <div class="detail-value">${moto[detalhe.key]}</div>
            <div style="opacity: 0.8; font-size: 0.9rem;">${detalhe.label}</div>
        </div>
    `).join('');
}

function updateActiveOption() {
    document.querySelectorAll('.moto-option').forEach(option => {
        option.classList.toggle('active', parseInt(option.dataset.moto) === motoAtual);
    });
}

motoOptions.addEventListener('click', (e) => {
    const option = e.target.closest('.moto-option');
    if (option) {
        motoAtual = parseInt(option.dataset.moto);
        updateMotoDisplay();
    }
});

function formatarPreco(preco) {
    return preco.toLocaleString('pt-BR');
}

function setupWhatsApp() {
    whatsappBtn.addEventListener('click', (e) => {
        e.preventDefault();
        const moto = motos.find(m => m.id === motoAtual);
        const mensagem = `Olá! Gostaria de mais informações sobre a *${moto.nome}*\n💰 Valor: R$ ${formatarPreco(moto.preco)}\n⚡ Autonomia: ${moto.autonomia}\n\nTem disponível?`;
        const numero = '5511999999999'; // 👈 SEU NÚMERO AQUI
        const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
        window.open(url, '_blank');
    });

    comprarBtn.addEventListener('click', (e) => {
        e.preventDefault();
        whatsappBtn.click();
    });
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});