---
layout: page
title: cart
permalink: /cart/
image:
---

<body>
  <script src="{{ site.baseurl }}/js/main.js"></script>
 <!-- <div class="products-container">
    <div class="product-header">
        <h5 class="products-title">Product</h5>
        <h5 class ="price">Price</h5>
        <h5 class="quantity">quantity</h5>
        <h5 class="total">TOTAL</h5>
    </div>
    <div class="products"> 
    </div>
</div>
 <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
 <script src="{{ site.baseurl }}/js/main.js"></script> -->
 <section class="container content-section">
            <h2 class="section-header">CART</h2>
            <div class="cart-row">
                <span class="cart-item cart-header cart-column">ITEM</span>
                <span class="cart-price cart-header cart-column">PRICE</span>
                <span class="cart-quantity cart-header cart-column">QUANTITY</span>
            </div>
            <div class="cart-items">
            </div>
            <div class="cart-total">
                <strong class="cart-total-title">Total</strong>
                <span class="cart-total-price">$0</span>
            </div>
            <button class="btn btn-primary btn-purchase" type="button">PURCHASE</button>
        </section>

    <style>
    @import url('https://fonts.googleapis.com/css?family=Raleway:300,400,700');
@import url("https://fonts.googleapis.com/css?family=Metal+Mania");

@font-face {
    font-family: "Booter - Zero Zero";
    src: url("Fonts/Booter - Zero Zero.woff") format("woff"),
         url("Fonts/Booter - Zero Zero.woff2") format("woff2");
    font-weight: normal;
    font-style: normal;
}

* {
    box-sizing: border-box;
    font-family: Raleway;
    color: #777;
}

html, body {
    margin: 0;
    padding: 0;
    min-height: 100%;
}

.nav ul {
    margin: 0;
}

.nav li {
    display: inline;
}

.nav a {
    display: inline-block;
    padding: .5em;
    color: white;
    text-decoration: none;
}

.main-nav {
    text-align: center;
    font-size: 1.1em;
    font-weight: lighter;
    border-bottom: 1px solid rgba(255, 255, 255, .3)
}

.main-nav li {
    padding: 0 5%;
}

.nav a:hover {
    background-color: rgba(255, 255, 255, .3)
}

.main-header {
    background-color: rgba(0, 0, 0, .6);
    background-image: url("Images/Header Background.jpg");
    background-blend-mode: multiply;
    background-size: cover;
    padding-bottom: 30px;
}

.band-name {
    text-align: center;
    margin: 0;
    font-size: 4em;
    font-family: "Booter - Zero Zero";
    font-weight: normal;
    color: white;
}

.band-name-large {
    font-size: 8em;
}

.content-section {
    margin: 1em;
}

.container {
    max-width: 900px;
    margin: 0 auto;
    padding: 0 1.5em;
}
.section-header {
    font-family: "Metal Mania";
    font-weight: normal;
    color: #333;
    text-align: center;
    font-size: 2.5em;
}

.about-band-image {
    float: left;
    height: 200px;
    width: 200px;
    margin: 15px;
    border-radius: 50%;
}

.main-footer {
    background-color: #56CCF2;
    color: white;
    padding: .25em 0;
}

.main-footer-container {
    display: flex;
    align-items: center;
}

.main-footer-container ul {
    flex-grow: 1;
    text-align: end;
}

.footer-nav li {
    padding: 0 .5em;
}

.footer-nav img {
    width: 30px;
    height: 30px;
}

.btn {
    text-align: center;
    vertical-align: middle;
    padding: .67em .67em;
    cursor: pointer;
}

.btn-header {
    margin: .5em 15% 2em 15%;
    color: white;
    border: 2px solid #2D9CDB;
    background-color: rgba(255, 255, 255, .1);
    border-radius: 0;
    font-size: 1.5em;
    font-weight: lighter;
    padding-left: 2em;
    padding-right: 2em;
}

.btn-header:hover {
    background-color: rgba(255, 255, 255, .3);
}

.btn-play {
    display: block;
    margin: 0 auto;
    color: #2D9CDB;
    font-size: 4em;
    border-radius: 50%;
    width: 100px;
    height: 100px;
    padding: 0;
    text-align: center;
}

.btn-primary {
    color: white;
    background-color: #56CCF2;
    border: none;
    border-radius: .3em;
    font-weight: bold;
}

.btn-primary:hover {
    background-color: #2D9CDB;
}

.tour-row {
    border-bottom: 1px solid black;
    padding-bottom: 1em;
    margin-bottom: 1em;
}

.tour-row:last-child {
    border: none;
}

.tour-item {
    display: inline-block;
    padding-right: .5em;
}

.tour-date {
    color: #555;
    width: 11%;
    font-weight: bold;
}

.tour-city {
    width: 24%;
}

