var form = document.getElementById("signUpForm").elements;

function linford() {
	if (form.namedItem("professor").value == "Linford, Kristy"){
		document.getElementById("linford").style.display = "block";
		document.getElementById("numCourses").style.display = "none";
	} else { 
		document.getElementById("linford").style.display = "none";
		document.getElementById("numCourses").style.display = "block";
	}
}

function courseSignUp() {
	for (var i=0; i < 6; i++) {
		str = "courseSignUp_" + i;
		if (i < form.namedItem("numCourses").value) {
			document.getElementById(str).style.display = "block";
		} else {
			document.getElementById(str).style.display = "none";
		}
	}
}