import mobileList from "./Data/mobileData.js";
import laptopList from "./Data/laptopData.js";

const body = document.querySelector("body");
const title = document.querySelector(".title");
const soldItems = document.querySelector(".items");
const allBtn = document.querySelector("#allBtn");
const mobBtn = document.querySelector("#mobBtn");
const lapBtn = document.querySelector("#lapBtn");
const searchBar = document.querySelector("#searchBar");
const cartItems = [];
const cart = document.querySelector("#cart");


function removeAll(){
    soldItems.innerHTML = "";
};

function showMobile() {

    mobileList.forEach(mobile => {
        const div = document.createElement("div");
        const  content = `
            <div class="item">
                <img class="itemImg" src="${mobile.image}">
                <div class="itemPrice">
                    <p>${mobile.model}</p>
                    <p>${mobile.price}</p>
                </div> 
                
            </div>
        `;
        div.innerHTML = content;
        soldItems.append(div);
        });
        
        
};

function showLaptop() {

    laptopList.forEach(laptop => {
        const div = document.createElement("div");
        const  content = `
            <div class="item">
                <img class="itemImg" src="${laptop.image}">
                <div class="itemPrice">
                    <p>${laptop.model}</p>
                    <p>${laptop.price}</p>
                </div> 
                
            </div>
        `;
        div.innerHTML = content;
        soldItems.append(div);
        });
        
};


function showSearched(string) {

    removeAll();

    mobileList.forEach(mobile => {

        if(mobile.model == string || mobile.brand == string){
            const div = document.createElement("div");
            const  content = `
                <div class="item">
                    <img class="itemImg" src="${mobile.image}">
                    <div class="itemPrice">
                        <p>${mobile.model}</p>
                        <p>${mobile.price}</p>
                    </div> 
                    
                </div>
            `;
            div.innerHTML = content;
            soldItems.append(div);
            }
        });

        laptopList.forEach(laptop => {

            if(laptop.model == string || laptop.brand == string){
                const div = document.createElement("div");
                const  content = `
                    <div class="item">
                        <img class="itemImg" src="${laptop.image}">
                        <div class="itemPrice">
                            <p>${laptop.model}</p>
                            <p>${laptop.price}</p>
                        </div> 
                        
                    </div>
                `;
                div.innerHTML = content;
                soldItems.append(div);
                }
            });

            if(soldItems.innerHTML === ""){
                window.alert("Sorry, we don't have what you're looking for!")
            }
            
            addCart();

}

function showAll(){

    removeAll();
    showMobile();
    showLaptop();
    addCart();
};

showAll();



allBtn.addEventListener("click", showAll);
mobBtn.addEventListener("click", () => {
    removeAll();
    showMobile();
    addCart();
});
lapBtn.addEventListener("click", () => {
    removeAll();
    showLaptop();
    addCart();
});
searchBar.addEventListener("keypress", (e) => {
    if(e.key === "Enter"){
        const searchItem = searchBar.value;
        if(searchItem == ""){
            window.alert("Please type what you're looking for");
        }else {
            showSearched(searchItem);
        }
    }
});
//cart.addEventListener("click", showCart);

function addCart() {
    const items = document.querySelectorAll(".item");
    items.forEach(item => {
        item.addEventListener("click", (e) => {
                const content = e.path[1].innerHTML;
                cartItems.push(content);
                if(cartItems.length > 0){
                    cart.innerHTML = `
                    <p> ${(cartItems.length)} items in cart  </p>
                    `;
                cart.classList.add("cart");
                } 
            });
        });
}

/*function showCart(){
    cart.innerHTML = "";
    cart.classList.remove("cart");
    soldItems.innerHTML = "";
    cartItems.forEach(item => {
        const div = document.createElement("div");
        div.innerHTML = item;
        soldItems.append(div);
    })
};*/

export default cartItems;









