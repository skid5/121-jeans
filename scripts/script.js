// Add interactivity if needed
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecting to the shop...');
    });
});

// Update stock availability based on selected size
document.getElementById('size').addEventListener('change', function() {
    const size = this.value;
    const stock = {
        S: 2,
        M: 5,
        L: 0
    };
    const stockMessage = stock[size] > 0 ? `(${stock[size]} in stock)` : '(Out of stock)';
    alert(`Selected size: ${size} ${stockMessage}`);
});