let cart = [];

function addToCart() {
    const productName = document.getElementById("productName").value.trim();
    const price = document.getElementById("productPrice").value.trim();
    const quantity = document.getElementById("quantity").value.trim();

    if (productName === "" || price === "" || quantity === "") {
        alert("Please fill all fields.");
        return;
    }

    if (Number(price) <= 0 || Number(quantity) <= 0) {
        alert("Price and quantity must be greater than 0.");
        return;
    }

    const product = {
        name: productName,
        price: Number(price),
        quantity: Number(quantity)
    };

    cart.push(product);

    displayCart();

    document.getElementById("productName").value = "";
    document.getElementById("productPrice").value = "";
    document.getElementById("quantity").value = "1";
}

function displayCart() {
    const tableBody = document.getElementById("cartTableBody");
    const grandTotalElement = document.getElementById("grandTotal");

    tableBody.innerHTML = "";

    let grandTotal = 0;

    cart.forEach(function(product, index) {

        const total = product.price * product.quantity;

        grandTotal += total;

        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${index + 1}</td>
            <td>${product.name}</td>
            <td>₹${product.price}</td>
            <td>${product.quantity}</td>
            <td>₹${total}</td>
            <td>
                <button 
                    class="delete-btn"
                    onclick="removeFromCart(${index})">
                    Remove
                </button>
            </td>
        `;

        tableBody.appendChild(row);
    });

    grandTotalElement.textContent = grandTotal;
}

function removeFromCart(index) {

    if (confirm("Are you sure you want to remove this product?")) {

        cart.splice(index, 1);

        displayCart();
    }
}