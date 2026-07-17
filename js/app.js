// Product List Container
const productList = document.getElementById("productList");

// Mahsulotlarni chiqarish
function displayProducts(items) {

    if (!productList) return;

    productList.innerHTML = "";

    items.forEach(product => {

        productList.innerHTML += `

        <div class="product-card">

            <div class="product-image">

                <img src="${product.image}" alt="${product.name}">

            </div>

            <div class="product-content">

                <h3>${product.name}</h3>

                <p>${product.description}</p>

                <div class="price">

                    ${product.price.toLocaleString()} so'm

                </div>

                <div class="pv">

                    PV : ${product.pv}

                </div>

                <button class="product-btn" onclick="openProduct(${product.id})">
    Batafsil →
</button>

            </div>

        </div>

        `;

    });

}

// Product sahifasiga o'tish
function openProduct(id) {

    window.location.href = `product.html?id=${id}`;

}

// Sayt ochilganda mahsulotlarni chiqarish
displayProducts(products);
// ==============================
// CATEGORY FILTER
// ==============================

const categoryButtons = document.querySelectorAll(".category");

categoryButtons.forEach(button => {

    button.addEventListener("click", function () {

        // Active class
        categoryButtons.forEach(btn => btn.classList.remove("active"));
        this.classList.add("active");

        const category = this.textContent.trim();

        if (category === "Hammasi") {
            displayProducts(products);
            return;
        }

        const filtered = products.filter(product =>
            product.category.toLowerCase() === category.toLowerCase()
        );

        displayProducts(filtered);

    });

});