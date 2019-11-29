/*https://github.com/hamderhc/Hold24/blob/master/festival/festival.html*/

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
        //ensure we delete all previously added rows from ordered products table
        while (addedProductsBody.rows.length > 0) {
            addedProductsBody.deleteRow(0);
        }

        //variable to hold total price of shopping cart
        var cartTotalPrice = 0;
        //iterate over array of objects
        for (var product in shoppingCart) {
            //add new row
            var row = addedProductsBody.insertRow();
            //create three cells for product properties
            var cellName = row.insertCell(0);
            var cellPrice = row.insertCell(1);
            cellPrice.align = "right";

            //fill cells with values from current product object of our array
            cellName.innerHTML = shoppingCart[product].Name;
            cellPrice.innerHTML = shoppingCart[product].Price;
            cartTotalPrice += shoppingCart[product].Price;
        }
        //fill total cost of our shopping cart
        document.getElementById("cartTotal").innerHTML = cartTotalPrice;

    }
        function AddtoCart(name, price) {

            //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
            var singleProduct = {};
            //Fill the product object with data
            singleProduct.Name = name;
            singleProduct.Price = price;
            //Add newly created product to our shopping cart
            shoppingCart.push(singleProduct);
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


