var final=""
var clientEmail="matharooamrit0098@gmail.com"
var clientFinal=""
var orderPlaced="Order Placed"
var newOrder="New Order"
function myFunction() {
  var first_name= String(document.getElementById("first-name").value);
  var last_name= String(document.getElementById("last-name").value);
  var email= String(document.getElementById("email").value);
  var phone= String(document.getElementById("phone").value);
  var address= String(document.getElementById("address").value);
  var state = String(document.getElementById("state").value);
  var city= String(document.getElementById("city").value);
  var pincode= String(document.getElementById("pincode").value);
  var order= JSON.parse(localStorage.getItem("__cart"));
    var product="";
  var productIncart="";
  var total=0;
    for( let i=0;i<order.length;i+=1){
    total=total+(order[i].price*order[i].quantity)
        product= "<h2>Name : "+String(order[i].name)+"</h2><h2>Quantity : "+String(order[i].quantity)+"</h2><h2>Price ₹: "+String(order[i].price)+"</h2>";
        productIncart=productIncart+product+"<br></br>";
  }
  productIncart=productIncart+"<h2>Total ₹: "+String(total)+"</h2>"
final="<html><h2>Name : "+first_name+" "+last_name+"</h2><h2>Email : "+email+"</h2><h2>Phone : "+phone+"</h2><h2>Address : "+address+"</h2><h2>State : "+state+"</h2><h2>City : "+city+"</h2><h2>Pin Code : "+pincode+"</h2><br></br><h1>Order Details</h1>"+productIncart+"</html>"
console.log(email);
  clientFinal=final+"<html><h1>Payment Method</h1><h2>Through paytm number : ##########</h2><h2>Through Google pay: ********** </h2><h2>Total : ₹"+total+"</h2></html>"
  sendEmail(clientEmail,final,newOrder);
  sendEmail(email,clientFinal,orderPlaced);
  localStorage.clear()  
  alert("Your order has been placed successfully")
  alert("Check your email for payment")
  alert("Your order will only be processed after confirmation of payment")
  }

  function sendEmail(x,y,z) {
    Email.send({
    Host: "smtp.gmail.com",
    Username : "matharooamrit0098@gmail.com",
    Password : "@99889988a",
    To : x,
    From : "matharooamrit0098@gmail.com",
    Subject : z,
    Body : y,
    }).then(
    );
}