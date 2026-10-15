// ==========================================
// TELEFONE DE VENDAS DA SECA TUDO (WHATSAPP)
// ==========================================
const VENDEDOR_WHATSAPP = "244923000000";

// ==========================================
// BASE DE DADOS COMPLETA POR CATEGORIAS
// ==========================================
const itemsDatabase = [
    // --- LOJA: ROUPAS CASUAIS (com preços e carrinho) ---
    {
        id: "c1",
        title: "T-Shirt Casual SECA TUDO Street",
        category: "casual",
        type: "product",
        price: 15000,
        description: "Algodão premium respirável, corte moderno para o dia a dia.",
        image: "images/tshirt-casual.jpg"
    },
    {
        id: "c2",
        title: "Hoodie Seca Tudo Urban",
        category: "casual",
        type: "product",
        price: 28000,
        description: "Casaco de capuz ultra confortável para estilo e pós-treino.",
        image: "images/hoodie-casual.jpg"
    },

    // --- LOJA: ROUPAS DESPORTIVAS (com preços e carrinho) ---
    {
        id: "d1",
        title: "Camisola Pro Dry-Fit ST",
        category: "desportiva",
        type: "product",
        price: 18500,
        description: "Tecnologia de secagem ultrarrápida e regulação térmica.",
        image: "images/camisola-dryfit.jpg"
    },
    {
        id: "d2",
        title: "Calção Performance ST",
        category: "desportiva",
        type: "product",
        price: 12500,
        description: "Corte ergonómico, tecido ultraleve e máxima mobilidade.",
        image: "images/calcao-desporto.jpg"
    },

    // --- LOJA: ACESSÓRIOS (com preços e carrinho) ---
    {
        id: "a1",
        title: "Toalha Ultraleve Seca Tudo",
        category: "acessorios",
        type: "product",
        price: 8500,
        description: "Absorve 5x o seu peso em água. Secagem em minutos.",
        image: "images/toalha-seca-tudo.jpg"
    },
    {
        id: "a2",
        title: "Saco de Desporto ST Pro 35L",
        category: "acessorios",
        type: "product",
        price: 22000,
        description: "Compartimento estanque para roupa húmida e sapatilhas.",
        image: "images/saco-desporto.jpg"
    },

    // --- GINÁSIO (fotos + catálogo com preços) ---
    {
        id: "g1",
        title: "Passe Livre Mensal Ginásio ST",
        category: "ginasio",
        type: "product",
        price: 35000,
        description: "Acesso ilimitado à área musculação, cardio e aulas de grupo.",
        image: "images/ginasio-mensal.jpg"
    },
    {
        id: "g2",
        title: "Sessão de Personal Training (Pack 10)",
        category: "ginasio",
        type: "product",
        price: 60000,
        description: "Acompanhamento individualizado e plano nutricional desportivo.",
        image: "images/ginasio-pt.jpg"
    },

    // --- CORPORATIVO: TEAM BUILDING (ilustrativo + orçamento WhatsApp) ---
    {
        id: "tb1",
        title: "Programa Team Building Outdoor",
        category: "team-building",
        type: "service_no_price",
        description: "Atividades de superação e coesão de equipa em ambientes ao ar livre.",
        image: "images/team-building.jpg"
    },

    // --- CORPORATIVO: EVENTOS (ilustrativo + orçamento WhatsApp) ---
    {
        id: "ec1",
        title: "Organização de Torneios Corporativos",
        category: "evento-corporativo",
        type: "service_no_price",
        description: "Gestão integral de torneios desportivos empresariais e equipamentos.",
        image: "images/evento-corporativo.jpg"
    },

    // --- CORPORATIVO: GINÁSTICA LABORAL (ilustrativo + orçamento WhatsApp) ---
    {
        id: "gl1",
        title: "Programa de Ginástica Laboral",
        category: "ginastica-laboral",
        type: "service_no_price",
        description: "Sessões presenciais para prevenção de lesões e promoção do bem-estar nas empresas.",
        image: "images/ginastica-laboral.jpg"
    },

    // --- GRÁFICA (serviços visuais + orçamento WhatsApp) ---
    {
        id: "gr1",
        title: "Estamparia & Personalização de Equipamentos",
        category: "grafica",
        type: "service_no_price",
        description: "Impressão de alta durabilidade para nomes, números e patrocinadores.",
        image: "images/grafica-equipamentos.jpg"
    },
    {
        id: "gr2",
        title: "Banners & Material Publicitário Desportivo",
        category: "grafica",
        type: "service_no_price",
        description: "Lonas, roll-ups e merchandising para eventos desportivos.",
        image: "images/grafica-banners.jpg"
    },

    // --- AUDIOVISUAL (fotos sem preços + solicitação de orçamento) ---
    {
        id: "av1",
        title: "Cobertura Fotográfica Desportiva",
        category: "audiovisual",
        type: "service_no_price",
        description: "Captura de alta velocidade para jogos, atletas e eventos de marca.",
        image: "images/audiovisual-foto.jpg"
    },
    {
        id: "av2",
        title: "Produção de Vídeo Promocional & Reels",
        category: "audiovisual",
        type: "service_no_price",
        description: "Vídeos em alta definição focados na dinâmica, performance e impacto visual.",
        image: "images/audiovisual-video.jpg"
    }
];

