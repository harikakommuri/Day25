$(document).ready(function() {
  $("#signinbutton").click(function() {
  $(".form .signin").show();
  $(".form .signup").hide();
  $("#signupbutton").addClass("btn-default");
  $("#signinbutton").addClass("btn-sm");
  $("#signinbutton").addClass("btn-success");
  $("#signupbutton").addClass("btn-xs");
});
$("#signupbutton").click(function() {
$(".form .signup").css("display","block");
$(".form .signin").css("display","none");
$("#signupbutton").addClass("btn-lg");
$("#signinbutton").addClass("btn-xs btn-default");
});
$("#firstname").change(function() {
  var firstname = document.getElementById("firstname").value;
  var nameCheck = /^[a-zA-Z]+$/;
  if(!nameCheck.test(firstname)) {
  var validname = $("<p>Enter valid name</p>");
  validname.css("color","red");
  $("#firstname").after(validname);
}
else {
    $("#firstname").after($('<i class="fa fa-check-circle"></i>'));
}
});
$("#surname").change(function() {
  var surname = document.getElementById("surname").value;
  var nameCheck = /^[a-zA-Z]+$/;
  if(!nameCheck.test(surname)) {
  var validname = $("<p>Enter valid surname</p>");
  validname.css("color","red");
  $("#surname").after(validname);
}
else {
    $("#surname").after($('<i class="fa fa-check-circle"></i>'));
}
});
$("#mobilenumber").change(function() {
  var mobilenumber = document.getElementById("mobilenumber").value;
  var mobilecheck = /^[0-9]{10}$/;
  var validnumber = $("<p>Please enter 10 digit mobile number</p>");
  validnumber.css("color","red");
  if(!mobilecheck.test(mobilenumber)) {
    $("#mobilenumber").after(validnumber);
  }
  else {
    $("#mobilenumber").after($('<i class="fa fa-check-circle"></i>'));
  }
});
});
