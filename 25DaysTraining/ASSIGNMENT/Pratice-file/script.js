// Fetch products from API
async function fetchProducts() {
    try {
        const response = await fetch('https://api.npoint.io/fd2ca043960610c4536a');
        const data = await response.json();
        return data.map(item => ({
            product_id: item.product_id,
            name: item.name,
            price: parseFloat(item.price),
            image: item.image_url || 'https://via.placeholder.com/300x200?text=Food',
            category: item.category || 'Food',
            description: item.description || 'Delicious food item'
        }));
    } catch (error) {
        console.error('Error fetching products:', error);
        return [];
    }
}

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

    products = await fetchProducts();
    renderProducts();
    renderCart();
    updateCartCount();
}

// Render products
function renderProducts(productsToRender = products) {
    productList.innerHTML = productsToRender.map(product => {
        const inCart = cart.find(item => item.product_id === product.product_id);
        return `
        <div class="col-md-3 col-sm-6">
            <div class="card product-card">
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title">${product.name}</h5>
                    <p class="product-price mb-3">₹${product.price.toFixed(2)}</p>
                    <button class="btn btn-primary add-to-cart-btn" onclick="addToCart(${product.product_id})">
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

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

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
// function handleCheckout() {
//     if (cart.length === 0) {
//         alert('Your cart is empty!');
//         return;
//     }

//     const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
//     const message = `Order Summary:\n\n${cart.map(item => 
//         `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
//     ).join('\n')}\n\nTotal: $${total.toFixed(2)}`;

//     // Confirm order
//     if (confirm(message + '\n\nProceed to Checkout?')) {
//         alert('Thank you for your purchase! Your order has been placed.');

//         // Clear the cart
//         cart = [];
//         updateCart();
//         renderCart();
//         renderProducts(); // Update product buttons
//     }
// }
async function handleCheckout() {
    if (cart.length === 0) {
        alert('Your cart is empty!');
        return;
    }

    // Import jsPDF (if using ES6 modules)
    const { jsPDF } = window.jspdf;

    // Get user details
    const userName = prompt("Enter your name:", "Shivarth");
    if (!userName) return;

    const userLocation = prompt("Enter delivery location:", "CBN Colony, Nizamabad");
    if (!userLocation) return;

    // Generate estimated delivery time (random 30-60 minutes)
    const estimatedTime = Math.floor(Math.random() * (60 - 30 + 1)) + 30;

    // Generate order summary
    const orderSummary = cart.map(item =>
        `${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    ).join('\n');

    const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

    // Generate PDF
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

    // Clear the cart
    cart = [];
    updateCart();
    renderCart();
    renderProducts();
}


// Render cart items
function renderCart() {
    cartItems.innerHTML = cart.map(item => `
        <div class="cart-item" data-item-id="${item.product_id}">
            <img src="${item.image}" alt="${item.name}">
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
document.getElementById('checkoutBtn').addEventListener('click', handleCheckout);

// Initialize the app
init();
