// Get the container for product listings
const productListings = document.getElementById('product-listings');

// Function to generate HTML for a single product listing
function createProductListing(product) {
    return `
        <div class="product-listing">
            <a href="product.html?id=${product.id}" class="product-link">
                <h3>${product.name}</h3>
            </a>
            <div class="product-content">
                <div class="product-info">
                    <p>${product.description}</p>
                    <p class="price">$${product.price.toFixed(2)}</p>
                </div>
                <a href="product.html?id=${product.id}" class="product-link">
                    <img src="${product.image}" alt="${product.name}">
                </a>
            </div>
        </div>
    `;
}

// Function to populate the shop page with product listings
function populateProductListings() {
    let listingsHTML = '';
    for (const productId in products) {
        const product = products[productId];
        listingsHTML += createProductListing(product);
    }
    productListings.innerHTML = listingsHTML;
}

// Populate product listings when the page loads
window.onload = populateProductListings;