// Dashboard statistikasi

const productCount = document.getElementById("productCount");
const orderCount = document.getElementById("orderCount");
const pvCount = document.getElementById("pvCount");

if (productCount) {

    productCount.textContent = products.length;

    const totalPV = products.reduce((sum, item) => sum + item.pv, 0);

    pvCount.textContent = totalPV;

    orderCount.textContent = 0;

}