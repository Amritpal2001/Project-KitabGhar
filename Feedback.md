---
layout: page
title: feedback
permalink: /Feedback/
image:
---
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">

<script src="https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>

                                                                                           
</head>
<body>
<section>
<div class="row">
    <div class="col-md-12">
      	<form id="form" target="_self" onsubmit="return postToGoogle();" action="https://docs.google.com/forms/u/0/d/e/1FAIpQLSd8wzAC4N0LxHa-iHCuOWoKkHG0GRD2_Y-QNDWrDEKnxTqO8A/formResponse" autocomplete="on"> 
        <h1> Sign Up </h1>
        <fieldset>
        	<legend><span class="number">1</span>Send Feedback</legend>
           <label for="Email">Email</label>
          <input id="Email" name="entry.1133347544" type="text" >
          <label for="name">Suggest Books</label>
          <input id="name" name="entry.573687899" type="text" >
          <!-- <label for="suggestion">Suggest Books</label>
          <input id="suggestion" name=" entry.1052880661" type="text" > -->
          <label for="Technical Issues">Name</label>
          <input id="TechIssue" name="entry.488418468" type="text">
          <label for="thought">Share Thoughts or Problems</label>
          <input id="Thought" name="entry.1948037240" type="text">
          <label for="Phone">Phone Number</label>
          <input id="phone" name="entry.907349080" type="tel">
          <button id="send" type="submit" class="common_btn">Thanks for submission</button>
          <h3 id="success-msg" style="text-align: center !important; margin-top:190px !important; display:none; color:#fff"> Thanks for Sharing</h3>
      </fieldset>  
       </form>
        </div>
      </div>
	</section>


<h3 id="success-msg" style="text-align: center !important; margin-top:190px !important; display:none; color:#fff"> Your Order has been Updated</h3>


<script>
function postToGoogle() {

				
                var field1 = $("#Email").val();
                var field2 = $("#name").val();
                var field3 = $("#suggestion").val();
                var field4 = $("#TechIssue").val();
                var field5 = $("#Thought").val();
                var field6  = $("#phone").val();
 				
				if(field1 == ""){
					alert('Please Fill Your Name');
					document.getElementById("nameField").focus();
					return false;
				}
				if(field2 == ""){
					alert('Please Fill Your Email');
					document.getElementById("emailField").focus();
					return false;
				}
				if(field3 == "" || field3.length > 10 || field3.length < 10){
					alert('Please Fill Your Mobile Number');
					document.getElementById("mobField").focus();
					return false;
				}


				
	
                $.ajax({
                      url: "https://docs.google.com/forms/d/e/1FAIpQLSd8wzAC4N0LxHa-iHCuOWoKkHG0GRD2_Y-QNDWrDEKnxTqO8A/formResponse?",
					             data: {"entry.1133347544 ": field1, "entry.573687899": field2, "entry.1052880661": field3, "entry.488418468": field4,"entry.1948037240":field5,"entry.907349080":field6,},
                      type: "POST",
                      dataType: "xml",);
                    success: function(d)
					{
					},
					error: function(x, y, z)
						{

							$('#success-msg').show();
							$('#form').hide();
							
						}
                });
				return false;
            }
</script>
<style>
}
*, *:before, *:after {
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  box-sizing: border-box;
}
body {
  font-family: 'Nunito', sans-serif;
  color: #384047;
}
form {
  max-width: 300px;
  margin: 10px auto;
  padding: 10px 20px;
  background: #f4f7f8;
  border-radius: 8px;
}
h1 {
  margin: 0 0 30px 0;
  text-align: center;
}
input[type="text"],
input[type="password"],
input[type="date"],
input[type="datetime"],
input[type="email"],
input[type="number"],
input[type="search"],
input[type="tel"],
input[type="time"],
input[type="url"],
textarea,
select {
  background: rgba(255,255,255,0.1);
  border: none;
  font-size: 16px;
  height: auto;
  margin: 0;
  outline: 0;
  padding: 15px;
  width: 100%;
  background-color: #e8eeef;
  color: #8a97a0;
  box-shadow: 0 1px 0 rgba(0,0,0,0.03) inset;
  margin-bottom: 30px;
}

input[type="radio"],
input[type="checkbox"] {
  margin: 0 4px 8px 0;
}
select {
  padding: 6px;
  height: 32px;
  border-radius: 2px;
}
button {
  padding: 19px 39px 18px 39px;
  color: #FFF;
  background-color: #4bc970;
  font-size: 18px;
  text-align: center;
  font-style: normal;
  border-radius: 5px;
  width: 100%;
  border: 1px solid #3ac162;
  border-width: 1px 1px 3px;
  box-shadow: 0 -1px 0 rgba(255,255,255,0.1) inset;
  margin-bottom: 10px;
}
fieldset {
  margin-bottom: 30px;
  border: none;
}
legend {
  font-size: 1.4em;
  margin-bottom: 10px;
}
label {
  display: block;
  margin-bottom: 8px;
}
label.light {
  font-weight: 300;
  display: inline;
}
.number {
  background-color: #5fcf80;
  color: #fff;
  height: 30px;
  width: 30px;
  display: inline-block;
  font-size: 0.8em;
  margin-right: 4px;
  line-height: 30px;
  text-align: center;
  text-shadow: 0 1px 0 rgba(255,255,255,0.2);
  border-radius: 100%;
}
@media screen and (min-width: 480px) {
  form {
    max-width: 480px;
  }

}
header{
	background-color:rgba(255,255,255,0.4);
}
body{
    background-image: url('https://i.postimg.cc/RhLYkMNB/lilies-of-the-valley-2454762.jpg');
    -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  }


</style>
</body>

