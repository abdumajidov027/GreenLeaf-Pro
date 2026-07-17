// ===============================
// CART SYSTEM
// ===============================

let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Savatchaga qo'shish
function addToCart(id) {

    const product = products.find(item => item.id === id);

    if (!product) return;

    const existing = cart.find(item => item.id === id);

    if (existing) {
        existing.quantity++;
    } else {
        cart.push({
            ...product,
            quantity: 1
        });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    updateCartCount();

    alert(product.name + " savatchaga qo'shildi!");
}

// Savatchadagi mahsulotlar soni
function updateCartCount() {

    const cartCount = document.getElementById("cartCount");

    if (!cartCount) return;

    const total = cart.reduce((sum, item) => sum + item.quantity, 0);

    cartCount.textContent = total;
}

updateCartCount();
// =========================
// CART PAGE
// =========================

function loadCart() {

    const cartItems = document.getElementById("cartItems");

    const totalPrice = document.getElementById("totalPrice");

    if (!cartItems) return;

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach(item => {

        total += item.price * item.quantity;

        cartItems.innerHTML += `

        <div class="product-card">

            <div class="product-content">

                <h3>${item.name}</h3>

                <p>${item.price.toLocaleString()} so'm</p>

                <p>PV : ${item.pv}</p>

                <p>Soni : ${item.quantity}</p>

            </div>

        </div>

        `;

    });

    totalPrice.textContent = total.toLocaleString();

}

loadCart();