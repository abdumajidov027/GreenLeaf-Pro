// ===============================
// PRODUCT DETAIL PAGE
// ===============================

// URL dan id olish
const params = new URLSearchParams(window.location.search);
const productId = Number(params.get("id"));

// Mahsulotni topish
const product = products.find(item => item.id === productId);

// HTML element
const productContainer = document.getElementById("productDetail");

if (productContainer && product) {

    productContainer.innerHTML = `
    
    <div class="product-detail">

        <div class="detail-image">

            <img src="${product.image}" alt="${product.name}">

        </div>

        <div class="detail-info">

            <h1>${product.name}</h1>

            <p>${product.description}</p>

            <h2>${product.price.toLocaleString()} so'm</h2>

            <div class="pv">

                PV : ${product.pv}

            </div>

            <br>

            <button class="btn"
            onclick="addToCart(${product.id})">

                🛒 Savatchaga qo'shish

            </button>

        </div>

    </div>

    `;

}