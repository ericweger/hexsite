function typeFilter(classname) {
	var e = document.getElementsByClassName(classname);
	for (i=0; i < e.length; i++) {
		e[i].style.display = e[i].style.display == "none" ? "block" : "none";
	}
	
}
function toggleAll(id) {
	var e = document.getElementById(id);
	e.style.display = e.style.display == "none" ? "block" : "none";
}
function typeFilter2(classname) {
	var e = document.getElementsByClassName(classname);
	e.style.display = e.style.display == "none" ? "block" : "none"
}
function clicker(category,id) {
	var list = document.getElementById(id);
	var elements = list.getElementsByClassName(category);
	
		var e = elements[0];
		var classes = e.classList;
		var content = e.innerHTML;
		var div = document.createElement("DIV");
		div.innerHTML = content;
		var newclasses = div.classList;
		newclasses.add(classes, "hidden");
		list.insertBefore(div, e);
	
	
	
}