// Estado do Carrinho
let cart = [];

// ==========================================
// RENDERIZAÇÃO DINÂMICA
// ==========================================
function renderItems(itemsList) {
    const grid = document.getElementById('productGrid');
    if (!grid) return;

    if (itemsList.length === 0) {
        grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #666; padding: 40px 0;">Nenhum item encontrado nesta categoria.</p>`;
        return;
    }

    grid.innerHTML = itemsList.map(item => {
        if (item.type === 'product') {
            return `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x300?text=SECA+TUDO'">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${item.title}</h3>
                        <p class="product-desc">${item.description}</p>
                        <div class="product-price">${item.price.toLocaleString('pt-AO')} Kz</div>
                        <button class="btn-add-cart" onclick="addToCart('${item.id}')">
                            <i class="fa-solid fa-cart-plus"></i> Adicionar ao Carrinho
                        </button>
                    </div>
                </div>
            `;
        } else {
            // Serviços sem preço (Audiovisual, Gráfica, Corporativo)
            const textMsg = encodeURIComponent(`Olá Seca Tudo! Gostaria de solicitar um orçamento/informação sobre o serviço: ${item.title}`);
            const whatsappLink = `https://wa.me/${VENDEDOR_WHATSAPP}?text=${textMsg}`;
            
            return `
                <div class="product-card">
                    <div class="product-image">
                        <img src="${item.image}" alt="${item.title}" onerror="this.src='https://via.placeholder.com/400x300?text=SECA+TUDO'">
                    </div>
                    <div class="product-info">
                        <h3 class="product-title">${item.title}</h3>
                        <p class="product-desc">${item.description}</p>
                        <a href="${whatsappLink}" target="_blank" class="btn-quote-whatsapp">
                            <i class="fa-brands fa-whatsapp"></i> Solicitar Proposta / Orçamento
                        </a>
                    </div>
                </div>
            `;
        }
    }).join('');
}

// ==========================================
// LÓGICA DE FILTRAGEM
// ==========================================
function filterCategory(selectedCategory) {
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        productGrid.style.display = 'grid'; // Exibe a grelha ao interagir
    }

    let filtered = itemsDatabase;

    if (selectedCategory === 'all') {
        // Mostra todos os produtos da loja (casual, desportiva e acessorios)
        filtered = itemsDatabase.filter(item => item.type === 'product' && item.category !== 'ginasio');
    } else if (selectedCategory === 'roupas') {
        filtered = itemsDatabase.filter(item => item.category === 'casual' || item.category === 'desportiva');
    } else if (selectedCategory === 'corporativo') {
        filtered = itemsDatabase.filter(item => 
            item.category === 'team-building' || 
            item.category === 'evento-corporativo' || 
            item.category === 'ginastica-laboral'
        );
    } else {
        filtered = itemsDatabase.filter(item => item.category === selectedCategory);
    }

    renderItems(filtered);

    // Scroll suave até às categorias
    const section = document.getElementById('produtos');
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

// ==========================================
// GESTÃO DO CARRINHO
// ==========================================
function addToCart(id) {
    const item = itemsDatabase.find(i => i.id === id);
    if (!item) return;

    const existing = cart.find(c => c.id === id);
    if (existing) {
        existing.qty += 1;
    } else {
        cart.push({ ...item, qty: 1 });
    }

    updateCartUI();
    openCart();
}

