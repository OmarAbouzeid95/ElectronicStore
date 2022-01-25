import cartItems from "../script.js";
const checkout = document.querySelector(".checkout");

const checkoutItems = document.querySelector(".checkout");

cartItems.forEach(item => {
    const div = document.createElement("div");
    div.innerHTML = item;
    checkout.append(div);
});
