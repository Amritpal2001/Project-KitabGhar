var final=""
function myFunction() {
  var first_name= document.getElementById("first-name").value;
  var last_name= document.getElementById("last-name").value;
  var email= document.getElementById("email").value;
  var phone= document.getElementById("phone").value;
  var address= document.getElementById("address").value;
  var state = document.getElementById("state").value;
  var city= document.getElementById("city").value;
  var pincode= document.getElementById("pincode").value;

  var order= JSON.parse(localStorage.getItem("__cart"));
	var product="";
  var productIncart="\n\nCartItems\n";
  var total=0;
	for( let i=0;i<order.length;i+=1){
    total=total+(order[i].price*order[i].quantity)
		product= "Name : "+String(order[i].name)+" Quantity : "+String(order[i].quantity)+" Price : "+String(order[i].price);
		productIncart=productIncart+product+"\n";
  }
  productIncart=productIncart+"Total : "+String(total)+"\n"
final="First Name : "+String(first_name)+"\nLast Name : "+String(last_name)+"\nEmail : "+String(email)+"\nPhone : "+String(phone)+"\nAddress : "+String(address)+"\nState : "+String(state)+"\nCity : "+String(city)+"\nPin Code : "+String(pincode)+productIncart
console.log(final);
  // sendEmail()
  localStorage.clear()
  }

  function sendEmail() {
	Email.send({
	Host: "smtp.gmail.com",
	Username : "matharooamrit0098@gmail.com",
	Password : "grandmax#2846",
	To : 'matharooamrit0098@gmail.com',
	From : "matharooamrit0098@gmail.com",
	Subject : "Form Data",
	Body : final,
	}).then(
		message => alert("mail sent successfully")
	);
}
  