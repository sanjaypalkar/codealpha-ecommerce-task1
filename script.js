let cart = [];

function addToCart(name, price){

    cart.push({
        name:name,
        price:price
    });

    displayCart();
}

function displayCart(){

    let cartDiv = document.getElementById("cart");

    let html = "";

    let total = 0;

    for(let i=0;i<cart.length;i++){

        html += `
        <p>
        ${cart[i].name} - ₹${cart[i].price}
        <button onclick="removeItem(${i})">Remove</button>
        </p>
        `;

        total += cart[i].price;
    }

    cartDiv.innerHTML = html;

    document.getElementById("total").innerHTML =
    "Total: ₹" + total;
}

function removeItem(index){

    cart.splice(index,1);

    displayCart();
}

function clearCart(){

    cart = [];

    displayCart();
}