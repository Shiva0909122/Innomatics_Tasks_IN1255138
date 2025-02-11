// Cart state
let cart = JSON.parse(localStorage.getItem('cart')) || [];
let products = [];

// DOM Elements
const productList = document.getElementById('productList');
const cartItems = document.getElementById('cartItems');
const cartCount = document.getElementById('cartCount');
const cartTotal = document.getElementById('cartTotal');

// Initialize the app
async function init() {
    productList.innerHTML = '<div class="text-center"><div class="spinner-border" role="status"><span class="visually-hidden">Loading...</span></div></div>';

    await fetchProducts(); // Single fetch call to get the products
    renderProducts(products);
    renderCart();
    updateCartCount();
}

// Fetch product data
async function fetchProducts() {
    try {
        const response = await fetch('https://api.npoint.io/91c48db9bb00466a5574');
        products = await response.json();
        console.log(products); // Log the product data to verify the image URL
        renderProducts(products);
    } catch (error) {
        console.error('Error fetching products:', error);
    }
}

// Render products
function renderProducts(productsToRender = products) {
    productList.innerHTML = productsToRender.map(product => {
        const inCart = cart.find(item => item.product_id === product.product_id);
        return `
        <div class="col-md-3 col-sm-6">
            <div class="card product-card">
                <img src="${product.image_url}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="product-price mb-3">₹${product.price.toFixed(2)}</p>
                    <p class="product-category mb-3">${product.category}</p>
                    
                    <button class="btn btn-primary add-to-cart-btn" id="add-to-cart-btn-${product.product_id}" onclick="addToCart(${product.product_id})">
                        ${inCart ? `Added (${inCart.quantity})` : 'Add to Cart'}
                    </button>
                </div>
            </div>
        </div>
        `;
    }).join('');
}

// Add item to cart
window.addToCart = function (productId) {
    const product = products.find(p => p.product_id === productId);
    let existingItem = cart.find(item => item.product_id === productId);
    const button = document.getElementById(`add-to-cart-btn-${productId}`);
    button.disabled = true; // Disable the button to prevent multiple clicks

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    setTimeout(() => button.disabled = false, 1000); // Enable the button after 1 second

    updateCart();
    renderCart();
    renderProducts();
};

// Remove item from cart
window.removeFromCart = function (productId) {
    cart = cart.filter(item => item.product_id !== productId);
    updateCart();
    renderCart();
    renderProducts();
};

// Update cart quantity
window.updateQuantity = function (productId, change) {
    let item = cart.find(item => item.product_id === productId);
    if (item) {
        item.quantity += change;
        if (item.quantity <= 0) {
            removeFromCart(productId);
        }
    }
    updateCart();
    renderCart();
    renderProducts();
};

// Handle checkout
async function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Log cart contents for debugging
    console.log("Cart contents before checkout:", cart);

    // Import jsPDF (if using ES6 modules, ensure jsPDF is loaded in your HTML)
    const { jsPDF } = window.jspdf;

    // Get user details
    const userName = prompt("Enter your name:", "Shivarth");
    if (!userName) return; // Ensure user enters a name

    const userLocation = prompt("Enter delivery location:", "CBN Colony, Nizamabad");
    if (!userLocation) return; // Ensure user enters location

    // Generate estimated delivery time (random 30-60 minutes)
    const estimatedTime = Math.floor(Math.random() * (60 - 30 + 1)) + 30;

    // Generate order summary
    const orderSummary = cart.map(item =>
        `${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Create the PDF
    const doc = new jsPDF();
    console.log(orderSummary)
    doc.setFont("Inter", "bold");
    doc.text("Order Receipt", 20, 20);
    doc.setFont("helvetica", "normal");
    doc.text(`Customer Name: ${userName}`, 20, 30);
    doc.text(`Delivery Location: ${userLocation}`, 20, 40);
    doc.text(`Estimated Delivery Time: ${estimatedTime} minutes`, 20, 50);
    doc.text("Order Summary:", 20, 60);

    let y = 70;
    cart.forEach(item => {
        doc.text(`${item.name} x${item.quantity} - ₹${(item.price * item.quantity).toFixed(2)}`, 20, y);
        y += 10;
    });

    doc.text(`Total Amount: ₹${total.toFixed(2)}`, 20, y + 10);

    // Save and Download PDF
    doc.save(`Order_Receipt_${userName.replace(/\s+/g, '_')}.pdf`);

    // Confirm order
    alert('Thank you for your purchase! Your receipt has been downloaded.');

    // Clear the cart after checkout
    cart = [];
    updateCart();
    renderCart();
    renderProducts();
}

// Render cart items
function renderCart() {
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-item-id="${item.product_id}">
            <img src="${item.image_url}" alt="${item.name}">
            <div class="cart-item-details">
                <div class="cart-item-title">${item.name}</div>
                <div class="cart-item-price">₹${(item.price * item.quantity).toFixed(2)}</div>
                <div class="quantity-controls">
                    <button onclick="updateQuantity(${item.product_id}, -1)">-</button>
                    <span>${item.quantity}</span>
                    <button onclick="updateQuantity(${item.product_id}, 1)">+</button>
                </div>
            </div>
            <button class="cart-item-remove" onclick="removeFromCart(${item.product_id})">
                <i class="bi bi-trash"></i>
            </button>
        </div>
    `).join('') || '<p class="text-center">Your cart is empty</p>';

    updateCartTotal();
}

// Update cart count
function updateCartCount() {
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCount.textContent = totalItems;
    cartCount.classList.toggle('active', totalItems > 0);
}

// Update cart total
function updateCartTotal() {
    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    cartTotal.textContent = `₹${total.toFixed(2)}`;
}

// Update cart state
function updateCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}
function filterCategory(category) {
    const filteredProducts = category === 'All' ? products : products.filter(p => p.category === category);
    renderProducts(filteredProducts);
}

document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);

// Initialize the app
init();
