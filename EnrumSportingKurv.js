/* https://stackoverflow.com/questions/16293977/creating-a-shopping-cart-using-only-html-javascript
* https://github.com/hamderhc/Hold24/blob/95663a624efdf07f3be936aeec4a82eafd89c528/festival/ClassProduct.js */
//create array that will hold all ordered products
var shoppingCart = [];

//this function manipulates DOM and displays content of our shopping cart
function displayShoppingCart(){
    var addedProducts=document.getElementById("addedProducts");
    //ensure we delete all previously added rows from ordered products table
    while(addedProducts.rows.length>0) {
        addedProducts.deleteRow(0);
    }

    //variable to hold total price of shopping cart
    var cartTotalPrice=0;
    //iterate over array of objects
    for(var product in shoppingCart){
        //add new row
        var row=addedProducts.insertRow();
        //create three cells for product properties
        var cellName = row.insertCell(0);
        var cellDescription = row.insertCell(1);
        var cellPrice = row.insertCell(2);
        cellPrice.align="right";
        //fill cells with values from current product object of our array
        cellName.innerHTML = shoppingCart[product].Name;
        cellDescription.innerHTML = shoppingCart[product].Description;
        cellPrice.innerHTML = shoppingCart[product].Price;
        cartTotalPrice+=shoppingCart[product].Price;
    }
    //fill total cost of our shopping cart
    document.getElementById("cartTotal").innerHTML=cartTotalPrice;
}



    function addToCart(name, description, price) {
        //Below we create JavaScript Object that will hold three properties you have mentioned:    Name,Description and Price
        var singleProduct = {};
        //Fill the product object with data
        singleProduct.Name = name;
        singleProduct.Description = description;
        singleProduct.Price = price;
        //Add newly created product to our shopping cart
        shoppingCart.push(singleProduct);
        //call display function to show on screen
        displayShoppingCart();
}




/*

//Creating empty arrays to keep products
var allProducts = [];
var shoppingCart = [];


// Making a class for a product with a constructor containing product info
class Product {
    constructor(type, name, size, price) {
        this.type = type;
        this.name = name;
        this.size = size;
        this.price = price;
    }

    // Making a function to display products added to cart in html table
    displayShoppingCart() {
        var addedProducts = document.getElementById("addedProducts");
        console.log(addedProducts);
        //ensure we delete all previously added rows from ordered products table
        while (addedProducts.rows.length > 0) {
            addedProducts.deleteRow(0); }

        // Making a variable to show total price of products added to cart
        var cartTotalPrice = 0;

        //iterate over array of objects
        for (var Product in shoppingCart) {

            // Adding new row to cart table of products added
            var row = addedProducts.insertRow();

            //Making three cells for cart table in html
            var cellProduct = row.insertCell(0);
            var cellDescription = row.insertCell(1);
            var cellPrice = row.insertCell(2);
            cellPrice.align = "right";



            // Filling up cells with values of products chosen in the array
            cellProduct.innerHTML = shoppingCart[Product].name;
            cellDescription.innerHTML = shoppingCart[Product].description;
            cellPrice.innerHTML = shoppingCart[Product].price;
            cartTotalPrice += shoppingCart[Product].price;
            document.getElementById("cartTotal").innerHTML = cartTotalPrice;
        }
    }
}

// Creating a function for creating products and pushing them into the array
function createObjects(){

    allProducts.push(new Product("bold", "bullpadelPremiumPro", "size", "59,00 dkk"));
    allProducts.push(new Product("bold", "bullpadelPremiumGold", "size", "68,00 dkk"));
    allProducts.push(new Product("bat", "bullpadelVertexAvantline", "size", "1.449,00 dkk"));
    for(i=0; i < allProducts.length; i++){
        allProducts[i].displayShoppingCart();
    }
}


function removeAll(){
    document.getElementById("addedProducts").innerHTML = "";
    document.getElementById("cartTotal").innerHTML = "";
    shoppingCart.splice(0, 99,);
}



//Making an empty variable to identify product added by ID
var clickedButtonID;

// Making a variable to get all items by class name "buttons"
var buttons = document.getElementsByClassName("buttons");


/*Making a for loop to go through products and selecting the clicked and added product, which afterwards then get pushed
into the empty array shoppingCart
function AddtoCart(navn, antal, pris){
    console.log("error");
    console.log(allProducts);
    console.log(shoppingCart);
    console.log(clickedButtonID);
    for(i=0; i<allProducts.length; i++){
        if (clickedButtonID == allProducts[i].name){
            shoppingCart.push(allProducts[i]);

            console.log("The price is " + shoppingCart[i].price);

            allProducts[i].displayShoppingCart();
        }
    }
}


// Making a for loop to go through products and selecting the product clicked by 'this.id' and then adding it to cart
for(i=0; i < buttons.length; i++){
    console.log("hi");
    buttons[i].addEventListener("click", function(){
        clickedButtonID = this.id;
        console.log(clickedButtonID);
        AddtoCart();
    })
}

// Der oprettes et seperat ID til hver af produkterne.
var bullpadelPremiumProBtn = document.getElementById('bullpadelPremiumPro');
var bullpadelPremiumGoldBtn = document.getElementById('bullpadelPremiumGold');
var bullpadelVertexAvantlineBtn = document.getElementById('bullpadelVertexAvantline');








// Making a variable for the button "Add to cart" in the html
//var addToCart = document.getElementById("add");

// Making a function for the pressing of button "Add to cart"
/*addToCart.onclick = function (e) {
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

    // Making a variable for the current info stored in local storage in the array "productList"
    var currentCart = JSON.parse(localStorage.getItem("productList"));
    console.log(currentCart);


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

}
