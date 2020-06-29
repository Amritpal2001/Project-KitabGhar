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
// var x = document.getElementById("checkoutForm").elements[0];
//   console.log(x)
final="First Name : "+String(first_name)+"\nLast Name : "+String(last_name)+"\nEmail : "+String(email)+"\nLast Name : "+String(last_name)+"\nPhone : "+String(phone)+"\nAddress : "+String(address)+"\nState : "+String(state)+"\nPin Code : "+String(pincode)
console.log(final);
  sendEmail();
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
  