.tour-arena {
    width: 42%;
}

.tour-btn {
    max-width: 19%;
}

.shop-item {
    margin: 30px;
}

.shop-item-title {
    display: block;
    width: 100%;
    text-align: center;
    font-weight: bold;
    font-size: 1.5em;
    color: #333;
    margin-bottom: 15px;
}

.shop-item-image {
    height: 250px;
}

.shop-item-details {
    display: flex;
    align-items: center;
    padding: 5px;
}

.shop-item-price {
    flex-grow: 1;
    color: #333;
}

.shop-items {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}

.cart-header {
    font-weight: bold;
    font-size: 1.25em;
    color: #333;
}

.cart-column {
    display: flex;
    align-items: center;
    border-bottom: 1px solid black;
    margin-right: 1.5em;
    padding-bottom: 10px;
    margin-top: 10px;
}

.cart-row {
    display: flex;
}

.cart-item {
    width: 45%;
}

.cart-price {
    width: 20%;
    font-size: 1.2em;
    color: #333;
}

.cart-quantity {
    width: 35%;
}

.cart-item-title {
    color: #333;
    margin-left: .5em;
    font-size: 1.2em;
}

.cart-item-image {
    width: 75px;
    height: auto;
    border-radius: 10px;
}

.btn-danger {
    color: white;
    background-color: #EB5757;
    border: none;
    border-radius: .3em;
    font-weight: bold;
}

.btn-danger:hover {
    background-color: #CC4C4C;
}

.cart-quantity-input {
    height: 34px;
    width: 50px;
    border-radius: 5px;
    border: 1px solid #56CCF2;
    background-color: #eee;
    color: #333;
    padding: 0;
    text-align: center;
    font-size: 1.2em;
    margin-right: 25px;
}

.cart-row:last-child {
    border-bottom: 1px solid black;
}

.cart-row:last-child .cart-column {
    border: none;
}

.cart-total {
    text-align: end;
    margin-top: 10px;
    margin-right: 10px;
}

.cart-total-title {
    font-weight: bold;
    font-size: 1.5em;
    color: black;
    margin-right: 20px;
}

.cart-total-price {
    color: #333;
    font-size: 1.1em;
}

.btn-purchase {
    display: block;
    margin: 40px auto 80px auto;
    font-size: 1.75em;
}
    </style>

<script>
    if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
} else {
    ready()
}

function ready() {
    var removeCartItemButtons = document.getElementsByClassName('btn-danger')
    for (var i = 0; i < removeCartItemButtons.length; i++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', removeCartItem)
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input')
    for (var i = 0; i < quantityInputs.length; i++) {
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }

    var addToCartButtons = document.getElementsByClassName('shop-item-button')
    for (var i = 0; i < addToCartButtons.length; i++) {
        var button = addToCartButtons[i]
        button.addEventListener('click', addToCartClicked)
    }

    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked)
}

function purchaseClicked() {
    alert('Thank you for your purchase')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    while (cartItems.hasChildNodes()) {
        cartItems.removeChild(cartItems.firstChild)
    }
    updateCartTotal()
}

function removeCartItem(event) {
    var buttonClicked = event.target
    buttonClicked.parentElement.parentElement.remove()
    updateCartTotal()
}

function quantityChanged(event) {
    var input = event.target
    if (isNaN(input.value) || input.value <= 0) {
        input.value = 1
    }
    updateCartTotal()
}

function addToCartClicked(event) {
    var button = event.target
    var shopItem = button.parentElement.parentElement
    var title = shopItem.getElementsByClassName('shop-item-title')[0].innerText
    var price = shopItem.getElementsByClassName('shop-item-price')[0].innerText
    var imageSrc = shopItem.getElementsByClassName('shop-item-image')[0].src
    addItemToCart(title, price, imageSrc)
    updateCartTotal()
}

function addItemToCart(title, price, imageSrc) {
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('cart-items')[0]
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title')
    for (var i = 0; i < cartItemNames.length; i++) {
        if (cartItemNames[i].innerText == title) {
            alert('This item is already added to the cart')
            return
        }
    }
    var cartRowContents = `
        <div class="cart-item cart-column">
            <img class="cart-item-image" src="${imageSrc}" width="100" height="100">
            <span class="cart-item-title">${title}</span>
        </div>
        <span class="cart-price cart-column">${price}</span>
        <div class="cart-quantity cart-column">
            <input class="cart-quantity-input" type="number" value="1">
            <button class="btn btn-danger" type="button">REMOVE</button>
        </div>`
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    cartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem)
    cartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged)
}

function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-quantity-input')[0]
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        var quantity = quantityElement.value
        total = total + (price * quantity)
    }
    total = Math.round(total * 100) / 100
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total
}
</script>
  
</body>
