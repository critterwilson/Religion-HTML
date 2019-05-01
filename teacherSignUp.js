var form = document.getElementById("signUpForm").elements;

function linford() {
	if (document.getElementById("userSelect").value == "Linford, Kristy"){
		document.getElementById("linford").style.display = "block";
		document.getElementById("signUpForm").style.display = "none";
	} else { 
		document.getElementById("linford").style.display = "none";
		document.getElementById("signUpForm").style.display = "block";
	}
}

function courseSignUp() {
	for (var i = 0; i < 6; i++) {
		str = "courseSignUp_" + i;
		if (i < form.namedItem("numCourses").value) {
			document.getElementById(str).style.display = "block";
		} else {
			document.getElementById(str).style.display = "none";
		}

		if (form.namedItem("numCourses").value < 1) {
			document.getElementById("professorSubmit").style.display = "none";
		} else {
			document.getElementById("professorSubmit").style.display = "block";

		}
	}
}