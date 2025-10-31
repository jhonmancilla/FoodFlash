// Datos de productos por categoría
const productsByCategory = {
    hamburguesas: {
        name: "Hamburguesas",
        description: "Hamburguesas jugosas preparadas al momento",
        products: [
            { id: 1, name: "Hamburguesa Clásica", description: "Carne jugosa con queso, lechuga y tomate", price: 15000, emoji: "🍔" },
            { id: 2, name: "Doble Carne", description: "Doble porción de carne con queso cheddar", price: 20000, emoji: "🍔" },
            { id: 3, name: "BBQ Bacon", description: "Con tocino, salsa BBQ y cebolla caramelizada", price: 22000, emoji: "🍔" },
            { id: 4, name: "Vegetariana", description: "Hamburguesa de lentejas con vegetales frescos", price: 16000, emoji: "🍔" }
        ]
    },
    pizzas: {
        name: "Pizzas",
        description: "Pizzas artesanales con ingredientes frescos",
        products: [
            { id: 11, name: "Pizza Pepperoni", description: "Pizza tradicional con extra pepperoni", price: 25000, emoji: "🍕" },
            { id: 12, name: "Pizza Hawaiana", description: "Jamón, piña y extra queso mozzarella", price: 24000, emoji: "🍕" },
            { id: 13, name: "Cuatro Quesos", description: "Mozzarella, parmesano, gorgonzola y provolone", price: 28000, emoji: "🍕" },
            { id: 14, name: "Vegetariana", description: "Champiñones, pimientos, cebolla y aceitunas", price: 23000, emoji: "🍕" }
        ]
    },
    mexicana: {
        name: "Comida Mexicana",
        description: "Sabores auténticos de México",
        products: [
            { id: 21, name: "Burrito Mexicano", description: "Tortilla rellena con carne y frijoles", price: 18000, emoji: "🌯" },
            { id: 22, name: "Tacos al Pastor", description: "3 tacos con carne marinada y piña", price: 16000, emoji: "🌮" },
            { id: 23, name: "Quesadilla", description: "Tortilla con queso fundido y pollo", price: 14000, emoji: "🌮" },
            { id: 24, name: "Nachos Supreme", description: "Nachos con carne, queso y guacamole", price: 17000, emoji: "🌮" }
        ]
    },
    pollo: {
        name: "Pollo",
        description: "Pollo crujiente y sabroso",
        products: [
            { id: 31, name: "Nuggets de Pollo", description: "10 piezas de pollo crujiente", price: 14000, emoji: "🍗" },
            { id: 32, name: "Alitas Picantes", description: "12 alitas con salsa buffalo", price: 19000, emoji: "🍗" },
            { id: 33, name: "Pollo Asado", description: "Medio pollo con ensalada", price: 22000, emoji: "🍗" },
            { id: 34, name: "Tiras de Pollo", description: "8 tiras empanizadas con salsas", price: 16000, emoji: "🍗" }
        ]
    },
    acompañamientos: {
        name: "Acompañamientos",
        description: "El complemento perfecto para tu comida",
        products: [
            { id: 41, name: "Papas Fritas", description: "Papas crujientes con sal marina", price: 8000, emoji: "🍟" },
            { id: 42, name: "Aros de Cebolla", description: "Crujientes aros empanizados", price: 9000, emoji: "🧅" },
            { id: 43, name: "Ensalada César", description: "Lechuga fresca con aderezo césar", price: 10000, emoji: "🥗" },
            { id: 44, name: "Yuca Frita", description: "Yuca dorada y crujiente", price: 8500, emoji: "🍠" }
        ]
    },
    bebidas: {
        name: "Bebidas",
        description: "Refrescantes bebidas para acompañar",
        products: [
            { id: 51, name: "Coca-Cola", description: "Gaseosa 500ml", price: 4000, emoji: "🥤" },
            { id: 52, name: "Jugo Natural", description: "Jugo de fruta fresca 400ml", price: 6000, emoji: "🧃" },
            { id: 53, name: "Limonada", description: "Limonada natural con hierbabuena", price: 5000, emoji: "🍋" },
            { id: 54, name: "Malteada", description: "Malteada de chocolate o vainilla", price: 8000, emoji: "🥤" }
        ]
    }
};

let cart = [];
let currentCategory = 'todas';

