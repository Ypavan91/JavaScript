var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP"); // ActiveXObject("Microsoft.XMLHTTP") is to support old browsers which are not supporting to XHR object.
}
request.open('GET', 'data.txt'); //
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request);
		document.writeln(request.responseText);
	}
}
request.send();
