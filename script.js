let cart = [];

const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const totalElement = document.getElementById("total");

document.querySelectorAll(".add-cart").forEach(button => {

    button.addEventListener("click", () => {

        const name = button.dataset.name;
        const price = parseInt(button.dataset.price);

        cart.push({
            name,
            price
        });

        updateCart();
    });

});

function updateCart(){

    cartItems.innerHTML = "";

    let total = 0;

    cart.forEach((item,index)=>{

        total += item.price;

        const li = document.createElement("li");

        li.innerHTML = `
            <span>${item.name} - ₹${item.price}</span>
            <button class="remove-btn" onclick="removeItem(${index})">
                Remove
            </button>
        `;

        cartItems.appendChild(li);

    });

    cartCount.textContent = cart.length;
    totalElement.textContent = total;
}

function removeItem(index){

    cart.splice(index,1);

    updateCart();
}

function clearCart(){

    cart = [];

    updateCart();
}

function toggleCart(){

    const cartBox =
        document.getElementById("cart-box");

    if(cartBox.style.display === "block"){
        cartBox.style.display = "none";
    }else{
        cartBox.style.display = "block";
    }
}