---
layout: page
title: Books
permalink: /Books/
---
<head>
	 <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

  <!-- Bootstrap CSS -->
  <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css"
    integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm" crossorigin="anonymous">
        <script src="https://unpkg.com/cart-localstorage@1.1.4/dist/cart-localstorage.min.js" type="text/javascript"></script>
</head>

<body>

<!-- Book 1 -->
<div class="image" id="1">
    <img src="../images/02.jpg" class="" alt="Rani Tatt" width="50%" height="50%">
        <div class="description">
            <h3>Rani Tatt</h3>
                    <span><h3>Price 250</h3></span>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
						onClick="cartLS.add({id: 1, name: 'Rani Tatt', price: 100})">Add to
						Cart</button>
        </div>
</div>

<!-- Book 2 -->
<div class="image" id="1">
    <img src="../images/03.jpg" class="" alt="Rani Tatt" width="50%" height="50%">
        <div class="description">
            <h3>T-Shirt</h3>
                    <span><h3>Price 2250</h3></span>
                    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal"
						onClick="cartLS.add({id: 2, name: 'T-Shirt', price: 2250})">Add to
						Cart</button>
        </div>
</div>
<!-- Book 3 -->

<!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Added to cart successfully</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
        <a href="../cart/index.html" class="btn btn-primary">Go To Cart</a>
      </div>
    </div>
  </div>
</div>
<style>
.image{
      margin-bottom: 10px;
      padding: 10px 10px;
      transition: transform .2s;
      padding: 0px 100px;
      margin: 0px;
    }
.image:hover{
    transform: scale(1.1);
    background-color:rgba(0,0,0,0.15);
}
.description{
      float: right;
      margin:10% 10%
     }
     h3{
       margin-bottom: 20px;
     }
a{
         text-decoration:none;
         color:white;
 }
</style>
<script>
    function renderCart(items) {
		const $cart = document.querySelector(".cart")
		const $total = document.querySelector(".total")
        $cart.innerHTML = items.map((item) => `
					<tr>
						<td>#${item.id}</td>
						<td>${item.name}</td>
						<td>${item.quantity}</td>
						<td style="width: 60px;">	
							<button type="button" class="btn btn-block btn-sm btn-outline-primary"
								onClick="cartLS.quantity(${item.id},1)">+</button>
						</td>
						<td style="width: 60px;">	
							<button type="button" class="btn btn-block btn-sm btn-outline-primary"
								onClick="cartLS.quantity(${item.id},-1)">-</button>
						</td>
						<td class="text-right">$${item.price}</td>
						<td class="text-right"><Button class="btn btn-primary" onClick="cartLS.remove(${item.id})">Delete</Button></td>
					</tr>`).join("")
            $total.innerHTML = "Rs. " + cartLS.total()
		}
		renderCart(cartLS.list())
		cartLS.onChange(renderCart)
	</script>
<script src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
    integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
    crossorigin="anonymous"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js"
    integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
    crossorigin="anonymous"></script>
  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js"
    integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
    crossorigin="anonymous"></script>
</body>

