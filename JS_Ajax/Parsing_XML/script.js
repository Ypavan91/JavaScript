var request;
if (window.XMLHttpRequest) {
	request = new XMLHttpRequest();
} else {
	request = new ActiveXObject("Microsoft.XMLHTTP");
}
request.open('GET', 'data.xml'); // Reading XML file.
request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
/*
1.response.XML - converts the data into an object that you can manipulate through JavaScript.
2.firstChild is first element in an array.
3.Every element inside an XML structure is considered a node. Elements inside other elements, including the text inside an element, is also considered a node.

*/
		console.log(request.responseXML.getElementsByTagName('name')[1].firstChild.nodeValue);
		
		var items = request.responseXML.getElementsByTagName('name');
		var output = '<ul>';
		for (var i = 0; i < items.length; i++) {
			output += '<li>' + items[i].firstChild.nodeValue + '</li>';
		}
		output += '</ul>';
		document.getElementById('update').innerHTML = output;
	}
}
request.send();
