// Get the product ID from the URL
const urlParams = new URLSearchParams(window.location.search);
const productId = urlParams.get('id');

// Get the product data from the products.js object
const product = products[productId];

// Function to update the product details on the page
function loadProductDetails() {
    if (product) {
        // Update the product name
        document.getElementById('product-name').textContent = product.name;

        // Update the product price
        document.getElementById('product-price').textContent = `$${product.price.toFixed(2)}`;

        // Update the product description
        document.getElementById('product-description').textContent = product.description;

        // Update the product image
        const productImage = document.getElementById('product-image');
        productImage.src = product.image;
        productImage.alt = product.name;

        // Populate the size dropdown
        const sizeSelect = document.getElementById('size');
        sizeSelect.innerHTML = ''; // Clear existing options
        for (const [size, stock] of Object.entries(product.sizes)) {
            const option = document.createElement('option');
            option.value = size;
            option.textContent = `${size} (${stock} in stock)`;
            if (stock === 0) {
                option.disabled = true; // Disable out-of-stock sizes
            }
            sizeSelect.appendChild(option);
        }
    } else {
        // If the product is not found, show an error message
        document.getElementById('product-name').textContent = "Product Not Found";
        document.getElementById('product-description').textContent = "The requested product does not exist.";
    }
}

// Handle form submission
document.getElementById('size-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the form from submitting
    const selectedSize = document.getElementById('size').value;
    if (selectedSize) {
        alert(`Added ${product.name} (Size: ${selectedSize}) to cart!`);
    } else {
        alert('Please select a size.');
    }
});

// Load product details when the page loads
window.onload = loadProductDetails;