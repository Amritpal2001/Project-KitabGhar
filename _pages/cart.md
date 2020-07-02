---
layout: default
title: Cart
permalink: /cart/
image:
---

 
 <head>
	<meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
	<link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css">
    <script src="https://unpkg.com/cart-localstorage@1.1.4/dist/cart-localstorage.min.js" type="text/javascript"></script>
</head>

<body>
	<div class="container mb-4">
            <div class="card mb-4 shadow-sm">
			<div class="card-header">
				<h1>Cart</h1>
			</div>
			<div class="card-body table-responsive">
				<table class="table">
						<td><strong>Serial No.</strong></td>
						<td><strong>Name</strong></td>
						<td><strong>Quantity</strong></td>
						<td><strong>Change</strong></td>
						<td><strong>Quantity</strong></td>
						<td class="text-right"><strong>Price</strong></td>
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
            <button class="btn btn-outline-warning mr-7" onClick="cartLS.destroy()">Clear Cart</button>
			<br><br>
			<a href="../ContactFrom_v17/index.html" class="checkout btn btn-outline-success mr-7">Checkout</a>
		</div>
	</div>
<style>
	.content{
		padding:80px 0px;
	}
	</style>
</body>