function updateQty(id, delta) {
    const item = cart.find(c => c.id === id);
    if (!item) return;

    item.qty += delta;
    if (item.qty <= 0) {
        cart = cart.filter(c => c.id !== id);
    }
    updateCartUI();
}

function updateCartUI() {
    const cartCount = document.getElementById('cartCount');
    const cartItems = document.getElementById('cartItems');
    const cartTotal = document.getElementById('cartTotal');

    const totalCount = cart.reduce((acc, item) => acc + item.qty, 0);
    const totalPrice = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);

    if (cartCount) cartCount.textContent = totalCount;
    if (cartTotal) cartTotal.textContent = `${totalPrice.toLocaleString('pt-AO')} Kz`;

    if (cartItems) {
        if (cart.length === 0) {
            cartItems.innerHTML = `<p style="text-align:center; color:#888; padding:30px 0;">O teu carrinho está vazio.</p>`;
        } else {
            cartItems.innerHTML = cart.map(item => `
                <div class="cart-item">
                    <div class="cart-item-details">
                        <h5>${item.title}</h5>
                        <p>${item.price.toLocaleString('pt-AO')} Kz x ${item.qty}</p>
                    </div>
                    <div class="cart-item-actions">
                        <button onclick="updateQty('${item.id}', -1)">-</button>
                        <span>${item.qty}</span>
                        <button onclick="updateQty('${item.id}', 1)">+</button>
                    </div>
                </div>
            `).join('');
        }
    }
}

// ==========================================
// ABRIR / FECHAR CARRINHO E MENU MOBILE
// ==========================================
const cartDrawer = document.getElementById('cartDrawer');
const cartOverlay = document.getElementById('cartOverlay');
const cartToggle = document.getElementById('cartToggle');
const cartClose = document.getElementById('cartClose');

function openCart() {
    if (cartDrawer && cartOverlay) {
        cartDrawer.classList.add('active');
        cartOverlay.classList.add('active');
    }
}

function closeCart() {
    if (cartDrawer && cartOverlay) {
        cartDrawer.classList.remove('active');
        cartOverlay.classList.remove('active');
    }
}

if (cartToggle) cartToggle.addEventListener('click', openCart);
if (cartClose) cartClose.addEventListener('click', closeCart);
if (cartOverlay) cartOverlay.addEventListener('click', closeCart);

// Menu Hambúrguer Mobile
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
        });
    });
}

// ==========================================
// ENVIO DA ENCOMENDA VIA WHATSAPP
// ==========================================
const checkoutForm = document.getElementById('checkoutForm');
if (checkoutForm) {
    checkoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        if (cart.length === 0) {
            alert('Adiciona pelo menos um produto ao carrinho antes de enviar.');
            return;
        }

        const name = document.getElementById('custName').value;
        const phone = document.getElementById('custPhone').value;
        const province = document.getElementById('custProvince').value;
        const address = document.getElementById('custAddress').value;
        const payment = document.getElementById('custPayment').value;

        let msg = `*NOVA ENCOMENDA - SECA TUDO*\n\n`;
        msg += `*Cliente:* ${name}\n`;
        msg += `*Telefone:* ${phone}\n`;
        msg += `*Província:* ${province}\n`;
        msg += `*Endereço:* ${address}\n`;
        msg += `*Pagamento:* ${payment}\n\n`;
        msg += `*ITENS DA ENCOMENDA:*\n`;

        cart.forEach(item => {
            msg += `- ${item.title} (x${item.qty}) : ${(item.price * item.qty).toLocaleString('pt-AO')} Kz\n`;
        });

        const total = cart.reduce((acc, item) => acc + (item.price * item.qty), 0);
        msg += `\n*TOTAL:* ${total.toLocaleString('pt-AO')} Kz`;

        const url = `https://wa.me/${VENDEDOR_WHATSAPP}?text=${encodeURIComponent(msg)}`;
        window.open(url, '_blank');
    });
}

// ==========================================
// INICIALIZAÇÃO (PRODUTOS ESCONDIDOS NO INÍCIO)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const productGrid = document.getElementById('productGrid');
    if (productGrid) {
        productGrid.style.display = 'none'; // Escondido de início até ao clique
    }
    updateCartUI();
});