$(document).ready(function(){

	$('#contactButton').on('click', function(){
			var firstName = $('#first_name').val().trim();
			console.log(firstName);
			var lastName = $('#last_name').val().trim();
			console.log(lastName);
			var email = $('#email').val().trim();
			console.log(email);
			var message = $('#textarea1').val().trim();
			console.log(message);
	});


})