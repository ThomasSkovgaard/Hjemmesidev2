
//create array that will hold all ordered products
var shoppingCart = [];

// Creating a class for products
class Product {
    constructor(name, price) {
        this.name = name;
        this.price = price;
    }
}

//this function manipulates DOM and displays content of our shopping cart
    function displayShoppingCart() {
        var addedProductsBody = document.getElementById("addedProductsBody");
        console.log(addedProductsBody);

        while (addedProductsBody.rows.length > 0) {
            addedProductsBody.deleteRow(0);
        }

        //variable to hold total price of shopping cart
        var cartTotalPrice = 0;

        for (var Product in shoppingCart) {
            //add new row
            var row = addedProductsBody.insertRow();
            //create three cells for product properties
            var cellName = row.insertCell(0);
            var cellPrice = row.insertCell(1);
            cellPrice.align = "right";

            //fill cells with values from current product object of our array
            cellName.innerHTML = shoppingCart[Product].Name;
            cellPrice.innerHTML = shoppingCart[Product].Price;
            cartTotalPrice += shoppingCart[Product].Price;
        }
        //fill total cost of our shopping cart
        document.getElementById("cartTotal").innerHTML = cartTotalPrice;

    }
        function AddtoCart(name, price) {

            //Below we create JavaScript Object that will hold two properties you have mentioned:    Name and Price
            var Product = {};
            //Fill the product object with data
            Product.Name = name;
            Product.Price = price;
            //Add newly created product to our shopping cart
            shoppingCart.push(Product);
            //call display function to show on screen
            displayShoppingCart();

        }

function removeAll(){
    document.getElementById("addedProductsBody").innerHTML = "";
    document.getElementById("cartTotal").innerHTML = "";
    shoppingCart.splice(0, 99);

}

function saveProductsCart() {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
}

function showShoppingCart() {
    JSON.parse(localStorage.getItem("shoppingCart"));
    console.log(JSON.parse(localStorage.getItem("shoppingCart")));
}


