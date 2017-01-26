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
	for (var i = elements.length - 1; i >= 0; i--) {
			
		var e = elements[i];
		var content = e.innerHTML;
		var div = document.createElement("DIV");
		div.innerHTML = content;
		div.classList = e.classList;
		div.classList.add("hidden")
		list.insertBefore(div, e);
		list.removeChild(e);
	
	};
	
}
function toggleSwitch(category,section,switchid) {
	var list = document.getElementById(section);
	var elements = list.getElementsByClassName(category);
	if (switchid.checked) {
		for (var i = elements.length - 1; i >= 0; i--) {
			var e = elements[i];
			var content = e.innerHTML;
			var li = document.createElement("LI");
			li.innerHTML = content;
			li.classList = e.classList;
			li.classList.remove("hidden");
			list.insertBefore(li, e);
			list.removeChild(e);
		};
	} else {
		for (var i = elements.length - 1; i >= 0; i--) {
			var e = elements[i];
			var content = e.innerHTML;
			var div = document.createElement("DIV");
			div.innerHTML = content;
			div.classList = e.classList;
			div.classList.add("hidden");
			list.insertBefore(div, e);
			list.removeChild(e);
		};
	};
	
	
}