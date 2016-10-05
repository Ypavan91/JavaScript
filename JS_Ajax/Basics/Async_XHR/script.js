var request = new XMLHttpRequest();
request.open('GET', 'data.txt');

/* onreadystatechange is the event which checks readystate of the browser API, if readstate is 0 then request hasn't been sent yet.
 If it reaches to 4 then the operation of sending and receiving the requests has been completed.*/

request.onreadystatechange = function() {
	if ((request.readyState===4) && (request.status===200)) {
		console.log(request);
		document.writeln(request.responseText);
	}
}
request.send();