// Renderizar todas las categorías
function renderAllCategories() {
    const container = document.getElementById('categories-container');
    container.innerHTML = '';

    // Crear vista de "Todas"
    const allDiv = document.createElement('div');
    allDiv.className = 'category-content active';
    allDiv.id = 'category-todas';

    Object.keys(productsByCategory).forEach(categoryKey => {
        const category = productsByCategory[categoryKey];
        const categorySection = document.createElement('div');
        categorySection.style.marginBottom = '3rem';
        
        categorySection.innerHTML = `
            <div class="category-header">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
            </div>
            <div class="product-grid">
                ${category.products.map(product => createProductCard(product)).join('')}
            </div>
        `;
        
        allDiv.appendChild(categorySection);
    });

    container.appendChild(allDiv);

    // Crear vistas individuales por categoría
    Object.keys(productsByCategory).forEach(categoryKey => {
        const category = productsByCategory[categoryKey];
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'category-content';
        categoryDiv.id = `category-${categoryKey}`;
        
        categoryDiv.innerHTML = `
            <div class="category-header">
                <h3>${category.name}</h3>
                <p>${category.description}</p>
            </div>
            <div class="product-grid">
                ${category.products.map(product => createProductCard(product)).join('')}
            </div>
        `;
        
        container.appendChild(categoryDiv);
    });
}

// Crear tarjeta de producto
function createProductCard(product) {
    return `
        <div class="product-card">
            <div class="product-image">${product.emoji}</div>
            <div class="product-info">
                <h3 class="product-name">${product.name}</h3>
                <p class="product-description">${product.description}</p>
                <div class="product-footer">
                    <span class="product-price">$${product.price.toLocaleString()}</span>
                    <button class="add-to-cart" onclick="addToCart(${product.id})">Agregar</button>
                </div>
            </div>
        </div>
    `;
}

// Mostrar categoría
function showCategory(categoryName) {
    // Actualizar pestañas
    document.querySelectorAll('.category-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    event.target.classList.add('active');

    // Mostrar contenido
    document.querySelectorAll('.category-content').forEach(content => {
        content.classList.remove('active');
    });
    document.getElementById(`category-${categoryName}`).classList.add('active');
    
    currentCategory = categoryName;
}

// Agregar al carrito
function addToCart(productId) {
    let product = null;
    
    // Buscar el producto en todas las categorías
    Object.values(productsByCategory).forEach(category => {
        const found = category.products.find(p => p.id === productId);
        if (found) product = found;
    });

    if (!product) return;

    const existingItem = cart.find(item => item.id === productId);
    
    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }
    
    updateCart();
    
    // Animación de feedback
    const button = event.target;
    button.textContent = '✓ Agregado';
    setTimeout(() => {
        button.textContent = 'Agregar';
    }, 1000);
}

// Actualizar carrito
function updateCart() {
    const cartCount = document.getElementById('cart-count');
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    
    cartCount.textContent = totalItems;
    cartTotal.textContent = totalPrice.toLocaleString();
    
    if (cart.length === 0) {
        cartItems.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem 0;">Tu carrito está vacío</p>';
    } else {
        cartItems.innerHTML = cart.map(item => `
            <div class="cart-item">
                <div class="cart-item-info">
                    <div style="font-weight: 500;">${item.emoji} ${item.name}</div>
                    <div style="color: #FF3D17; font-weight: bold; margin-top: 0.3rem;">${(item.price * item.quantity).toLocaleString()}</div>
                </div>
                <div class="cart-item-controls">
                    <button class="quantity-btn" onclick="decreaseQuantity(${item.id})">-</button>
                    <span class="quantity-display">${item.quantity}</span>
                    <button class="quantity-btn" onclick="increaseQuantity(${item.id})">+</button>
                    <button class="remove-btn" onclick="removeFromCart(${item.id})">🗑️</button>
                </div>
            </div>
        `).join('');
    }
}

// Aumentar cantidad
function increaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity++;
        updateCart();
    }
}

// Disminuir cantidad
function decreaseQuantity(productId) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        if (item.quantity > 1) {
            item.quantity--;
        } else {
            // Si la cantidad es 1, eliminar el producto
            removeFromCart(productId);
            return;
        }
        updateCart();
    }
}

// Eliminar producto del carrito
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
}

// Toggle carrito modal
function toggleCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

// Cerrar modal al hacer clic fuera
window.onclick = function(event) {
    const modal = document.getElementById('cart-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
}

// Inicializar
renderAllCategories();