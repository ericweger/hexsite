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
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle(array) {
	var len = array.length;
	for (var i = len-1; i > 0; i--) {
		var j = getRandomIntInclusive(0, i);
		var a = array[i];
		var b = array[j];
		array[i] = b;
		array[j] = a;
	};
	return array;
};

function initialize(initialarray) {
	for (var i = 0; i < Math.ceil(initialarray.length / 3); i++ ) {
		initialarray.push({category: "pusher"});
	};
	var array = shuffle(initialarray);
	var list = $('#hex');
	list.empty();
	for (var i = 0; i < array.length; i++) {
		var entry = array[i];
		if (entry.category == "pusher") {
			list.append('<li class="pusher"></li>')
		} else {
			list.append('<li class="' + entry.category + '"><div><a href="' + entry.url + '" target="_blank"></a><img src="../static/' + entry.image + '"/><h1>' + entry.brand + '</h1><p>' + entry.description + '</p></div></li>');
		};
		
	};
}