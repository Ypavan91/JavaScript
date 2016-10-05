var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.json');
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
// JSON.parse - it is the way to parse the json data but few old browsers won't support JSON.parse in this situation we can use JQuery library.
		var items = JSON.parse(request.responseText);
		var output = '<ul>';
		for (var key in items) {
			output += '<li>' + items[key].name + '</li>';
		}
		output += '</ul>';
		document.getElementById('update').innerHTML = output;
	}
}
request.send();
