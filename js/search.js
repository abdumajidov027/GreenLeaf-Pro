// ==============================
// SEARCH
// ==============================

const searchInput = document.getElementById("searchInput");

if (searchInput) {

    searchInput.addEventListener("keyup", function () {

        const keyword = this.value.toLowerCase().trim();

        const filteredProducts = products.filter(product => {

            return (
                product.name.toLowerCase().includes(keyword) ||
                product.category.toLowerCase().includes(keyword) ||
                product.description.toLowerCase().includes(keyword)
            );

        });

        displayProducts(filteredProducts);

    });

}