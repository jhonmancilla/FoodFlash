// Datos de productos por categoría
const productsByCategory = {
    hamburguesas: {
        name: "Hamburguesas",
        description: "Descrubre nuestras hamburguesas preparadas al momento con carne al 100% de res, pan artesanal y los mejores ingredientes frescos. Desde las clásicas hasta las más atrevidas, todas vienen acompañadas de papas crocantes y el toque único de FoodFlash",
        products: [
            { id: 1, name: "Hamburguesa Clásica", description: "Una deliciosa hamburguesa con carne 100% de res a parrilla, acompañada de una loncha de queso derretido, vegetales frescos y nuestra suave salsa de la casa. Servida con papas crocantes al lado.", price: 15000, image: "imgs/hamburguesa-clasica.jpg" },
            { id: 2, name: "Doble Carne", description: "Dos jugosas carnes 100% de res a la parrilla, combinadas con queso derretido, vegetales frescos y un toque de nuestra salsa especial. Servida con papas crocantes al lado.", price: 20000, image: "imgs/hamburguesa-doble.jpg" },
            { id: 3, name: "BBQ Bacon", description: "Una hamburguesa poderosa con carne 100% de res a la parrilla, cubierta con salsa BBQ ahumada, tiras crujientes de tocineta y trozos de chicharron dorado. Acompañada de queso fundido, vegetales frescos y papas crocantes al lado.", price: 22000, image: "imgs/HamburguesaBBQ-bacon.jpg" },
            { id: 4, name: "Vegetariana", description: "Una opción ligera y deliciosa con una carne 100% de res, acompañada de queso derretido, lechuga, tomate, cebolla y salsa de la casa con pan suave y dorado. Servida con papas crocantes al lado.", price: 16000, image: "imgs/Hamburguesa-vegetariana.jpg" }
        ]
    },
    pizzas: {
        name: "Pizzas",
        description: "Deleitate con nuestras pizzas artesanales, preparadas con masa fresca, salsa de tomate casera y queso mozzarella 100% derretido. Combina tus sabores favoritos y disfruta cada porción recién salida del horno",
        products: [
            { id: 11, name: "Pizza Pepperoni", description: "Clasica y llena de sabor, masa artesanal, salsa de tomate casera, una capa generosa de queso mozzarella derretido y abundantes rodajas de pepperoni doradito. Horneada al punto perfecto para un toque crujiente y jugosa en cada bocado.", price: 25000, image: "imgs/pizza-peperoni.jpg" },
            { id: 12, name: "Pizza Hawaiana", description: "Una combinación perfecta de dulce y salado: salsa de tomate casera, queso mozzarella derretido, jamón premium y trozos jugosos de piña dorada al horno. Todo sobre una masa artesanal crujiente y recién horneada.", price: 24000, image: "imgs/pizza-hawaiana.jpg" },
            { id: 13, name: "Cuatro Quesos", description: "Una delicia cremosa con una mezcla irresistible de quesos mozzarella, cheddar, parmesano y azul, fundidos sobre masa artesanal y salsa de tomate casera. Suave, dorada y con una aroma que conquista desde el primer bocado.", price: 28000, image: "imgs/pizza-4-quesos.jpg" },
            { id: 14, name: "Vegetariana", description: "Colorida, fresca y deliciosa: masa artesanal, con salsa de tomate casera queso mozzarella derretido y una mezcla de vegetales salteados como pimentón, cebolla, champiñones y tomate. Horneada al punto justo para un sabor natural y lleno de vida.", price: 23000, image: "imgs/pizza-vegetariana.jpg" }
        ]
    },
    mexicana: {
        name: "Comida Mexicana",
        description: "Sabores intensos y aunténticos que te transportan directo a México. Disfruta nuestros tacos, burritos, nachos y más preparados con ingredientes frescos, salsas picantes y ese toque casero que los hace irresistibles.",
        products: [
            { id: 21, name: "Burrito Mexicano", description: "Una explosión de sabor en cada bocado. Tortilla suave rellena de arroz, frijoles, carne sazonada, verduras frescas y nuestro toque especial de salsa mexicana. ¡Simplemente irresistible!", price: 18000, image: "imgs/burrito-mexicano.jpg" },
            { id: 22, name: "Tacos al Pastor", description: "3 tacos con carne de cerdo marinada al estilo pastor, con piña, cebolla y cilantro freco sobre tortillas suavez. Un sabor aunténtico que te transportan directo a las calles de México.", price: 16000, image: "imgs/tacos-al-pastor.jpg" },
            { id: 23, name: "Quesadillas", description: "Tortillas doraditas rellenas de queso fundido y el ingrediente de tu elección. Acompañadas con guacamole, pico de gallo y salsa casera. ¡Perfectas para compartir o disfrutar solito!", price: 14000, image: "imgs/quesadilla.jpg" },
            { id: 24, name: "Nachos Supreme", description: "Topotos crujientes cubiertos con carne, frijoles, queso derretido, guacamole, pico de gallo y crema agria. Una combinación de sabores y texturas que te encantará desde el primer mordisco.", price: 17000, image: "imgs/nachos-supreme.jpg" }
        ]
    },
    pollo: {
        name: "Pollo",
        description: "Jugosos, doraditos y llenos de sabor. Nuestros pollos son preparados con recetas únicas, sazonados al punto perfecto y acompañados de guarniciones que te encantarán. ¡El auténtico sabor casero conquista a todos!",
        products: [
            { id: 31, name: "Nuggets de Pollo", description: "10 piezas de pollo crujiente", price: 14000, image: "imgs/nuggets-pollo.jpg"  },
            { id: 32, name: "Alitas Picantes", description: "12 alitas con salsa buffalo", price: 19000, image: "imgs/alitas-picantes.jpg" },
            { id: 33, name: "Pollo Asado", description: "Medio pollo con ensalada", price: 22000, image: "imgs/pollo-asado.jpg" },
            { id: 34, name: "Tiras de Pollo", description: "8 tiras empanizadas con salsas", price: 16000, image: "imgs/tiras-de-pollo.jpg" }
        ]
    },
    acompañamientos: {
        name: "Adiciones",
        description: "El complemento perfecto para tu plato favorito. Cada bocado está pensado para resaltar el sabor de tu comida y hacerla aún mas deliciosa.",
        products: [
            { id: 41, name: "Papas Fritas", description: "Clasicas, doraditas y crujientes. Perfectas para acompañar cualquier plato o disfrutar solas con tu salsa favorita, ¡Un toque irresistible en cada bocado!", price: 8000, image: "imgs/papas-fritas.jpg" },
            { id: 42, name: "Aros de Cebolla", description: "Cebolla fresca rebozada y frita hasta lograr una textura crujiente y un sabor delicioso. ¡Ideales para los amantes de los snaks con estilo! ", price: 9000, image: "imgs/aros-de-cebolla.jpg"},
            { id: 43, name: "Ensalada César", description: "Lechuga fresca, crutones crocantes, queso parmesano y aderezo César cremoso. Un acompañamiento ligero, fresco y lleno de sabor. ", price: 10000, image: "imgs/ensalada-cesar.jpg" },
            { id: 44, name: "Yuca Frita", description: "Crujiente por fuera y suave por dentro. Una opción tradicional con sabor casero que combina perfecto con cualquier plato. ¡Simplemente deliciosa! ", price: 8500, image: "imgs/yuca-frita.jpg" }
        ]
    },
    bebidas: {
        name: "Bebidas",
        description: "El complemento ideal para cualquier comida. Disfruta de una gran variedad de bebidas frias que te llenaran de energia y sabor. ¡Perfectas para acompañar tu momento favorito!",
        products: [
            { id: 51, name: "Coca-Cola", description: "Refrescante, burbujeante y con el sabor inconfundible que todos amamos. Ideal para acompañar cualquier plato y disfrutar al máximo cada momento.", price: 4000, image: "imgs/coca-cola.jpg" },
            { id: 52, name: "Jugo Natural", description: "Hecho con fruta 100% natural, lleno de frescura y sabor. La opción perfecta para quienes buscan algo delicioso y saludable. ", price: 6000, image: "imgs/jugo-natural.jpg"},
            { id: 53, name: "Limonada", description: "Refrescante y con el toque cítrico justo. Perfecta para calmar la sed y acompañar tus comidas con un sabor natural y equilibrio. ", price: 5000, image: "imgs/limonada.jpg" },
            { id: 54, name: "Malteada", description: "Cremosa, dulce y llena de sabor. Disfrútala en tu sabor favorito y dejáte tentar por su textura suave y deliciosa. ¡Un clásico que nunca pasa de moda!", price: 8000, image: "imgs/malteada.jpg" }
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
    <h3 style="color:#FF3D17; font-weight:800;">${category.name}</h3>
    <p style="color:#FFFFFF; font-weight:600;">${category.description}</p>
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
    const imageElement = product.image 
        ? `<img class="product-image" src="${product.image}" alt="${product.name}">`
        : `<div class="product-image">${product.emoji || ''}</div>`;

    return `
        <div class="product-card">
            ${imageElement}
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