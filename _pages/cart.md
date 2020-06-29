---
layout: page
title: Cart
permalink: /cart/
image:
---

 
 <head>
	<title>Demo</title>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://unpkg.com/cart-localstorage@1.1.4/dist/cart-localstorage.min.js" type="text/javascript"></script>
</head>

<body>
	<div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
	</div>
	<div class="container">
            <div class="card mb-4 shadow-sm">
			<div class="card-header">
				<h2>Cart</h2>
			</div>
			<div class="card-body">
				<table class="table">
					<tbody class="cart">
					</tbody>
					<tfoot>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td></td>
						<td class="text-right">Total: <strong class="total"></strong></td>
						<td></td>
					</tfoot>
				</table>
			</div>
            <button class="btn btn-outline-warning mr-2" onClick="cartLS.destroy()">Clear Cart</button>
		</div>
	</div>
	<a href="../ContactFrom_v17/index.html">Checkout</a>
	    <script src="https://smtpjs.com/v3/smtp.js"></script>  
	<form method="post">
		<input type="button" value="Send Email" onclick="sendEmail()"/>
	</form> 
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
	var order= JSON.parse(localStorage.getItem("__cart"));
	var product="";
	var productIncart="";
	for( let i=0;i<order.length;i+=1){
		product= "Name : "+String(order[i].name)+" Quantity : "+String(order[i].quantity)+" Price : "+String(order[i].price);
		productIncart=productIncart+product+"\n";

	}
	console.log(productIncart);	
	function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "matharooamrit0098@gmail.com",
	Password : "grandmax#2846",
	To : 'matharooamrit0098@gmail.com',
	From : "matharooamrit0098@gmail.com",
	Subject : "Order",
	Body : productIncart,
	}).then(
		message => alert("mail sent successfully")
	);
}
</script>
</body>

