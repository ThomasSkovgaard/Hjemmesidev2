
// Making a variable for the button "Add to cart" in the html
//var addToCart = document.getElementById("add");

// Making a function for the pressing of button "Add to cart"
addToCart.onclick = function (e) {
    e.preventDefault();
    addProduct();

    alert("Product added to cart!");
};


// Making a function to add products to cart
function addProduct() {


    // Making an empty array to store products added to shopping cart later
    var productList = [];

    // Making a class for a product with a constructor containing product info
    class Product {
        constructor(type, name, size, price) {
            this.type = type;
            this.name = name;
            this.size = size;
            this.price = price;
        }
    }

    // Making a new product from the constructor in class "Product"
    new Product("T-shirt", "Bullpadel Crandol Blue Polo Shirt", document.getElementById("Size1"), "240,00 DKK");
    // Pushing the new product to the array "productList"
    addToCart.onclick = productList.push(Product);
    console.log(productList)

    // Saving the info pushed into the array "productList" in local storage
    localStorage.setItem('productList', JSON.stringify(productList));
    }



var showCart = document.getElementById("showCart");

showCart.onclick = function (e) {
    e.preventDefault();
    showCart();

// Function to show data in cart stored in array "productList"
    function showCart() {
        // Making a variable "currentCart" for the current info stored in local storage in the array "productList"
        var currentCart = JSON.parse(localStorage.getItem("productList"));
        console.log(currentCart);
    }

};