var form = document.getElementById("signUpForm");

function courseSignUp() {
	for (var i = 0; i < form.elements["professor"].value; i++) {
		console.log(form.elements["professor"].value);
	}
}