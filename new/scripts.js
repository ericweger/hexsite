function typeFilter(classname) {
	var e = document.getElementsByClassName(classname);
	for (i=0; i < e.length; i++) {
		e[i].style.display = e[i].style.display == "none" ? "block" : "none";
	}
	rowStarts();
}

function toggleAll(id) {
	var e = document.getElementById(id);
	e.style.display = e.style.display == "none" ? "block" : "none";
}

function rowStarts() {
	
}